'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroCanvas from '@/components/HeroCanvas';
import FeaturesRibbon from '@/components/FeaturesRibbon';
import ValuePropositions from '@/components/ValuePropositions';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

// Scrollytelling Beats Data
const beats = [
    {
        start: 0.1,
        end: 0.35,
        text: "Producto Sonorense",
        position: { top: "30%", left: "10%" }
    },
    {
        start: 0.3,
        end: 0.55,
        text: "26g Proteína",
        position: { top: "50%", left: "30%" }
    },
    {
        start: 0.5,
        end: 0.75,
        text: "Sin Azúcar",
        position: { top: "30%", left: "60%" }
    },
    {
        start: 0.7,
        end: 0.95,
        text: "Sin Gluten",
        position: { top: "50%", left: "80%" }
    }
];

export default function Home() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <main className="relative bg-[#050505] min-h-[400vh]">

            {/* 1) Validation: Scroll Indicator */}
            <motion.div
                className="fixed bottom-10 inset-x-0 mx-auto w-max text-white/50 text-sm font-light tracking-widest z-40 pointer-events-none"
                style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            >
                SCROLL TO EXPLORE
            </motion.div>

            {/* 2) Canvas Background */}
            <div className="absolute inset-0 z-0">
                <HeroCanvas />
            </div>

            {/* 3) Text Overlays */}
            {/* <div className="fixed inset-0 z-10 pointer-events-none">
                {beats.map((beat, i) => (
                    <BeatSection key={i} beat={beat} progress={smoothProgress} />
                ))}
            </div> */}

            {/* Spacer to allow scrolling */}
            <div className="h-[400vh]"></div>

            {/* 4) New Static Sections */}
            <div className="relative z-20 bg-background">
                <FeaturesRibbon />
                <ValuePropositions />
                <Testimonials />
                <Footer />
            </div>
        </main>
    );
}

/*
function BeatSection({ beat, progress }: { beat: any, progress: any }) {
    // Fade in/out
    const opacity = useTransform(
        progress,
        [beat.start, beat.start + 0.1, beat.end - 0.1, beat.end],
        [0, 1, 1, 0]
    );

    // Scale effect for impact
    const scale = useTransform(
        progress,
        [beat.start, beat.start + 0.1, beat.end - 0.1, beat.end],
        [0.8, 1, 1, 0.8]
    );

    return (
        <motion.div
            className="absolute text-white font-bold tracking-tighter"
            style={{
                opacity,
                scale,
                top: beat.position.top,
                left: beat.position.left,
                transform: 'translate(-50%, -50%)' // Center on position point
            }}
        >
            <h2 className="text-4xl md:text-6xl lg:text-7xl whitespace-nowrap">
                {beat.text}
            </h2>
        </motion.div>
    );
}
*/
