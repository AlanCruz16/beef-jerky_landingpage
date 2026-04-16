'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const values = [
    {
        icon: "menu_book",
        title: "3 Ingredientes",
        subtitle: "Carne · Sal · Especias",
        description: "Nuestro beef jerky se hace con solo 3 ingredientes: carne de res, sal y especias. Sin conservadores, sin rellenos, sin complicaciones — solo lo que necesitas.",
        image: "/values/3-ingredientes.png",
    },
    {
        icon: "verified_user",
        title: "Alto en Proteína · Sin Azúcar · Sin Gluten",
        subtitle: "26g por Porción · Ingredientes Premium",
        description: "Repleto de proteína natural para alimentar tu día. Sin azúcar añadida, sin gluten, sin rellenos innecesarios. Usamos solo ingredientes enteros que puedes pronunciar.",
        image: "/values/proteina-premium.png",
    },
    {
        icon: "landscape",
        title: "Hecho en Sonora",
        subtitle: "Producto 100% Sonorense",
        description: "Hecho con orgullo en Sonora. Desde la selección de la carne hasta el empaque final, cada paso sucede aquí — apoyando a productores locales y celebrando nuestra tierra.",
        image: "/values/hecho-en-sonora.png",
    },
];

function FullBleedPanel({ value, index }: { value: typeof values[0]; index: number }) {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax: image moves slower than scroll
    const imageY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
    const isReversed = index % 2 !== 0;

    return (
        <div ref={ref} className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden">
            {/* Background gradient transition */}
            <div className="absolute inset-0 section-gradient-alt"></div>

            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${isReversed ? '' : ''}`}>
                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, margin: '-100px' }}
                    className={`space-y-6 ${isReversed ? 'md:order-2' : 'md:order-1'}`}
                >
                    <span className="text-gold/50 text-xs tracking-[0.4em] uppercase font-light">
                        {value.subtitle}
                    </span>
                    <h3 className="text-editorial-sm font-display text-white gold-accent">
                        {value.title}
                    </h3>
                    <p className="text-white/50 font-light text-lg leading-[1.8] max-w-md">
                        {value.description}
                    </p>
                </motion.div>

                {/* Image Side — Parallax */}
                <motion.div
                    style={{ y: imageY }}
                    className={`relative ${isReversed ? 'md:order-1' : 'md:order-2'}`}
                >
                    <motion.div
                        initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
                    >
                        {/* Editorial imagery */}
                        <img
                            src={value.image}
                            alt={value.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Gold corner accent */}
                        <div className="absolute top-0 left-0 w-16 h-[1px] bg-gold/30"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-16 bg-gold/30"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gold/30"></div>
                        <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gold/30"></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default function ValuePropositions() {
    return (
        <section className="relative z-20">
            {/* Section Header */}
            <div className="section-gradient py-20 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                    className="text-center px-4"
                >
                    <span className="text-gold/40 text-xs tracking-[0.5em] uppercase block mb-6">Nuestra Filosofía</span>
                    <h2 className="text-editorial font-display text-white gold-accent-center">
                        Por Qué Lavínia
                    </h2>
                    <p className="text-white/50 font-light text-lg leading-[1.8] max-w-2xl mx-auto mt-8">
                        En Casa Lavínia creamos productos con historia, corazón y propósito.
                        Cada vez que eliges uno, comes bien… y formas parte de algo más grande.
                        Hechos con ingredientes sonorenses, altos en proteína y sin azúcar.
                        Pensados para quienes cuidan lo que comen… o simplemente buscan algo que sepa bien.
                    </p>
                </motion.div>
            </div>

            {/* Full-Bleed Alternating Panels */}
            {values.map((value, i) => (
                <FullBleedPanel key={i} value={value} index={i} />
            ))}
        </section>
    );
}
