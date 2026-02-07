import React from 'react';
import MotionWrapper from '../MotionWrapper';

// Partner Data
const partners = [
    { name: "MTN", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg", url: "https://www.mtn.com" },
    { name: "Prudential", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Prudential_plc.svg", url: "https://www.prudential.com" },
    { name: "NCBA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/NCBA_Group_Logo.png", url: "https://ncbagroup.com" }, // Fallback text if png fails
    { name: "ICEA LION", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/ICEA_LION_Group_Logo.jpg/640px-ICEA_LION_Group_Logo.jpg", url: "https://icealion.com" }, // Placeholder generic if needed
    { name: "Alliance Française", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Alliance_fran%C3%A7aise_logo_complet.svg/1200px-Alliance_fran%C3%A7aise_logo_complet.svg.png", url: "https://www.alliancefr.org" }
];

const GlobalPartners = () => {
    return (
        <section className="bg-navy-900 py-24 relative overflow-hidden">

            {/* 1. World Map Animation Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {/* Simple SVG Map Representation */}
                <svg className="w-full h-full object-cover text-slate-600" fill="currentColor" viewBox="0 0 1000 500">
                    {/* Abstract Continents - Simplified Paths for visual effect */}
                    <path d="M220,150 Q200,100 250,80 T300,120 T280,180 Z" className="animate-pulse" /> {/* N. America */}
                    <path d="M260,250 Q240,300 300,350 T350,300 T320,240 Z" /> {/* S. America */}
                    <path d="M450,120 Q500,80 550,100 T530,180 T480,200 Z" /> {/* Europe */}
                    <path d="M480,220 Q460,300 520,350 T580,280 T550,230 Z" className="text-coral-500 animate-[pulse_3s_infinite]" /> {/* Africa - Highlighted */}
                    <path d="M650,100 Q700,80 850,100 T900,180 T750,250 Z" /> {/* Asia */}
                    <path d="M750,300 Q780,350 850,320 T800,280 Z" /> {/* Australia */}
                </svg>

                {/* Pulse Points - Showing "Heavy Presence" */}
                {/* Uganda/East Africa Hub */}
                <div className="absolute top-[55%] left-[53%] w-4 h-4 bg-coral-500 rounded-full animate-ping"></div>
                <div className="absolute top-[55%] left-[53%] w-4 h-4 bg-coral-500 rounded-full"></div>

                {/* Global Correspondents */}
                <div className="absolute top-[30%] left-[48%] w-2 h-2 bg-white rounded-full animate-ping delay-75"></div> {/* Europe */}
                <div className="absolute top-[40%] left-[75%] w-2 h-2 bg-white rounded-full animate-ping delay-150"></div> {/* Asia */}
                <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-white rounded-full animate-ping delay-300"></div> {/* USA */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <MotionWrapper variant="fade-up">
                        <span className="text-coral-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Clients</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">Trusted by Brands and Organizations</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                            A diverse client base is a strong indicator of a company's versatility. Our clients come from a variety of industries including Finance, Telecommunications, and Diplomacy.
                        </p>
                    </MotionWrapper>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                    {partners.map((p, i) => (
                        <MotionWrapper
                            key={i}
                            delay={i * 0.1}
                            variant="scale-up"
                            className="bg-white p-6 rounded-sm shadow-xl hover:shadow-coral-500/20 transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer h-32 flex items-center justify-center border border-transparent hover:border-coral-500"
                        >
                            <a href={p.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                {/* If image fails, show text, but try image first */}
                                <img
                                    src={p.logo}
                                    alt={p.name}
                                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100"
                                    onError={(e) => {
                                        // Fallback to text if image fails
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-navy-900 text-lg">${p.name}</span>`;
                                    }}
                                />
                            </a>
                        </MotionWrapper>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GlobalPartners;
