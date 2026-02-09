'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "El mejor jerky que he probado. Perfecto para mis entrenamientos, sabor increíble y sin culpa.",
        author: "MARÍA G.",
        location: "CDMX",
        rating: 5
    },
    {
        quote: "Finalmente un snack que cumple. Sin azúcar, pura proteína y el sabor del chile es auténtico.",
        author: "CARLOS R.",
        location: "MONTERREY",
        rating: 5
    },
    {
        quote: "La textura es perfecta, no es duro como otros. Se nota la calidad de la carne grass-fed.",
        author: "ANA P.",
        location: "GUADALAJARA",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-surface-light relative z-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-berry/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                        Lo Que Dicen Nuestros <span className="text-gold">Clientes</span>
                    </h2>
                    <div className="w-20 h-1 bg-berry mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-white/5 p-8 rounded-2xl relative group hover:border-berry/30 transition-colors duration-300"
                        >
                            <span className="text-6xl text-gold/20 font-serif absolute top-4 left-6">"</span>
                            <div className="flex gap-1 mb-6 text-gold text-sm relative z-10">
                                {[...Array(t.rating)].map((_, stars) => (
                                    <span key={stars} className="material-symbols-outlined fill-current text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <p className="text-gray-300 font-light text-lg mb-8 relative z-10 leading-relaxed italic">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-berry/20 flex items-center justify-center text-berry font-bold">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold tracking-wider text-sm">{t.author}</h4>
                                    <span className="text-xs text-muted uppercase tracking-widest">{t.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
