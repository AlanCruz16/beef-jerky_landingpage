'use client';

import { motion } from 'framer-motion';

const values = [
    {
        icon: "grass",
        title: "RES 100% DE PASTOREO",
        description: "Criada éticamente en pasturas abiertas. Toda nuestra carne es 100% grass-fed y finished para un sabor superior."
    },
    {
        icon: "restaurant_menu",
        title: "ALTO EN PROTEÍNA, GRAN SABOR",
        description: "Repleto de proteína natural para alimentar tu día. Sin rellenos, solo energía pura."
    },
    {
        icon: "verified_user",
        title: "INGREDIENTES PREMIUM",
        description: "Una vida más saludable comienza con comida real. Usamos solo ingredientes enteros que puedes pronunciar."
    }
];

export default function ValuePropositions() {
    return (
        <section className="py-24 bg-surface relative z-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="px-4 space-y-6 pt-12 md:pt-0 first:pt-0"
                        >
                            <div className="mx-auto w-20 h-20 bg-background border border-white/10 rounded-full flex items-center justify-center transition-transform hover:scale-110 duration-300 shadow-lg group">
                                <span className="material-symbols-outlined text-gold text-4xl group-hover:text-berry transition-colors duration-300">
                                    {value.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-white mb-2 uppercase tracking-wide">
                                    {value.title}
                                </h3>
                                <div className="w-12 h-1 bg-berry mx-auto mb-4 rounded-full"></div>
                                <p className="text-muted font-light leading-relaxed max-w-xs mx-auto">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Load Material Symbols if needed (duplicated here just in case, but ideally loaded once in root layout or FeaturesRibbon) */}
            {/* Using simple link for now */}
        </section>
    );
}
