import React from 'react';

const ContractorAggregator = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl">
                    <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">The HSF Model</span>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 mb-8 leading-tight">
                        We do not just bid; <span className="text-gold-500">we build.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light border-l-4 border-navy-900 pl-8 mb-12">
                        HSF International aggregates global capabilities—partnering with <strong className="text-navy-900 font-bold">Dongrui Electric (China)</strong>, <strong className="text-navy-900 font-bold">World Navi (Japan)</strong>, and <strong className="text-navy-900 font-bold">Fire Masters</strong>—to deliver turnkey solutions for the Government of Uganda and Multinational Investors.
                    </p>
                </div>
            </div>

            {/* Decorative large text */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 text-[20rem] font-black text-slate-50 opacity-50 select-none pointer-events-none font-heading text-navy-900">
                BUILD
            </div>
        </section>
    );
};

export default ContractorAggregator;
