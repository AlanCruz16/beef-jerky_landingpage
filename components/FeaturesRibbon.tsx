'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
    { title: "PRODUCTO SONORENSE" },
    { title: "26G PROTEÍNA" },
    { title: "SIN AZÚCAR" },
    { title: "SIN GLUTEN" },
];

export default function FeaturesRibbon() {
    return (
        <div className="w-full bg-[#0a0a0a] border-y border-white/5 relative z-20 overflow-hidden py-8">
            <div className="relative w-full flex overflow-hidden mask-linear-fade">
                <motion.div
                    className="flex flex-nowrap gap-12 md:gap-24 whitespace-nowrap"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60 // Much slower duration for premium feel
                    }}
                >
                    {/* Quadruple the list to ensure no gaps during the loop reset */}
                    {[...features, ...features, ...features, ...features, ...features, ...features].map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-12 md:gap-24">
                            <span className="font-display font-black text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 uppercase tracking-widest shrink-0">
                                {feature.title}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-berry shrink-0" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
