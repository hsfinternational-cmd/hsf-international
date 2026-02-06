import React from 'react';
import { Quote, FileText, Download } from 'lucide-react';
import Button from '../components/Button';

const ChairmanProfile = () => {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header / Intro */}
            <section className="relative bg-navy-900 text-white py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="md:w-1/2">
                        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Leadership</span>
                        <h1 className="font-heading font-black text-5xl md:text-6xl mb-6 leading-tight">
                            Hussein Abdullah: <br />
                            <span className="text-slate-400">The Visionary Behind Execution.</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                            "True sovereignty is not just political independence; it is the ability to build, power, and secure one's own nation."
                        </p>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="aspect-[3/4] md:aspect-square bg-slate-800 rounded-sm overflow-hidden border-2 border-gold-500/20 relative">
                            {/* Placeholder for Hussein Abdullah's Portrait */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="Hussein Abdullah"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Signature effect */}
                        <div className="absolute -bottom-10 -right-10 text-9xl font-handwriting text-white/5 font-heading">HA</div>
                    </div>
                </div>
                {/* Abstract background */}
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            </section>

            {/* The 20-Year Arc */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="flex gap-4 mb-12">
                    <Quote className="w-12 h-12 text-gold-500 transform rotate-180" />
                    <h2 className="text-3xl font-heading font-bold text-navy-900">The Philosophy of Resilience</h2>
                </div>
                <div className="prose prose-lg text-slate-600 space-y-6">
                    <p>
                        For over two decades, Hussein Abdullah has been a silent architect of Uganda's industrial backbone. Starting in logistics, he understood early that <strong>moving goods</strong> was secondary to <strong>building capacity</strong>.
                    </p>
                    <p>
                        His transition from pure logistics to a "Contractor-Aggregator" model was driven by a single insight: <em>Government and large-scale investors need a single point of accountability.</em> By aggregating global best-in-class partners—technologists from Japan, engineers from China, and safety experts from Italy—he created HSF International as a sovereign interface for global capability.
                    </p>
                    <p>
                        Today, his focus is on the "Money Economy"—ensuring that infrastructure projects translate into tangible economic velocity for the Ugandan citizen.
                    </p>
                </div>
            </section>

            {/* Insights / White Papers */}
            <section className="bg-slate-50 py-24 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="font-heading font-bold text-3xl text-navy-900 mb-12 text-center">Chairman's Insights</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Sovereign Capability: The New Industrial Age", type: "White Paper", size: "2.4 MB" },
                            { title: "The Money Economy: Infrastructure as Currency", type: "Strategic Note", size: "1.1 MB" }
                        ].map((doc, idx) => (
                            <div key={idx} className="bg-white p-8 border border-slate-200 hover:border-gold-500 transition-colors group flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="bg-navy-50 p-3 rounded text-navy-900 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-900 text-lg group-hover:text-gold-600 transition-colors">{doc.title}</h4>
                                        <span className="text-xs text-slate-400 uppercase tracking-widest mt-1 block">{doc.type} • {doc.size}</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="!p-2 !border-slate-200 !text-slate-400 hover:!border-gold-500 hover:!text-gold-500 hover:!bg-transparent">
                                    <Download className="w-5 h-5" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChairmanProfile;
