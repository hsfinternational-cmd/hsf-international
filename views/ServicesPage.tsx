import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import { Truck, Zap, Shield, Wrench, HardHat, Leaf, Globe, Settings } from 'lucide-react';

const services = [
    {
        icon: Zap,
        title: "Energy & Oil/Gas",
        desc: "Comprehensive solutions for the energy sector, from transformer supply (Dongrui JV) to last-mile connectivity in the Albertine Graben."
    },
    {
        icon: Truck,
        title: "Logistics & Fleet",
        desc: "Supply and maintenance of specialized motor vehicles (Land Cruisers, APCs) and heavy haulage logistics."
    },
    {
        icon: Shield,
        title: "ICT & Security",
        desc: "Enterprise firewalls (Cisco), cyber-sovereignty consulting, and secure digital infrastructure implementation."
    },
    {
        icon: HardHat,
        title: "Civil Engineering",
        desc: "Infrastructure development, road construction support, and VVIP terminal safety systems."
    },
    {
        icon: Leaf,
        title: "Agriculture",
        desc: "Agribusiness supply chain optimization and mechanization support for large-scale farming."
    },
    {
        icon: Globe,
        title: "Tourism & Travel",
        desc: "Hospitality logistics and infrastructure support for the growing tourism sector."
    },
    {
        icon: Settings,
        title: "Waste Management",
        desc: "Sustainable disposal solutions and recycling infrastructure planning."
    },
    {
        icon: Wrench,
        title: "Technical Maintenance",
        desc: "24/7 support and maintenance for all supplied machinery and fleets."
    }
];

const ServicesPage = () => {
    return (
        <div className="bg-slate-50 pt-24 min-h-screen">

            {/* Hero */}
            <section className="bg-navy-900 text-white py-20 px-4 text-center">
                <MotionWrapper>
                    <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
                    <h1 className="font-heading font-black text-4xl md:text-5xl">Capabilities & Sectors</h1>
                </MotionWrapper>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <MotionWrapper key={idx} delay={idx * 0.05} variant="fade-up" className="bg-white p-8 rounded shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-coral-500 group">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-coral-500 group-hover:text-white transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-navy-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                        </MotionWrapper>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-coral-500 py-16 text-center text-white">
                <h2 className="font-heading font-bold text-3xl mb-4">Need a specialized solution?</h2>
                <p className="mb-8 opacity-90">We customize our global capabilities to your local needs.</p>
                <a href="/contact" className="bg-navy-900 text-white px-8 py-3 font-bold rounded hover:bg-white hover:text-navy-900 transition-colors inline-block">
                    Contact Our Engineering Team
                </a>
            </section>

        </div>
    );
};

export default ServicesPage;
