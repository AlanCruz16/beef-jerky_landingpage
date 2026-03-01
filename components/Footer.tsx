'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative z-20 bg-warm border-t border-gold/10">
            {/* Centered Stack */}
            <div className="max-w-lg mx-auto px-4 sm:px-6 text-center py-20 md:py-28">
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-10"
                >
                    <h2 className="font-display text-4xl md:text-5xl text-white">Casa Lavínia</h2>
                    <p className="font-script text-gold text-xl md:text-2xl">
                        Nutrición real para una vida real
                    </p>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-5 mb-10"
                >
                    {[
                        { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' },
                        { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', label: 'Instagram' },
                    ].map((social) => (
                        <a key={social.label} href="#" className="text-white/25 hover:text-gold gold-glow p-2 transition-colors duration-300" aria-label={social.label}>
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d={social.icon} />
                            </svg>
                        </a>
                    ))}
                </motion.div>

                {/* Hecho en Sonora Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="hand-circle font-script text-gold text-lg md:text-xl px-3 py-1">
                        Hecho en Sonora 🇲🇽
                    </span>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-white/30 text-xs tracking-widest uppercase mb-4">Únete al Newsletter</p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="flex-1 bg-warm-light border border-gold/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/30 transition-colors font-light"
                        />
                        <button className="px-6 py-3 bg-gold text-background text-xs uppercase tracking-widest rounded-full font-bold hover:bg-gold/90 transition-colors shrink-0">
                            Suscribir
                        </button>
                    </form>
                </motion.div>

                {/* Minimal Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/15 text-[11px] tracking-widest uppercase">
                    <a href="#" className="hover:text-gold transition-colors">Shop</a>
                    <a href="#" className="hover:text-gold transition-colors">Historia</a>
                    <a href="#" className="hover:text-gold transition-colors">Contacto</a>
                    <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
                    <a href="#" className="hover:text-gold transition-colors">Términos</a>
                </div>

                <p className="text-white/10 text-[10px] tracking-wider mt-6">
                    © 2026 Casa Lavínia. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
