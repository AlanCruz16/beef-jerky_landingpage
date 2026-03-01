'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, PanInfo } from 'framer-motion';

const testimonials = [
    {
        quote: "El mejor jerky que he probado. Perfecto para mis entrenamientos, sabor increíble y sin culpa.",
        author: "MARÍA G.",
        location: "CDMX",
        rating: 5,
        initials: "MG",
    },
    {
        quote: "Finalmente un snack que cumple. Sin azúcar, pura proteína y el sabor del chile es auténtico.",
        author: "CARLOS R.",
        location: "MONTERREY",
        rating: 5,
        initials: "CR",
    },
    {
        quote: "La textura es perfecta, no es duro como otros. Se nota la calidad de la carne grass-fed.",
        author: "ANA P.",
        location: "GUADALAJARA",
        rating: 5,
        initials: "AP",
    },
    {
        quote: "Lo llevo a todas partes. En el gym, en la oficina, en los viajes. Es mi snack favorito.",
        author: "DIEGO M.",
        location: "HERMOSILLO",
        rating: 5,
        initials: "DM",
    },
    {
        quote: "Mis hijos lo aman. Por fin un snack saludable que realmente les gusta. Gracias Casa Lavínia.",
        author: "LAURA S.",
        location: "TIJUANA",
        rating: 5,
        initials: "LS",
    },
];

function TiltCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * -8, y: x * 8 });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] sm:w-[400px] glass-card noise-overlay p-8 cursor-grab active:cursor-grabbing select-none"
            style={{
                perspective: '1000px',
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
            }}
        >
            <div className="relative z-10">
                {/* Giant Quote Mark */}
                <span className="text-7xl font-serif leading-none gradient-berry-text opacity-40 select-none absolute -top-2 -left-1">
                    &ldquo;
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(t.rating)].map((_, stars) => (
                        <span key={stars} className="material-symbols-outlined text-gold text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                </div>

                {/* Quote */}
                <p className="text-gray-200 font-light text-lg leading-relaxed mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-berry flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-lg">
                        {t.initials}
                    </div>
                    <div>
                        <h4 className="text-white font-bold tracking-wider text-sm">{t.author}</h4>
                        <span className="text-xs text-muted uppercase tracking-[0.25em]">{t.location}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [sliderWidth, setSliderWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current && innerRef.current) {
            setSliderWidth(innerRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    const x = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const sectionScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const velocity = info.velocity.x;
        const offset = info.offset.x;
        // Snap with momentum
        const newX = x.get() + offset + velocity * 0.3;
        // Clamp
        const maxDrag = 0;
        const minDrag = -sliderWidth;
        const clamped = Math.max(minDrag, Math.min(maxDrag, newX));
        x.set(clamped);
    };

    return (
        <motion.section
            ref={sectionRef}
            style={{ scale: sectionScale, opacity: sectionOpacity }}
            className="py-20 md:py-28 bg-surface-light relative z-20 overflow-hidden section-reveal"
        >
            {/* Berry gradient glow on left edge */}
            <div className="absolute top-0 left-0 w-[150px] md:w-[300px] h-full bg-gradient-to-r from-berry/10 to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-0 right-0 w-[150px] md:w-[300px] h-full bg-gradient-to-l from-berry-deep/5 to-transparent pointer-events-none z-0"></div>

            <div className="relative z-10 pb-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 px-4"
                >
                    <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white uppercase tracking-wider mb-4">
                        Lo Que Dicen <span className="gradient-berry-text">Nuestros Clientes</span>
                    </h2>
                    <div className="w-20 h-1 gradient-berry mx-auto rounded-full"></div>
                </motion.div>

                {/* Drag Carousel */}
                <div className="w-full overflow-hidden px-4 sm:px-8" ref={carouselRef}>
                    <motion.div
                        ref={innerRef}
                        className="flex gap-6 w-max cursor-grab active:cursor-grabbing pb-8"
                        drag="x"
                        dragConstraints={{
                            left: -sliderWidth,
                            right: 0,
                        }}
                        dragElastic={0.1}
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                    >
                        {testimonials.map((t, i) => (
                            <TiltCard key={i} t={t} i={i} />
                        ))}
                    </motion.div>
                </div>

                {/* Drag indicator */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center text-muted/50 text-xs uppercase tracking-[0.3em] mt-10"
                >
                    <span className="material-symbols-outlined text-sm align-middle mr-1">swipe</span>
                    Arrastra para ver más
                </motion.p>
            </div>
        </motion.section>
    );
}
