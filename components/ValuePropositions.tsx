'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const values = [
    {
        icon: "grass",
        title: "RES 100% DE PASTOREO",
        shortTitle: "GRASS-FED",
        description: "Criada éticamente en pasturas abiertas. Toda nuestra carne es 100% grass-fed y finished para un sabor superior.",
        featured: true,
    },
    {
        icon: "restaurant_menu",
        title: "ALTO EN PROTEÍNA",
        shortTitle: "PROTEÍNA",
        description: "Repleto de proteína natural para alimentar tu día. Sin rellenos, solo energía pura de 26g por porción.",
        featured: false,
    },
    {
        icon: "verified_user",
        title: "INGREDIENTES PREMIUM",
        shortTitle: "PREMIUM",
        description: "Una vida más saludable comienza con comida real. Usamos solo ingredientes enteros que puedes pronunciar.",
        featured: false,
    },
];

function FlipCard({ value, index, isFeatured }: { value: typeof values[0]; index: number; isFeatured: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`flip-card ${isFeatured ? 'row-span-2 md:col-span-2 md:row-span-2' : ''} ${isFeatured ? 'glow-pulse' : ''}`}
            style={{ minHeight: isFeatured ? '420px' : '200px' }}
        >
            <div className="flip-card-inner">
                {/* ── Front Face ── */}
                <div className={`flip-card-front glass-card noise-overlay flex flex-col items-center justify-center p-8 ${isFeatured ? 'p-12' : 'p-8'}`}>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 transition-all duration-500 ${isFeatured ? 'w-24 h-24' : 'w-16 h-16'}`}>
                            <span className={`material-symbols-outlined text-berry transition-transform duration-500 ${isFeatured ? 'text-5xl' : 'text-3xl'}`}>
                                {value.icon}
                            </span>
                        </div>
                        <h3 className={`font-display font-extrabold text-white uppercase tracking-wider leading-tight ${isFeatured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                            {isFeatured ? value.title : value.shortTitle}
                        </h3>
                        <div className="mt-4 w-10 h-[2px] gradient-berry rounded-full"></div>
                        <p className="text-muted/60 text-xs uppercase tracking-[0.25em] mt-4">
                            Hover para más
                        </p>
                    </div>
                </div>

                {/* ── Back Face ── */}
                <div className="flip-card-back glass-card noise-overlay flex flex-col items-center justify-center p-8" style={{ background: 'rgba(212, 28, 97, 0.05)' }}>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <span className={`material-symbols-outlined text-berry mb-4 ${isFeatured ? 'text-4xl' : 'text-3xl'}`}>
                            {value.icon}
                        </span>
                        <h3 className={`font-display font-bold text-white uppercase tracking-wide mb-4 ${isFeatured ? 'text-2xl' : 'text-lg'}`}>
                            {value.title}
                        </h3>
                        <p className={`text-gray-300 font-light leading-relaxed max-w-sm ${isFeatured ? 'text-base' : 'text-sm'}`}>
                            {value.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ValuePropositions() {
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
            className="py-20 md:py-28 bg-surface relative z-20 border-t border-white/5 section-reveal"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white uppercase tracking-wider mb-4">
                        Por Qué <span className="gradient-berry-text">Lavínia</span>
                    </h2>
                    <div className="w-20 h-1 gradient-berry mx-auto rounded-full"></div>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[200px] md:auto-rows-[200px]">
                    {values.map((value, index) => (
                        <FlipCard
                            key={index}
                            value={value}
                            index={index}
                            isFeatured={value.featured}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
