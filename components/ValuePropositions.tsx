'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        emoji: '🐄',
        title: 'Rancho',
        description: 'Ganado Grass-Fed criado éticamente en las pasturas abiertas de Sonora, México.',
    },
    {
        emoji: '🌶',
        title: 'Ingredientes',
        description: 'Seleccionamos chile sonorense, sal de mar y especias naturales de la más alta calidad.',
    },
    {
        emoji: '🔥',
        title: 'Proceso',
        description: 'Ahumado lento y artesanal, sin azúcar añadida ni conservantes artificiales.',
    },
    {
        emoji: '📦',
        title: 'Tu Mesa',
        description: '26g de proteína pura entregada fresca a tu puerta. Lista para alimentar tu día.',
    },
];

function TimelineNode({ step, index }: { step: typeof steps[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col items-center text-center relative gold-glow rounded-2xl p-6 md:p-8"
        >
            {/* Circle node */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-warm-light border-2 border-gold/20 flex items-center justify-center mb-5 relative">
                <span className="text-3xl md:text-4xl icon-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {step.emoji}
                </span>
                {/* Step number */}
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-background text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                </span>
            </div>

            <h3 className="font-display text-xl md:text-2xl text-white mb-2">{step.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-[220px] font-light">
                {step.description}
            </p>
        </motion.div>
    );
}

export default function ValuePropositions() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "end 50%"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={sectionRef} className="relative z-20 py-20 md:py-32 bg-warm">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16 md:mb-20 px-4"
            >
                <span className="text-gold/40 text-xs tracking-[0.5em] uppercase block mb-4">Nuestra Historia</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-3">
                    Del <span className="hand-underline">Rancho</span> a Tu Mesa
                </h2>
                <p className="font-script text-gold text-2xl md:text-3xl mt-4">
                    Un viaje de calidad
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Connecting line — desktop only */}
                <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-white/[0.04]">
                    <motion.div
                        style={{ width: lineWidth }}
                        className="h-full bg-gradient-to-r from-gold/60 via-gold/40 to-gold/20"
                    />
                </div>

                {/* Mobile: vertical connecting line */}
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/[0.04]">
                    <motion.div
                        style={{ height: lineWidth }}
                        className="w-full bg-gradient-to-b from-gold/60 via-gold/40 to-gold/20"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
                    {steps.map((step, i) => (
                        <TimelineNode key={i} step={step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
