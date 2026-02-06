import React from 'react';

const ScaleTicker = () => {
    const metrics = [
        { label: "Annual Revenue", value: "UGX 10 Billion+" },
        { label: "Certifications", value: "ISO 9001:2015, 14001, 45001" },
        { label: "Single Contract Value", value: "UGX 5.6 Billion" },
        { label: "Operational History", value: "20+ Years" },
    ];

    return (
        <section className="bg-gold-500 py-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                {metrics.map((metric, index) => (
                    <div key={index} className="text-center md:text-left flex flex-col items-center md:items-start group cursor-default">
                        <span className="text-navy-900/70 text-xs font-bold uppercase tracking-widest mb-1">{metric.label}</span>
                        <span className="text-navy-900 font-heading font-black text-2xl md:text-3xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                            {metric.value}
                        </span>
                    </div>
                ))}
            </div>

            {/* Background texture or pattern can go here */}
            <div className="absolute inset-0 bg-navy-900/5 rotate-3 scale-110 pointer-events-none"></div>
        </section>
    );
};

export default ScaleTicker;
