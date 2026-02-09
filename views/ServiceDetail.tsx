import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Truck, Zap, Shield, Wrench, HardHat, Leaf, Globe, Settings, ArrowLeft, Download, FileText, CheckCircle, Clock } from 'lucide-react';
import MotionWrapper from '../components/MotionWrapper';
import Button from '../components/Button';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// --- Data Structures ---

const servicesData: Record<string, any> = {
    'energy-oil-gas': {
        title: "Energy & Oil/Gas",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
        desc: "Comprehensive solutions for the energy sector, from transformer supply to last-mile connectivity in the Albertine Graben.",
        details: [
            "Supply of Dongrui Electric Transformers & Grid Equipment.",
            "Last-mile connectivity projects in the Albertine Graben.",
            "Solar and renewable energy infrastructure.",
            "Oil & Gas pipeline support logistics."
        ],
        caseStudies: [
            {
                title: "Electricity Access Scale-Up Project (EASP)",
                headline: "Powering the Albertine",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
                status: "ongoing",
                value: "Confidential", // To be animated if number
                desc: "Distribution Transformers supply and installation in the Albertine Graben (JV with Dongrui).",
                impact: "Grid expansion to support industrialization."
            }
        ]
    },
    'logistics-fleet': {
        title: "Logistics & Fleet",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        desc: "Supply and maintenance of specialized motor vehicles and heavy haulage logistics.",
        details: [
            "Fleet management for large-scale operations.",
            "Supply of specialized vehicles (APCs, Land Cruisers).",
            "Heavy haulage for industrial machinery.",
            "Maintenance workshops and parts supply."
        ],
        caseStudies: [
            {
                title: "Uganda Police Force Fleet Modernization",
                headline: "Mobilizing the State",
                image: "https://images.unsplash.com/photo-1535970793551-787c880ec18c?q=80&w=2070&auto=format&fit=crop",
                status: "completed",
                value: "UGX 5.62 Billion",
                desc: "Supply and commissioning of 21 Specialized Units including APCs and Patrol Cruisers.",
                impact: "Enhanced operational mobility for national security."
            }
        ]
    },
    'ict-security': {
        title: "ICT & Security",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        desc: "Enterprise firewalls, cyber-sovereignty consulting, and secure digital infrastructure.",
        details: [
            "Cisco Enterprise Firewall implementation.",
            "Cyber-sovereignty and national data protection.",
            "Secure communications infrastructure.",
            "Digital transformation consulting."
        ],
        caseStudies: [
            {
                title: "Entebbe International Airport VVIP Terminal",
                headline: "Securing the Gateway",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Placeholder
                status: "completed",
                value: "Confidential",
                desc: "Supply and Installation of Fire Detection & Alarm Systems (LIFECO).",
                impact: "Safety assurance for heads of state and dignitaries."
            }
        ]
    },
    // ... (Other sectors would follow similar pattern, keeping default structure for now)
    'civil-engineering': {
        title: "Civil Engineering",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop",
        desc: "Infrastructure development and VVIP terminal safety systems.",
        details: ["Road construction support.", "VVIP Terminal safety systems.", "Urban planning."],
        caseStudies: [
            {
                title: "Entebbe VVIP Terminal Fire Safety",
                headline: "Safety First",
                image: "https://images.unsplash.com/photo-1599839441113-d48f76d49479?q=80&w=2070&auto=format&fit=crop",
                status: "completed",
                value: "Confidential",
                desc: "Installation of advanced fire detection and suppression systems for the new VVIP wing.",
                impact: "Ensuring safety for dignitaries."
            }
        ]
    },
    'agriculture': {
        title: "Agriculture",
        icon: Leaf,
        image: "https://images.unsplash.com/photo-1625246333195-bf436c4b2663?q=80&w=2670&auto=format&fit=crop",
        desc: "Agribusiness supply chain optimization.",
        details: ["Farm mechanization.", "Supply chain optimization."],
        caseStudies: [
            {
                title: "Soroti Fruit Factory Logistics",
                headline: "Feeding the Nation",
                image: "https://images.unsplash.com/photo-1625246333195-bf436c4b2663?q=80&w=2670&auto=format&fit=crop",
                status: "ongoing",
                value: "UGX 3.2 Billion",
                desc: "Supply chain optimization and logistics for fruit processing.",
                impact: "Reducing post-harvest losses."
            }
        ]
    },
    'tourism-travel': {
        title: "Tourism & Travel",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2571&auto=format&fit=crop",
        desc: "Hospitality logistics and infrastructure support.",
        details: ["Eco-tourism infrastructure.", "Hospitality logistics."],
        caseStudies: [
            {
                title: "Murchison Falls Eco-Lodge Support",
                headline: "Sustainable Tourism",
                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2571&auto=format&fit=crop",
                status: "completed",
                value: "Confidential",
                desc: "Logistics support for the construction of eco-friendly lodges.",
                impact: "Boosting tourism revenue."
            }
        ]
    },
    'waste-management': {
        title: "Waste Management",
        icon: Settings,
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop",
        desc: "Sustainable disposal solutions.",
        details: ["Urban waste disposal.", "Recycling infrastructure."],
        caseStudies: [
            {
                title: "KCCA Waste Recycling Initiative",
                headline: "Clean Cities",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2670&auto=format&fit=crop",
                status: "awarded",
                value: "UGX 1.5 Billion",
                desc: "Partnership for recycling infrastructure development.",
                impact: "Reducing landfill waste."
            }
        ]
    },
    'technical-maintenance': {
        title: "Technical Maintenance",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2670&auto=format&fit=crop",
        desc: "24/7 support and maintenance.",
        details: ["Preventive maintenance.", "Emergency repairs."],
        caseStudies: [
            {
                title: "Fleet Maintenance Contract",
                headline: "Reliability First",
                image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2670&auto=format&fit=crop",
                status: "ongoing",
                value: "Annual Contract",
                desc: "Comprehensive maintenance for government vehicle fleet.",
                impact: "Ensuring 95% fleet availability."
            }
        ]
    }
};

