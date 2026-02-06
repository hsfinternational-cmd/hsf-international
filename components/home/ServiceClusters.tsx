import React from 'react';
import { ArrowRight, Zap, Truck, Shield, HardHat } from 'lucide-react';
import Button from '../Button';

const ServiceClusters = () => {
    const clusters = [
        {
            id: 1,
            title: "Energy & Oil/Gas",
            tagline: "Powering the Albertine.",
            description: "Supply of 11kV/33kV Transformers. Implementing the Electricity Access Scale-Up Project (EASP).",
            partner: "Dongrui Electric JV",
            icon: <Zap className="w-8 h-8 text-gold-500" />,
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" // Industrial Power
        },
        {
            id: 2,
            title: "Automotive & Fleet",
            tagline: "National Mobility.",
            description: "Specialized Toyota Land Cruisers & Electric Motorcycles for Uganda Police Force (UPF) and KCCA.",
            partner: "World Navi",
            icon: <Truck className="w-8 h-8 text-gold-500" />,
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" // Fleet/cars
        },
        {
            id: 3,
            title: "ICT & Cyber-Sovereignty",
            tagline: "Securing the State.",
            description: "Cisco Firepower 3130 Enterprise Firewalls and NITA-U Certification. Protecting digital borders.",
            partner: "Cisco / NITA-U",
            icon: <Shield className="w-8 h-8 text-gold-500" />,
            image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop" // Server room
        },
        {
            id: 4,
            title: "Civil Engineering & Safety",
            tagline: "Critical Infrastructure.",
            description: "Entebbe Airport VVIP Terminal Fire Detection System. Building the foundation of safety.",
            partner: "Fire Masters",
            icon: <HardHat className="w-8 h-8 text-gold-500" />,
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" // Civil/Construction
        }
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Key Sectors</span>
                        <h2 className="font-heading font-black text-4xl text-navy-900">Sovereign Capabilities</h2>
                    </div>
                    <Button variant="outline" className="mt-6 md:mt-0 !text-navy-900 !border-navy-900 hover:!bg-navy-900 hover:!text-white">
                        View All Services
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {clusters.map((cluster) => (
                        <div key={cluster.id} className="group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">

                            {/* Image Half */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/0 transition-colors z-10"></div>
                                <img
                                    src={cluster.image}
                                    alt={cluster.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur p-3 shadow-lg">
                                    {cluster.icon}
                                </div>
                            </div>

                            {/* Content Half */}
                            <div className="p-8 relative">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 -translate-y-1/2 translate-x-1/2 rounded-full hidden md:block"></div>

                                <h3 className="font-heading font-bold text-2xl text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">{cluster.title}</h3>
                                <p className="font-bold text-sm text-gold-500 mb-4 uppercase tracking-wider">{cluster.tagline}</p>
                                <p className="text-slate-600 mb-6 leading-relaxed border-b border-slate-100 pb-6">
                                    {cluster.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Partner: {cluster.partner}</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-navy-900 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceClusters;
