'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useMotionValueEvent, useTransform, motion } from 'framer-motion';

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Preload images
    useEffect(() => {
        const frameCount = 192;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/sequence/frame_${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Draw frame
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Scaling logic (contain)
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawHeight = canvasHeight;
            drawWidth = img.width * (canvasHeight / img.height);
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = canvasWidth;
            drawHeight = img.height * (canvasWidth / img.width);
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame on resize
                const currentProgress = smoothProgress.get();
                const frameIndex = Math.min(
                    191,
                    Math.floor(currentProgress * 191)
                );
                if (isLoaded) drawFrame(frameIndex);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]);

    // Animation Loop
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (!isLoaded) return;
        const frameIndex = Math.min(
            191,
            Math.floor(latest * 191) // Map 0-1 to 0-191
        );
        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Initial draw when loaded
    useEffect(() => {
        if (isLoaded) {
            drawFrame(0);
        }
    }, [isLoaded]);

    // Fade out logic
    const opacity = useSpring(useTransform(scrollYProgress, [0.85, 0.98], [0, 1]), {
        stiffness: 100,
        damping: 30
    });

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] text-white">
                <div className="flex flex-col items-center gap-4">
                    {/* Spinner */}
                    <div className="w-12 h-12 border-4 border-white/20 border-t-[#D41C61] rounded-full animate-spin"></div>
                    <p className="font-mono text-sm tracking-widest">LOADING {loadingProgress}%</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-[450vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain"
                />

                {/* Fade to black overlay for smooth transition */}
                <motion.div
                    className="absolute inset-0 bg-[#050505] pointer-events-none"
                    style={{ opacity }}
                />
            </div>
        </div>
    );
}
