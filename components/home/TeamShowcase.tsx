import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, User } from 'lucide-react';
import MotionWrapper from '../MotionWrapper';

// Employee Data (7 Stats)
const team = [
    // Tier 2: Executives
    { id: 2, name: "Sarah N.", role: "Chief Operations Officer", linkedin: "#", image: null, stats: { integrity: 97, success: 97, professionalism: 98, energy: 94, comms: 96, strategy: 98, innovation: 95 } },
    { id: 3, name: "David O.", role: "Head of Strategy", linkedin: "#", image: null, stats: { integrity: 96, success: 96, professionalism: 97, energy: 92, comms: 95, strategy: 99, innovation: 96 } },
    // Tier 3: Management & Leads
    { id: 4, name: "Michael K.", role: "Senior Consultant", linkedin: "#", image: null, stats: { integrity: 95, success: 94, professionalism: 96, energy: 90, comms: 94, strategy: 95, innovation: 93 } },
    { id: 5, name: "Grace A.", role: "Logistics Director", linkedin: "#", image: null, stats: { integrity: 98, success: 95, professionalism: 95, energy: 96, comms: 93, strategy: 94, innovation: 92 } },
    { id: 6, name: "John P.", role: "Financial Advisor", linkedin: "#", image: null, stats: { integrity: 99, success: 98, professionalism: 99, energy: 88, comms: 97, strategy: 96, innovation: 91 } },
    { id: 7, name: "Esther M.", role: "Legal Counsel", linkedin: "#", image: null, stats: { integrity: 99, success: 96, professionalism: 99, energy: 91, comms: 99, strategy: 95, innovation: 90 } },
    { id: 8, name: "Robert S.", role: "Project Manager", linkedin: "#", image: null, stats: { integrity: 95, success: 95, professionalism: 94, energy: 97, comms: 92, strategy: 93, innovation: 94 } },
    { id: 9, name: "Linda B.", role: "ICT Specialist", linkedin: "#", image: null, stats: { integrity: 94, success: 93, professionalism: 96, energy: 95, comms: 94, strategy: 92, innovation: 98 } },
    { id: 10, name: "James T.", role: "Civil Engineering", linkedin: "#", image: null, stats: { integrity: 96, success: 94, professionalism: 95, energy: 93, comms: 91, strategy: 94, innovation: 93 } },
    { id: 11, name: "Diana W.", role: "Client Relations", linkedin: "#", image: null, stats: { integrity: 93, success: 92, professionalism: 97, energy: 99, comms: 98, strategy: 91, innovation: 92 } },
    { id: 12, name: "Paul K.", role: "Quality Assurance", linkedin: "#", image: null, stats: { integrity: 98, success: 97, professionalism: 98, energy: 92, comms: 90, strategy: 95, innovation: 94 } },
];

const labels = [
    { key: 'integrity', label: 'INTEGRITY' },
    { key: 'success', label: 'SUCCESS RATE' },
    { key: 'professionalism', label: 'PROFESSIONALISM' },
    { key: 'energy', label: 'ENERGY' },
    { key: 'comms', label: 'COMMUNICATION' },
    { key: 'strategy', label: 'STRATEGY' },
    { key: 'innovation', label: 'INNOVATION' }
];

