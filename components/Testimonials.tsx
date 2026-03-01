'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "El mejor jerky que he probado. Perfecto para mis entrenamientos, sabor increíble y sin culpa.",
        author: "María G.",
        location: "CDMX",
        accent: 'border-berry',
        rotation: '-rotate-1',
    },
    {
        quote: "Finalmente un snack sin azúcar, pura proteína y el sabor del chile es auténtico.",
        author: "Carlos R.",
        location: "Monterrey",
        accent: 'border-gold',
        rotation: 'rotate-1',
    },
    {
        quote: "La textura es perfecta, no es duro como otros. Se nota la calidad.",
        author: "Ana P.",
        location: "Guadalajara",
        accent: 'border-white/20',
        rotation: '-rotate-2',
    },
    {
        quote: "Mis hijos lo adoran. Es difícil encontrar snacks saludables que realmente les gusten.",
        author: "Sofía M.",
        location: "Querétaro",
        accent: 'border-gold',
        rotation: 'rotate-2',
    },
    {
        quote: "Lo compro cada semana. Es mi go-to para proteína on-the-go.",
        author: "Diego L.",
        location: "Tijuana",
        accent: 'border-berry',
        rotation: 'rotate-1',
    },
    {
        quote: "El empaque es hermoso y el sabor es aún mejor. Producto mexicano de primera.",
        author: "Valeria H.",
        location: "Puebla",
        accent: 'border-white/20',
        rotation: '-rotate-1',
    },
];

export default function Testimonials() {
    return (
        <section className="relative z-20 py-20 md:py-28 bg-[#050505]">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-14 md:mb-20 px-4"
            >
                <span className="text-gold/40 text-xs tracking-[0.5em] uppercase block mb-4">Comunidad</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-3">
                    Lo Que Dicen <span className="hand-underline">Nuestros</span> Clientes
                </h2>
                <p className="font-script text-gold text-2xl md:text-3xl mt-4">
                    Historias reales ✨
                </p>
            </motion.div>

            {/* Masonry Community Wall */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            viewport={{ once: true, margin: '-30px' }}
                            className={`break-inside-avoid bg-warm-light border-l-2 ${t.accent} ${t.rotation} p-5 md:p-6 rounded-sm gold-glow transition-transform hover:scale-[1.01]`}
                        >
                            <p className="text-white/70 text-sm leading-relaxed mb-4 font-light italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-bold">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white/80 text-xs font-medium">{t.author}</p>
                                    <p className="text-white/30 text-[10px] tracking-widest uppercase">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
