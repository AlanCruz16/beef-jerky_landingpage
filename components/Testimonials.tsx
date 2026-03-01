'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "El mejor jerky que he probado. Perfecto para mis entrenamientos, sabor increíble y sin culpa. Una experiencia completamente diferente.",
        author: "María García",
        location: "Ciudad de México",
    },
    {
        quote: "Finalmente un snack que cumple lo que promete. Sin azúcar, pura proteína y el sabor del chile es auténtico, como en casa.",
        author: "Carlos Rodríguez",
        location: "Monterrey",
    },
    {
        quote: "La textura es perfecta, no es duro como otros. Se nota la calidad de la carne grass-fed. Mi nuevo snack indispensable.",
        author: "Ana Pérez",
        location: "Guadalajara",
    },
];

const INTERVAL = 5000;

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [key, setKey] = useState(0); // for progress bar reset

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setKey((prev) => prev + 1);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, INTERVAL);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    return (
        <section className="relative z-20 section-gradient">
            <div className="gold-line w-full"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
                {/* Section label */}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gold/40 text-xs tracking-[0.5em] uppercase block mb-16"
                >
                    Testimonios
                </motion.span>

                {/* Giant quotation mark */}
                <div className="text-gold/15 text-[120px] md:text-[180px] font-display leading-none select-none mb-[-40px] md:mb-[-60px]">
                    &ldquo;
                </div>

                {/* Crossfade Testimonial */}
                <div className="min-h-[220px] md:min-h-[200px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.96, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -10 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="max-w-3xl"
                        >
                            <blockquote className="text-editorial-italic text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-10">
                                {t.quote}
                            </blockquote>
                            <div>
                                <p className="text-white small-caps text-sm font-medium tracking-widest">
                                    {t.author}
                                </p>
                                <p className="text-muted/50 text-xs tracking-[0.3em] uppercase mt-1">
                                    {t.location}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Bar */}
                <div className="mt-14 max-w-xs mx-auto">
                    <div className="h-[1px] bg-white/[0.06] relative overflow-hidden">
                        <div
                            key={key}
                            className="absolute inset-0 bg-gold/50 progress-bar-fill"
                        ></div>
                    </div>
                    {/* Dots indicator */}
                    <div className="flex justify-center gap-3 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setCurrent(i); setKey((p) => p + 1); }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-gold w-6' : 'bg-white/15 hover:bg-white/25'}`}
                                aria-label={`View testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="gold-line w-full"></div>
        </section>
    );
}
