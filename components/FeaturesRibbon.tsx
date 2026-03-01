'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const facts = [
    {
        icon: "local_fire_department",
        value: "26g",
        label: "PROTEÍNA",
    },
    {
        icon: "block",
        value: "0g",
        label: "AZÚCAR",
    },
    {
        icon: "eco",
        value: "100%",
        label: "GRASS-FED",
    },
    {
        icon: "no_food",
        value: "SIN",
        label: "GLUTEN",
    },
];

export default function FeaturesRibbon() {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const sectionScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.section
            ref={ref}
            style={{ scale: sectionScale, opacity: sectionOpacity }}
            className="relative z-20 section-reveal"
        >
            {/* ──── Desktop: Sticky Sidebar Facts Strip ──── */}
            <div className="hidden lg:flex w-full bg-[#0a0a0a] border-y border-white/5 noise-overlay">
                <div className="w-full max-w-7xl mx-auto py-16 px-8">
                    <div className="grid grid-cols-4 gap-8">
                        {facts.map((fact, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-berry/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,28,97,0.15)]">
                                    <span className="material-symbols-outlined text-berry text-3xl transition-transform duration-500 group-hover:scale-110">
                                        {fact.icon}
                                    </span>
                                </div>
                                <span className="font-display font-extrabold text-5xl text-white tracking-tight leading-none">
                                    {fact.value}
                                </span>
                                <span className="text-muted text-xs tracking-[0.3em] uppercase mt-2 font-medium">
                                    {fact.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ──── Mobile: Horizontal Snap-Scroll Carousel ──── */}
            <div className="lg:hidden w-full bg-[#0a0a0a] border-y border-white/5 noise-overlay py-8">
                <div className="relative z-10 flex gap-4 overflow-x-auto snap-carousel px-4 pb-4">
                    {facts.map((fact, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[80vw] max-w-[280px] glass-card p-6 flex flex-col items-center text-center"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-berry text-2xl">
                                    {fact.icon}
                                </span>
                            </div>
                            <span className="font-display font-extrabold text-4xl text-white tracking-tight leading-none">
                                {fact.value}
                            </span>
                            <span className="text-muted text-xs tracking-[0.3em] uppercase mt-2 font-medium">
                                {fact.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