const resources = [
    { title: "The Tokenized State: Unlocking Dead Capital", type: "Essay", size: "2.4 MB" },
    { title: "The Contractor-Aggregator Model", type: "Strategic Note", size: "1.8 MB" },
    { title: "First Oil Readiness: Navigating Standards", type: "Guide", size: "3.1 MB" },
    { title: "The Youth Dividend: VYE Scenario", type: "Manifesto", size: "1.5 MB" },
    { title: "Cyber-Sovereignty: Protecting the Digital Pearl", type: "Technical Brief", size: "4.2 MB" },
    { title: "The 'Bankable Bid' Checklist", type: "Tool", size: "0.5 MB" },
    { title: "Joint Venture Framework Guide", type: "Tool", size: "1.2 MB" },
    { title: "SME Financial Health Template", type: "Template", size: "0.8 MB" }
];

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? servicesData[slug] : null;
    const [activeTab, setActiveTab] = useState<'overview' | 'resources'>('overview');

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;

    // Scroll-to-unlock number counter logic would go here (simplified for this step)

    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            {/* Hero Section */}
            <section className="bg-navy-900 text-white relative overflow-hidden py-32">
                <div className="absolute inset-0 opacity-20">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <MotionWrapper>
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-coral-500 rounded-full mb-8 shadow-2xl">
                            <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">{service.title}</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">{service.desc}</p>
                    </MotionWrapper>

                    {/* Tabs */}
                    <div className="flex justify-center gap-6 mt-12">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`pb-2 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'overview' ? 'text-coral-500 border-coral-500' : 'text-slate-500 border-transparent hover:text-white'}`}
                        >
                            Overview & Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('resources')}
                            className={`pb-2 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'resources' ? 'text-coral-500 border-coral-500' : 'text-slate-500 border-transparent hover:text-white'}`}
                        >
                            Knowledge & Resources
                        </button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                {activeTab === 'overview' && (
                    <div className="space-y-24">
                        {/* Sector Contributions */}
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="w-full lg:w-2/3">
                                <MotionWrapper delay={0.2} variant="slide-right">
                                    <h2 className="font-heading font-bold text-3xl text-navy-900 mb-8 pb-4 border-b border-slate-200">
                                        Sector Contributions
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        HSF International plays a pivotal role in the <span className="font-bold text-navy-900">{service.title}</span> sector.
                                        We leverage our global network of partners to bring world-class technology, expertise, and capital.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {service.details.map((detail: string, idx: number) => (
                                            <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-coral-500 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-900 group-hover:bg-coral-500 group-hover:text-white transition-colors flex-shrink-0">
                                                    <span className="font-bold text-sm">{idx + 1}</span>
                                                </div>
                                                <p className="text-slate-700 font-medium">{detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                </MotionWrapper>
                            </div>

                            {/* Sidebar CTA */}
                            <div className="w-full lg:w-1/3">
                                <MotionWrapper delay={0.4} variant="fade-up">
                                    <div className="bg-navy-900 p-8 rounded-xl shadow-lg text-white sticky top-24">
                                        <h3 className="font-bold text-xl mb-4">Partner with Us</h3>
                                        <p className="text-slate-400 mb-6 text-sm">
                                            Ready to execute sovereign-grade projects in the {service.title} sector?
                                        </p>
                                        <Button variant="primary" className="w-full" onClick={() => window.location.href = '/contact'}>
                                            Contact Engineering Team
                                        </Button>
                                    </div>
                                </MotionWrapper>
                            </div>
                        </div>

                        {/* WORK DONE / CASE STUDIES SECTION */}
                        {service.caseStudies && service.caseStudies.length > 0 && (
                            <section>
                                <MotionWrapper variant="fade-up">
                                    <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">Proven Execution</span>
                                    <h2 className="font-heading font-black text-4xl text-navy-900 mb-12">Work Done in {service.title}</h2>
                                </MotionWrapper>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {service.caseStudies.map((study: any, idx: number) => (
                                        <MotionWrapper key={idx} delay={idx * 0.2} variant="fade-up" className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500">
                                            {/* Image with Blueprint Hover Effect */}
                                            <div className="relative h-64 overflow-hidden">
                                                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                                {/* Blueprint Overlay (CSS Filter Simulation) */}
                                                <div className="absolute inset-0 bg-navy-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                                                    <div className="text-center p-6 border-2 border-white/20 m-4 rounded-lg">
                                                        <Settings className="w-12 h-12 text-white/50 mx-auto mb-4 animate-spin-slow" />
                                                        <span className="text-white font-mono text-sm tracking-widest uppercase block">Technical Blueprint</span>
                                                        <span className="text-coral-500 font-bold text-xs mt-2 block">Restricted Access</span>
                                                    </div>
                                                </div>

                                                {/* Status Badge */}
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                                                    {study.status === 'completed' ? <CheckCircle className="w-3 h-3 text-green-500" /> : <Clock className="w-3 h-3 text-blue-500" />}
                                                    {study.status}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-8">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{study.headline}</div>
                                                <h3 className="font-heading font-bold text-2xl text-navy-900 mb-4">{study.title}</h3>
                                                <p className="text-slate-600 mb-6">{study.desc}</p>

                                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                                    <div>
                                                        <span className="text-xs text-slate-400 uppercase font-bold block">Contract Value</span>
                                                        <span className="text-xl font-heading font-black text-navy-900">{study.value}</span>
                                                    </div>
                                                    <button className="text-coral-500 font-bold text-sm uppercase tracking-wide hover:underline">
                                                        View Case Study →
                                                    </button>
                                                </div>
                                            </div>
                                        </MotionWrapper>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                )}

                {/* RESOURCES TAB */}
                {activeTab === 'resources' && (
                    <MotionWrapper variant="fade-up" className="space-y-16">
                        {/* Chairman's Insight */}
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-navy-900 mb-8">Chairman's Insight Series</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {resources.slice(0, 5).map((res, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-coral-500 transition-colors group shadow-sm hover:shadow-lg">
                                        <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-bold text-coral-500 uppercase tracking-wider mb-2 block">{res.type}</span>
                                        <h3 className="font-heading font-bold text-lg text-navy-900 mb-4 h-14 line-clamp-2">{res.title}</h3>
                                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                                            <span className="text-slate-400 text-xs font-bold">{res.size}</span>
                                            <button className="flex items-center gap-2 text-navy-900 font-bold text-xs uppercase hover:text-coral-500 transition-colors">
                                                <Download className="w-4 h-4" /> Download
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools for Partners */}
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-navy-900 mb-8">Tools for the Sovereign Builder</h2>
                            <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-coral-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                    {resources.slice(5).map((res, idx) => (
                                        <div key={idx} className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                                            <h3 className="font-bold text-lg mb-2">{res.title}</h3>
                                            <span className="text-coral-500 text-xs font-bold uppercase tracking-wider mb-4 block">{res.type}</span>
                                            <button className="w-full bg-white text-navy-900 font-bold py-3 rounded text-sm hover:bg-coral-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                                                <Download className="w-4 h-4" /> Download Tool
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </MotionWrapper>
                )}

            </div>

            <div className="fixed bottom-8 left-8 z-50">
                <Button variant="outline" className="bg-white text-navy-900 border-slate-200 hover:bg-slate-100 shadow-lg" onClick={() => window.history.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
            </div>
        </div>
    );
};

export default ServiceDetail;
