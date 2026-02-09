import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import { ArrowRight, Heart, Users, Trash2, Leaf, Shield, Zap, Plane, Globe, Award } from 'lucide-react';
import mediaData from '../src/data/media.json'; // Importing JSON data

const MediaPage = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'csr' | 'news'>('all');

    // Helper to map icon names or types to actual Lucide components
    // Since JSON can't store functions, we map based on category or type if needed.
    const getIcon = (category: string) => {
        if (category.includes("Charity")) return Heart;
        if (category.includes("Campaign")) return Users;
        if (category.includes("Humanitarian")) return Globe; // Changed from Truck to Globe for variety
        if (category.includes("Youth") || category.includes("Green")) return Leaf;
        if (category.includes("Security") || category.includes("Cyber")) return Shield;
        if (category.includes("Energy")) return Zap;
        if (category.includes("Aviation")) return Plane;
        if (category.includes("Leadership")) return Award;
        return Globe; // Default
    };

    const stories = mediaData.stories.map(story => ({
        ...story,
        icon: getIcon(story.category)
    }));

    const displayedStories = activeTab === 'all'
        ? stories
        : stories.filter(story => story.type === activeTab);

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

export default MediaPage;
