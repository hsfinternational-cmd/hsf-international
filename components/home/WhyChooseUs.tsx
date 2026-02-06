import React from 'react';
import Button from '../Button';
import { Star } from 'lucide-react';

export const OpportunityCTA = () => {
    return (
        <section className="bg-navy-900 py-16 border-b border-navy-800">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h2 className="font-heading font-black text-3xl text-white mb-2">We Are Open For Opportunities!</h2>
                    <p className="text-slate-400">HSF International is committed to fostering partnerships and driving sustainable growth.</p>
                </div>
                <button className="bg-coral-500 text-white font-bold px-8 py-4 rounded-sm hover:bg-coral-600 transition-colors shadow-lg shadow-coral-500/20 text-sm tracking-wide uppercase">
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export const WhyChooseUs = () => {
    const stats = [
        { label: "Business Security", value: 90 },
        { label: "Strategic Solutions", value: 95 },
        { label: "Customer Support", value: 88 },
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <span className="text-coral-500 font-bold text-xs tracking-widest uppercase mb-4 block">WHY CHOOSE US</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 mb-8 leading-tight">
                            We Build An Effective <br /> Product Strategy.
                        </h2>
                        <p className="text-slate-500 mb-12 leading-relaxed max-w-lg">
                            Our approach integrates detailed analysis, strategic planning, and flawless execution. We don't just solve problems; we prevent them.
                        </p>

                        <div className="space-y-8">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="font-heading font-bold text-navy-900">{stat.label}</span>
                                        <span className="font-bold text-coral-500">{stat.value}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-navy-900 rounded-full"
                                            style={{ width: `${stat.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-sm overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="w-full object-cover aspect-square"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-10 left-10 bg-black/60 backdrop-blur-md p-6 rounded-sm text-white max-w-xs border-l-4 border-coral-500">
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(n => <Star key={n} className="w-4 h-4 fill-coral-500 text-coral-500" />)}
                                </div>
                                <p className="font-bold text-lg mb-2">"Best service provider in the region."</p>
                                <span className="text-xs text-slate-300 uppercase tracking-widest">- Corporate Client</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
