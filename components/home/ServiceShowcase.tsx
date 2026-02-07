import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Financial Planning",
        desc: "Strategic funding options to support small to large-scale projects and corporate ventures.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
    },
    {
        title: "Project Management",
        desc: "Offering expert planning, execution, and oversight to ensure project success.",
        image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop"
    },
    {
        title: "ICT Services",
        desc: "Tailored IT solutions to enhance efficiency, secure data, and drive technological innovation.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Agriculture and Agribusiness",
        desc: "Supporting sustainable practices and agribusiness innovations to improve productivity.",
        image: "https://images.unsplash.com/photo-1625246333195-00f9b802e40e?q=80&w=2070&auto=format&fit=crop" // Tractor
    },
    {
        title: "Supply & Maintenance of Motor Vehicles",
        desc: "Supply and upkeep of motor vehicles, ensuring reliability, efficiency, and safety for all transportation needs.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" // Fleet
    },
    {
        title: "Engineering",
        desc: "Expertise in civil, structural, and mechanical engineering to deliver high-quality infrastructure solutions.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" // Construction/Engineering
    },
    {
        title: "Oil and Gas",
        desc: "Offering comprehensive support for oil & gas projects, with a focus on maximizing efficiency and adhering to strict safety standards.",
        image: "https://images.unsplash.com/photo-1516937941344-00b4ec734211?q=80&w=2070&auto=format&fit=crop" // Refinery
    },
    {
        title: "Tourism (Hospitality & Travel)",
        desc: "Enhancing efficiency and service standards in the tourism and hospitality industry.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" // Hotel/Resort
    },
    {
        title: "Logistics",
        desc: "Streamlined goods movement ensuring timely and secure deliveries worldwide.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" // Cargo/Shipping
    }
];

const ServiceShowcase = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <MotionWrapper className="mb-16">
                    <span className="text-coral-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Services</span>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900">What Service We Offer</h2>
                        <p className="text-slate-500 max-w-md text-sm md:text-right leading-relaxed">
                            HSF International is a versatile competitive consulting and services firm with a broad range of expertise across various industries worldwide.
                        </p>
                    </div>
                    <div className="h-1 w-20 bg-coral-500 mt-6"></div>
                </MotionWrapper>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <MotionWrapper key={idx} delay={idx * 0.05} variant="fade-up" className="bg-[#0B1221] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-300 group border border-white/5 hover:border-coral-500/30">

                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="font-heading font-bold text-xl text-coral-500 mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{s.desc}</p>

                                <div className="flex items-center gap-2 text-coral-500 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer">
                                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                        </MotionWrapper>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceShowcase;