// 7-Sided Polygon Logic
const getPolyCoords = (stats: any, radius: number, center: number) => {
    const totalPoints = 7;
    return labels.map((item, i) => {
        const value = stats[item.key] || 0;
        const angle = (Math.PI * 2 * i) / totalPoints - Math.PI / 2;
        const r = (value / 100) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');
};

const getLabelPos = (i: number, radius: number, center: number) => {
    const angle = (Math.PI * 2 * i) / 7 - Math.PI / 2;
    const r = radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
};

const RadarChart = ({ stats }: { stats: any }) => {
    const size = 280; // Larger size for full text
    const center = size / 2;
    const radius = 70; // Inner chart radius

    return (
        <div className="relative w-full flex justify-center items-center py-2">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto max-w-[280px]">
                {/* Background Heptagon Grid */}
                {[20, 45, 70].map((r, i) => (
                    <polygon
                        key={i}
                        points={getPolyCoords({ integrity: 100, success: 100, professionalism: 100, energy: 100, comms: 100, strategy: 100, innovation: 100 }, r, center)}
                        fill="none"
                        stroke="#1e293b" // slate-800
                        strokeWidth="1"
                        className="opacity-50"
                    />
                ))}

                {/* Data Polygon */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.8, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    points={getPolyCoords(stats, radius, center)}
                    fill="rgba(34, 197, 94, 0.15)" // green-500/15
                    stroke="#22c55e" // green-500
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="group-hover:stroke-green-400 group-hover:fill-green-500/30 transition-all duration-300"
                />

                {/* Vertices Dots */}
                {labels.map((item, i) => {
                    const { x, y } = getLabelPos(i, radius, center);
                    return <circle key={i} cx={x} cy={y} r="3" fill="#22c55e" className="group-hover:r-[4px] transition-all" />;
                })}
            </svg>

            {/* Labels Overlay */}
            {labels.map((item, i) => {
                // Determine label position with more padding
                const { x, y } = getLabelPos(i, radius + 25, center);

                // Alignment logic based on angle
                let alignClass = "translate-x-[-50%] text-center"; // Top/Bottom
                if (i === 1 || i === 2) alignClass = "translate-x-[-10%] text-left"; // Right side
                if (i === 5 || i === 6) alignClass = "translate-x-[-90%] text-right"; // Left side
                if (i === 3) alignClass = "translate-x-[-20%] text-left pt-2"; // Bottom Right
                if (i === 4) alignClass = "translate-x-[-80%] text-right pt-2"; // Bottom Left

                return (
                    <div
                        key={i}
                        className={`absolute text-[8px] tracking-widest font-bold text-slate-500 group-hover:text-green-400 transition-colors ${alignClass}`}
                        style={{ left: x, top: y - 5, width: '80px' }}
                    >
                        <div className="flex flex-col gap-0.5">
                            <span>{item.label}</span>
                            <span className="text-white font-mono text-[9px]">{stats[item.key]}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const EmployeeCard = ({ member, isExecutive = false }: { member: typeof team[0], isExecutive?: boolean }) => (
    <div className={`bg-[#0f1423] border border-white/5 p-4 rounded-sm hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col items-center h-full relative overflow-visible group ${isExecutive ? 'border-coral-500/30 bg-coral-500/5' : ''}`}>

        {/* Photo/Avatar Slot */}
        <div className="relative mb-4">
            <div className={`w-24 h-24 rounded-full bg-navy-950 border-2 overflow-hidden flex items-center justify-center relative z-10 transition-colors duration-300 ${isExecutive ? 'border-coral-500' : 'border-white/10 group-hover:border-green-500'}`}>
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                    <User className={`w-10 h-10 ${isExecutive ? 'text-coral-500' : 'text-slate-600 group-hover:text-green-500 transition-colors'}`} />
                )}
            </div>
            {/* Glow Effect behind head */}
            <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isExecutive ? 'bg-coral-500/20' : 'bg-green-500/20'}`}></div>
        </div>

        {/* Identity */}
        <div className="mb-2 text-center relative z-10 w-full">
            <h3 className="text-white font-heading font-bold text-lg leading-tight mb-1">{member.name}</h3>
            <div className={`text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-3 rounded-full inline-block ${isExecutive ? 'bg-coral-500/10 text-coral-500' : 'bg-navy-800 text-slate-400 group-hover:text-green-400 group-hover:bg-green-500/10 transition-all'}`}>
                {member.role}
            </div>
        </div>

        {/* The Stats Chart */}
        <div className="w-full -my-4 transform scale-95 group-hover:scale-105 transition-transform duration-500 ease-out">
            <RadarChart stats={member.stats} />
        </div>

        {/* LinkedIn Footer */}
        <div className="mt-auto pt-4 w-full flex justify-center border-t border-white/5 group-hover:border-white/10 transition-colors">
            <a
                href={member.linkedin}
                className="text-slate-600 hover:text-white transition-colors p-2"
                aria-label="LinkedIn Profile"
            >
                <Linkedin className="w-5 h-5" />
            </a>
        </div>

        {/* Executive Indicator */}
        {isExecutive && (
            <div className="absolute top-4 right-4 animate-pulse">
                <div className="w-1.5 h-1.5 bg-coral-500 rounded-full shadow-[0_0_10px_#ff6b6b]"></div>
            </div>
        )}
    </div>
);

const TeamShowcase = () => {
    // Chairman is now in BoardOfDirectors, so execs are the first 2 in this list
    const execs = team.slice(0, 2);
    const management = team.slice(2);

    return (
        <section className="bg-navy-900 py-24 border-t border-white/5 relative overflow-hidden">

            {/* Background Text Layer */}
            <div className="absolute top-40 left-0 w-full text-center pointer-events-none opacity-[0.02]">
                <span className="text-[15vw] font-black text-white uppercase leading-none">THE TEAM</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-4 block">Proven Capabilities</span>
                    <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
                        Elite Performance. <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Verified Stats.</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Every member of HSF International is vetted against 7 core pillars. <br />
                        <span className="text-slate-500 text-sm">(Integrity, Success Rate, Professionalism, Energy, Communication, Strategy, Innovation)</span>
                    </p>
                </div>

                {/* Hierarchy Layout */}
                <div className="space-y-16">

                    {/* Level 1: Executives (formerly Level 2) */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 relative z-20">
                        {execs.map((member, i) => (
                            <MotionWrapper key={member.id} variant="fade-up" delay={0.1 + (i * 0.1)} className="w-full max-w-[340px]">
                                <EmployeeCard member={member} isExecutive={true} />
                            </MotionWrapper>
                        ))}
                    </div>

                    {/* Level 3: The Rest */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
                        {management.map((member, i) => (
                            <MotionWrapper key={member.id} variant="fade-up" delay={0.2 + (i * 0.05)}>
                                <EmployeeCard member={member} />
                            </MotionWrapper>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TeamShowcase;
