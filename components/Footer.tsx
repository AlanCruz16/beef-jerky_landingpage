'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Footer() {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const sectionScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
    const sectionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.footer
            ref={ref}
            style={{ scale: sectionScale, opacity: sectionOpacity }}
            className="relative z-20 section-reveal"
        >
            {/* ═══════════════ CTA Block ═══════════════ */}
            <div className="relative noise-overlay overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0F0608 50%, #0A0A0A 100%)' }}>
                {/* Gradient glow orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-berry/10 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-berry-deep/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider mb-6 leading-[0.95]">
                            ¿Listo Para<br />
                            <span className="gradient-berry-text">Probar?</span>
                        </h2>
                        <p className="text-gray-400 font-light text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
                            Descubre el jerky que está cambiando las reglas. Proteína real, sabor increíble.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 gradient-berry text-white font-bold text-lg px-10 py-4 rounded-full uppercase tracking-wider transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,28,97,0.4)] hover:scale-105 group"
                        >
                            Compra Ahora
                            <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* ═══════════════ Compact Bottom Bar ═══════════════ */}
            <div className="bg-background border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-berry text-xl">agriculture</span>
                            <span className="font-display font-bold text-lg tracking-[0.15em] text-white uppercase">
                                Casa Lavínia
                            </span>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-white/30 text-center w-full sm:w-auto mt-4 sm:mt-0">
                            <Link href="#" className="hover:text-white transition-colors">Shop</Link>
                            <Link href="#" className="hover:text-white transition-colors">Historia</Link>
                            <Link href="#" className="hover:text-white transition-colors">Contacto</Link>
                            <span className="text-white/10 hidden sm:inline">|</span>
                            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
                            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                        </div>

                        {/* Social + Copyright */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto">
                            <div className="flex gap-4">
                                {[
                                    { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' },
                                    { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', label: 'Instagram' },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href="#"
                                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-berry hover:bg-berry/10 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <svg className="w-3.5 h-3.5 fill-white/40 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                            <span className="text-white/15 text-xs">
                                © 2026 Casa Lavínia
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
