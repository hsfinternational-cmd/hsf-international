import React, { useState } from 'react';
import { CheckCircle, Clock, Award } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing' | 'awarded'>('all');

    const projects = [
        {
            id: 1,
            title: "Uganda Police Force Fleet Modernization",
            status: "completed",
            value: "UGX 5.62 Billion",
            category: "Automotive",
            description: "Supply and commissioning of 21 Specialized Units including APCs and Patrol Cruisers.",
            image: "https://images.unsplash.com/photo-1535970793551-787c880ec18c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Ministry of Energy Grid Expansion",
            status: "ongoing",
            value: "Confidential",
            category: "Energy",
            description: "Distribution Transformers supply and installation in the Albertine Graben (JV with Dongrui).",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "KCCA Green Mobility Pilot",
            status: "awarded",
            value: "UGX 2.0 Billion",
            category: "Green Tech",
            description: "Pilot program for Electric Motorcycles and Commuter Vans for Kampala Central Division.",
            image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Entebbe VVIP Terminal Fire Safety",
            status: "completed",
            value: "Confidential",
            category: "Civil Safety",
            description: "Installation of advanced fire detection and suppression systems for the new VVIP wing.",
            image: "https://images.unsplash.com/photo-1599839441113-d48f76d49479?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status === filter);

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Case Studies</span>
                    <h1 className="font-heading font-black text-4xl md:text-5xl text-navy-900">Real World Proof.</h1>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 pb-4">
                    {['all', 'completed', 'ongoing', 'awarded'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`text-sm font-bold uppercase tracking-wider px-6 py-2 rounded-full transition-all ${filter === f
                                    ? 'bg-navy-900 text-white shadow-lg'
                                    : 'bg-white text-slate-500 hover:text-navy-900 hover:bg-slate-100'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-white group hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute top-4 right-4 z-10">
                                    {project.status === 'completed' && <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase"><CheckCircle className="w-3 h-3" /> Completed</span>}
                                    {project.status === 'ongoing' && <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase"><Clock className="w-3 h-3" /> Ongoing</span>}
                                    {project.status === 'awarded' && <span className="bg-gold-100 text-gold-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase"><Award className="w-3 h-3" /> Awarded</span>}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">{project.category}</div>
                                <h3 className="font-heading font-bold text-xl text-navy-900 mb-4 leading-tight group-hover:text-gold-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="pt-6 border-t border-slate-100 mt-auto">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-xs text-slate-400 uppercase font-bold block mb-1">Contract Value</span>
                                            <span className="text-navy-900 font-bold font-heading">{project.value}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
