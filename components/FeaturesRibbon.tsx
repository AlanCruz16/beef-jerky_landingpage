'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const stats = [
    { value: 26, suffix: 'g', label: 'PROTEÍNA POR PORCIÓN' },
    { value: 0, suffix: 'g', label: 'AZÚCAR AÑADIDA' },
    { value: 100, suffix: '%', label: 'GRASS-FED' },
];

function AnimatedCounter({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);

    useEffect(() => {
        if (isInView) {
            animate(count, value, {
                duration: 2,
                delay: index * 0.3,
                ease: [0.25, 0.1, 0.25, 1],
            });
        }
    }, [isInView, count, value, index]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center py-10 md:py-0"
        >
            <motion.span className="text-editorial text-editorial text-white block">
                {displayValue}
            </motion.span>
            <span className="text-gold/60 text-xs tracking-[0.35em] uppercase mt-4 font-light">
                {label}
            </span>
        </motion.div>
    );
}

export default function FeaturesRibbon() {
    return (
        <section className="relative z-20 section-gradient py-16 md:py-24">
            {/* Top gold accent line */}
            <div className="gold-line w-full mb-12 md:mb-20"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                    {stats.map((stat, i) => (
                        <AnimatedCounter
                            key={i}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            index={i}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom gold accent line */}
            <div className="gold-line w-full mt-12 md:mt-20"></div>
        </section>
    );
}
