import React from 'react';
import MotionWrapper, { StaggerContainer } from '../components/MotionWrapper';
import { Target, Shield, Users, Award } from 'lucide-react';
import Button from '../components/Button';

const AboutPage = () => {
    return (
        <div className="bg-white pt-24 min-h-screen">

            {/* 1. Header Section */}
            <section className="bg-navy-900 text-white py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <MotionWrapper>
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
                        <h1 className="font-heading font-black text-5xl md:text-6xl mb-8 leading-tight max-w-4xl">
                            We Are The <span className="text-coral-500">Sovereign Interface</span> For Industrial Growth.
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
                            HSF International is not just a contractor; we are an aggregator of global capabilities. We bridge the gap between international technology and national implementation.
                        </p>
                    </MotionWrapper>
                </div>
                {/* Abstract Pattern */}
                <div className="absolute top-0 right-0 opacity-10 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-coral-500 via-navy-800 to-transparent"></div>
            </section>

            {/* 2. Mission / Vision Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { icon: Target, title: "Our Mission", text: "To deliver turnkey industrial solutions that empower national sovereignty and economic independence." },
                        { icon: Shield, title: "Our Vision", text: "To be the most trusted aggregator of engineering, logistics, and technology in East Africa." },
                        { icon: Users, title: "Our Philosophy", text: "We do not just bid; we build. Every project must translate into tangible economic velocity for Uganda." }
                    ].map((item, idx) => (
                        <MotionWrapper key={idx} delay={idx * 0.1} variant="fade-up" className="bg-slate-50 p-8 border border-slate-100 hover:border-coral-500 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-coral-500 shadow-sm mb-6 group-hover:bg-coral-500 group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-navy-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.text}</p>
                        </MotionWrapper>
                    ))}
                </div>
            </section>

            {/* 3. The "20-Year Arc" Timeline */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our History</span>
                        <h2 className="font-heading font-black text-4xl text-navy-900">A Legacy of Execution</h2>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-1/2 space-y-16">
                        {[
                            { year: "2006", title: "Foundation", text: "HSF Logistics established, focusing on heavy haulage across the East African corridor." },
                            { year: "2012", title: "Expansion", text: "Diversification into Civil Engineering and Construction support for the oil sector." },
                            { year: "2018", title: "Aggregation", text: "Strategic JVs signed with Dongrui Electric (China) and World Navi (Japan)." },
                            { year: "2024", title: "Sovereignty", text: "Awarded key contracts for UPF Fleet Modernization and National Grid Expansion." }
                        ].map((event, index) => (
                            <MotionWrapper key={index} variant={index % 2 === 0 ? "slide-right" : "slide-left"} className={`relative pl-12 md:pl-0 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-coral-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                                {/* Content - 50% width on desktop */}
                                <div className="w-full md:w-1/2 md:px-12">
                                    <div className="bg-white p-6 shadow-sm border border-slate-100 rounded hover:shadow-md transition-shadow">
                                        <span className="text-coral-500 font-black text-2xl block mb-2">{event.year}</span>
                                        <h3 className="font-bold text-navy-900 text-lg mb-2">{event.title}</h3>
                                        <p className="text-slate-600 text-sm">{event.text}</p>
                                    </div>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Leadership CTA */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <MotionWrapper variant="scale-up">
                    <h2 className="font-heading font-black text-4xl text-navy-900 mb-6">Leadership with Vision</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                        Led by Chairman Hussein Abdullah, our leadership team combines decades of experience in logistics, engineering, and public sector strategy.
                    </p>
                    <Button variant="primary" onClick={() => window.location.href = '/chairman'}>
                        Read Chairman's Profile
                    </Button>
                </MotionWrapper>
            </section>

        </div>
    );
};

export default AboutPage;
