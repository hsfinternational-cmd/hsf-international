import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import Button from '../components/Button';
import { FileText, ArrowRight, Heart, Globe, Users, Shield, Zap, Truck, Award } from 'lucide-react';

const MediaPage = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'csr' | 'news'>('all');

    const csrStories = [
        {
            id: 1,
            category: "Charity Partner",
            title: "Empowering Communities: HSF Partners with Fairfield Charity",
            headline: "Social Alleviation",
            date: "Ongoing Partnership",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
            desc: "HSF aligns corporate success with social responsibility, leveraging logistics to support Fairfield Charity's on-the-ground initiatives for vulnerable populations.",
            link: "https://fairfieldcharity.fairfield19622.workers.dev/",
            icon: Heart
        },
        {
            id: 2,
            category: "Campaign Spotlight",
            title: "Beauty with a Purpose: The Katanga Community Drive",
            headline: "Miss Uganda Partnership",
            date: "Recent Event",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2613&auto=format&fit=crop", // Crowd/Community
            desc: "A massive mobilization effort involving 1,800 participants. HSF provided logistical support, stage production, and meals to bridge corporate advocacy with community awareness.",
            link: "#",
            icon: Users
        },
        {
            id: 3,
            category: "Humanitarian Logistics",
            title: "Mobilizing Hope: Refugee Response in Kyaka & Kyangwali",
            headline: "World Vision International",
            date: "UGX 1.33 Billion Project",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop", // Aid/Trucks
            desc: "Selected by World Vision to supply 6 Hard-Terrain Vehicles (Land Cruisers & Hilux) for humanitarian response, proving HSF's capacity for 'logistics with a heart'.",
            link: "#",
            icon: Truck
        },
        {
            id: 4,
            category: "Youth Employment",
            title: "Green Gold: Fighting Unemployment with Dragon Fruit",
            headline: "Northlight Green Services",
            date: "Climate-Smart Initiative",
            image: "https://images.unsplash.com/photo-1591199580521-4d375bb62744?q=80&w=2670&auto=format&fit=crop", // Farming/Agriculture
            desc: "Tackling climate change and unemployment by introducing high-value Dragon Fruit farming, creating sustainable income streams for youth in Northern Uganda.",
            link: "#",
            icon: LeafIcon
        }
    ];

    const newsStories = [
        {
            id: 5,
            category: "National Security",
            title: "Modernizing the Force: Specialized Fleet for Uganda Police",
            headline: "UGX 5.62 Billion Contract",
            date: "Completed",
            image: "https://images.unsplash.com/photo-1535970793551-787c880ec18c?q=80&w=2070&auto=format&fit=crop",
            desc: "Successful delivery of 9 Specialized Double Cabins and 12 Canine Units, customizing engineering for specific police operations.",
            link: "#",
            icon: Shield
        },
        {
            id: 6,
            category: "Energy Infrastructure",
            title: "Powering the Albertine: Grid Expansion with Dongrui Electric",
            headline: "MEMD & EASP Project",
            date: "Ongoing",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
            desc: "A Joint Venture with Dongrui Electric Group to supply distribution transformers, enabling industrialization in the oil-rich Albertine Graben.",
            link: "#",
            icon: Zap
        },
        {
            id: 7,
            category: "Aviation Safety",
            title: "Securing the Gateway: Fire Systems at Entebbe VVIP Terminal",
            headline: "UCAA Infrastructure",
            date: "Completed",
            image: "https://images.unsplash.com/photo-1599839441113-d48f76d49479?q=80&w=2070&auto=format&fit=crop",
            desc: "Upgrading safety at the nation's most sensitive entry point with UK-standard LIFECO addressable fire detection systems.",
            link: "#",
            icon: PlaneIcon
        },
        {
            id: 8,
            category: "Green Mobility",
            title: "The Green City Pilot: KCCA Electric Fleet",
            headline: "Urban Mobility",
            date: "Pilot Program",
            image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
            desc: "Supplying 15 Service Vans and Electric Motorcycles to Kampala Capital City Authority, driving the transition to smart, green urban logistics.",
            link: "#",
            icon: Globe
        },
        {
            id: 9,
            category: "Strategic Leadership",
            title: "State House Engagement: Chairman Meets H.E. President Museveni",
            headline: "High-Level Diplomacy",
            date: "Strategic Meeting",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop", // Business Meeting
            desc: "Aligning private sector infrastructure capacity with National Vision 2040 in discussions with the President and Chief of Defence Forces.",
            link: "#",
            icon: Award
        },
        {
            id: 10,
            category: "Cyber Sovereignty",
            title: "Digital Borders: Enterprise Security for Immigration",
            headline: "DCIC Project",
            date: "Tech Implementation",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
            desc: "Deploying Cisco Firepower 3130 Enterprise Firewalls to protect national data integrity, moving HSF into high-level systems integration.",
            link: "#",
            icon: Shield
        }
    ];

    const allStories = [...csrStories, ...newsStories];
    const displayedStories = activeTab === 'all' ? allStories : activeTab === 'csr' ? csrStories : newsStories;

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <MotionWrapper>
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">News & Impact</span>
                        <h1 className="font-heading font-black text-4xl md:text-6xl text-navy-900 mb-6">
                            Media & <span className="text-coral-500">Insights</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Tracking HSF International's operational milestones and our commitment to humanity through strategic CSR partnerships.
                        </p>
                    </MotionWrapper>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-16">
                    {['all', 'news', 'csr'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === tab
                                    ? 'bg-navy-900 text-white shadow-lg transform scale-105'
                                    : 'bg-white text-slate-500 hover:bg-slate-100'
                                }`}
                        >
                            {tab === 'all' ? 'All Stories' : tab === 'csr' ? 'CSR & Charity' : 'Operational News'}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedStories.map((story, idx) => (
                        <MotionWrapper key={story.id} delay={idx * 0.1} variant="fade-up" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-navy-900 uppercase tracking-wide flex items-center gap-2">
                                    <story.icon className="w-3 h-3 text-coral-500" />
                                    {story.category}
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <span className="text-coral-500 font-bold text-xs uppercase tracking-widest mb-3 block">{story.headline}</span>
                                <h3 className="font-heading font-bold text-xl text-navy-900 mb-4 leading-tight group-hover:text-coral-500 transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {story.desc}
                                </p>

                                <div className="pt-6 border-t border-slate-100 mt-auto flex justify-between items-center">
                                    <span className="text-slate-400 text-xs font-bold">{story.date}</span>
                                    {story.link !== '#' ? (
                                        <a href={story.link} target="_blank" rel="noopener noreferrer" className="text-navy-900 font-bold text-xs uppercase hover:text-coral-500 flex items-center gap-1">
                                            Visit Partner <ArrowRight className="w-3 h-3" />
                                        </a>
                                    ) : (
                                        <span className="text-slate-300 text-xs font-bold uppercase cursor-default">Read More</span>
                                    )}
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

            </div>
        </div>
    );
};

// Icons needed for specific stories
const LeafIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
);

const PlaneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12h20" /><path d="m22 12-5-5" /><path d="m22 12-5 5" /></svg> // Placeholder for plane
);


export default MediaPage;
