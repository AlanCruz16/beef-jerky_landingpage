'use client';

import React from 'react';

const ingredients = [
    { icon: '🐄', label: 'Res Grass-Fed' },
    { icon: '🌶', label: 'Chile Sonorense' },
    { icon: '💪', label: '26g Proteína' },
    { icon: '🚫', label: 'Sin Azúcar' },
    { icon: '🌾', label: 'Sin Gluten' },
    { icon: '🔥', label: 'Ahumado Natural' },
    { icon: '🧂', label: 'Sal de Mar' },
    { icon: '🌿', label: 'Especias Naturales' },
];

export default function FeaturesRibbon() {
    // Duplicate array for seamless loop
    const items = [...ingredients, ...ingredients];

    return (
        <section className="relative z-20 bg-warm border-y border-gold/10 overflow-hidden py-5 md:py-6">
            {/* Ticker Tape */}
            <div className="ticker-track flex items-center w-max">
                {items.map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="flex items-center gap-3 px-4 sm:px-6 shrink-0">
                            <span className="text-2xl icon-float" style={{ animationDelay: `${i * 0.4}s` }}>
                                {item.icon}
                            </span>
                            <span className="text-white/60 text-sm tracking-widest uppercase whitespace-nowrap font-light">
                                {item.label}
                            </span>
                        </div>
                        {/* Gold separator dot */}
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/40 shrink-0"></span>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
