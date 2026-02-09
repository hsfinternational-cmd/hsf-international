import React, { useRef } from 'react';
import MotionWrapper from '../components/MotionWrapper';
import { Target, Shield, Users, Check, Download, FileText } from 'lucide-react';
import Button from '../components/Button';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import BoardOfDirectors from '../components/home/BoardOfDirectors';

// Individual Timeline Event Component for Scroll Awareness
const TimelineEvent = ({ event, index, isLast }: { event: any, index: number, isLast: boolean }) => {
    const ref = useRef(null);
    // Active when it crosses a threshold in the viewport.
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

    return (
        <MotionWrapper
            variant={index % 2 === 0 ? "slide-right" : "slide-left"}
            className={`relative pl-12 md:pl-0 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}
        >
            {/* Timeline Dot - Changes Color on Scroll */}
            <motion.div
                ref={ref}
                animate={isLast && isInView ? {
                    backgroundColor: ["#22c55e", "#ef4444", "#22c55e"], // Green -> Red -> Green
                    borderColor: ["#22c55e", "#ef4444", "#22c55e"],
                    scale: [1, 1.2, 1]
                } : {
                    backgroundColor: isInView ? "#22c55e" : "#ffffff", // Green when active, White when not
                    borderColor: isInView ? "#22c55e" : "#cbd5e1",
                    scale: 1
                }}
                transition={isLast && isInView ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                } : { duration: 0.5 }}
                className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 shadow-lg z-10`}
            >
                {/* 2024 Pulsing Ring Effect */}
                {isLast && isInView && (
                    <span className="absolute -inset-2 rounded-full bg-green-400 opacity-30 animate-ping"></span>
                )}
            </motion.div>

            {/* Content - 50% width on desktop */}
            <div className="w-full md:w-1/2 md:px-12">
                <div className={`p-6 shadow-sm border rounded hover:shadow-md transition-all duration-500 group
                    ${isInView ? 'border-green-500/30 bg-green-50/10' : 'border-slate-100 bg-white'}
                `}>
                    <span className={`font-black text-2xl block mb-2 transition-colors duration-500 ${isInView ? 'text-green-600' : 'text-coral-500'}`}>
                        {event.year}
                    </span>
                    <h3 className="font-bold text-navy-900 text-lg mb-2">{event.title}</h3>
                    <p className="text-slate-600 text-sm">{event.text}</p>
                </div>
            </div>
        </MotionWrapper>
    );
};

const ChecklistItem = ({ text, delay }: { text: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-coral-100 transition-colors"
        >
            <motion.div
                initial={{ backgroundColor: "#ff6b6b" }} // Coral/Red Start
                whileInView={{ backgroundColor: "#22c55e" }} // Turn Green
                transition={{ delay: delay + 0.3, duration: 0.5 }} // Staggered color change after appearing
                className="w-10 h-10 rounded flex items-center justify-center text-white flex-shrink-0 shadow-sm"
            >
                <Check className="w-6 h-6" />
            </motion.div>
            <span className="text-navy-900 font-bold text-sm md:text-base">{text}</span>
        </motion.div>
    );
};

const AboutPage = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const lineColor = useTransform(scrollYProgress, [0, 1], ["#ef4444", "#22c55e"]);

    const events = [
        { year: "2006", title: "Foundation", text: "HSF Logistics established, focusing on heavy haulage across the East African corridor." },
        { year: "2012", title: "Expansion", text: "Diversification into Civil Engineering and Construction support for the oil sector." },
        { year: "2018", title: "Aggregation", text: "Strategic JVs signed with Dongrui Electric (China) and World Navi (Japan)." },
        { year: "2024", title: "Sovereignty", text: "Awarded key contracts for UPF Fleet Modernization and National Grid Expansion." }
    ];

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

            {/* 2. Partnering / Consulting Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2">
                        <MotionWrapper variant="slide-right">
                            <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 mb-6 leading-tight">
                                Partnering with the Right <span className="text-coral-500">Consultants</span> to Unlock Business Growth
                            </h2>

                            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                                At HSF International, we understand that the right expertise can transform your business. Our tailored consulting services are designed to help organizations navigate complex challenges, unlock new opportunities, and achieve measurable results. By combining strategic insight with practical execution, we support improved decision-making, enhanced operational efficiency, and long-term, sustainable growth.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                                We work closely with our clients to understand their unique objectives and industry dynamics, enabling us to deliver customized solutions that drive performance, strengthen governance, and create lasting value. Through a collaborative and results-driven approach, HSF International partners with businesses to build resilience, optimize processes, and position them for continued success in an evolving global landscape.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    "Industry-Leading Consulting Solutions",
                                    "Tailored Strategies for Businesses of All Sizes",
                                    "Expert Guidance from a Skilled Team",
                                    "Customer-Driven Approach for Continuous Improvement"
                                ].map((item, i) => (
                                    <ChecklistItem key={i} text={item} delay={i * 0.2} />
                                ))}
                            </div>
                        </MotionWrapper>
                    </div>

                    {/* Right: Image with Overlay */}
                    <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
                        <MotionWrapper variant="slide-left" delay={0.3}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[700px]">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                                    alt="HSF Consultants Working"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay Card */}
                                <div className="absolute bottom-12 left-8 bg-white p-8 rounded-none shadow-xl max-w-sm border-l-4 border-coral-500">
                                    <h4 className="text-coral-500 font-bold text-lg mb-2">If You Need Help, Get A Consultation</h4>
                                    <button
                                        className="text-navy-900 font-black text-xl flex items-center gap-2 hover:gap-4 transition-all group"
                                        onClick={() => window.location.href = '/contact'}
                                    >
                                        Get Started <span className="text-coral-500 group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                    {/* Triangle Pointer */}
                                    <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-t-[15px] border-t-white border-r-[10px] border-r-transparent"></div>
                                </div>
                            </div>
                            {/* Decorative Pattern Behind */}
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-navy-900/5 rounded-full blur-3xl -z-10"></div>
                        </MotionWrapper>
                    </div>

                </div>
            </section>

            {/* 3. Mission / Vision Grid */}
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

            {/* 4. The "20-Year Arc" Timeline */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our History</span>
                        <h2 className="font-heading font-black text-4xl text-navy-900">A Legacy of Execution</h2>
                    </div>

                    <div ref={timelineRef} className="relative ml-4 md:ml-1/2 space-y-16">
                        {/* Static Background Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200" />

                        {/* Animated Progress Line */}
                        <motion.div
                            style={{ height: lineHeight, backgroundColor: lineColor }}
                            className="absolute left-0 top-0 w-1 z-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                        />

                        {events.map((event, index) => (
                            <TimelineEvent
                                key={index}
                                event={event}
                                index={index}
                                isLast={index === events.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Delivering Excellence Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Image with Overlay */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                alt="HSF Leadership Team"
                                className="w-full h-[600px] object-cover"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg flex items-center gap-4 max-w-xs">
                                <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                                    <Users className="w-8 h-8" />
                                </div>
                                <div>
                                    <span className="block font-black text-coral-500 text-3xl">1,485<sup className="text-lg">+</sup></span>
                                    <span className="text-slate-600 text-sm font-bold">Trusted Clients</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Pattern Behind */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-coral-500/20 rounded-2xl -z-10"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-coral-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Track Record</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 mb-6 leading-tight">
                            Delivering Excellence, <br />Driving Growth
                        </h2>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            At HSF International, we are committed to providing world-class solutions across multiple industries, helping businesses, governments, and organizations achieve their goals. With a strong foundation built on trust, innovation, and excellence, we bridge gaps and create opportunities that drive long-term success.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Our approach is centered on understanding the unique challenges faced by our clients and delivering tailored strategies that produce measurable results.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 mb-8">
                            {/* Quote Box */}
                            <div className="bg-white p-6 rounded-lg border-l-4 border-coral-500 md:w-1/2 flex items-center shadow-sm">
                                <p className="text-coral-600 font-bold text-lg leading-snug">
                                    Build with Confidence. <br />Grow with Purpose.
                                </p>
                            </div>

                            {/* Checklist */}
                            <div className="md:w-1/2 flex flex-col gap-3 justify-center">
                                {[
                                    "Innovation at the Core",
                                    "Unwavering Commitment",
                                    "Quality Without Compromise",
                                    "Reliable Partnerships",
                                    "Tailored Financial Solutions"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-coral-500 flex items-center justify-center text-white text-xs flex-shrink-0">✓</div>
                                        <span className="text-slate-600 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button variant="solid-navy" onClick={() => window.location.href = '/services'}>
                            Our Services
                        </Button>
                    </div>

                </div>
            </section>

            {/* 6. Global Network / Interactive Map */}
            <section className="py-24 bg-navy-900 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-2 block">HSF is International</span>
                        <h2 className="font-heading font-black text-4xl text-white">HSF Partner Global Eco-system</h2>
                        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                            Strategically positioned partnerships across key global markets enabling seamless logistics, technology transfer, and capital flow.
                        </p>
                    </div>

                    {/* Map Container - Increased Contrast */}
                    <div className="relative w-full aspect-[16/9] bg-navy-800 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                        {/* Map Background Image (World Map) - High Contrast White */}
                        <div
                            className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover filter invert brightness-200"
                        />

                        {/* Connection Lines (SVG Overlay) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {/* Global Partners (Green Lines now? No, stick to Coral or user didn't specify line color, just dot color? User said 'Make global partner dot green'. I'll keep lines Coral for contrast or maybe green for consistency. Let's make lines Green to match dots, better visual link.) */}
                            {[
                                { x: "75%", y: "35%" }, // China
                                { x: "85%", y: "35%" }, // Japan
                                { x: "50%", y: "30%" }, // Italy
                                { x: "62%", y: "45%" }, // Dubai
                                { x: "48%", y: "28%" }, // UK
                                { x: "20%", y: "35%" }  // USA
                            ].map((coord, i) => (
                                <motion.line
                                    key={`global-${i}`}
                                    x1="56%" y1="58%" // HQ
                                    x2={coord.x} y2={coord.y} // Partner
                                    stroke="#22c55e" // Green (Tailwind green-500)
                                    strokeWidth="2"
                                    strokeOpacity="0.6"
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                                    className="drop-shadow-lg"
                                />
                            ))}

                            {/* Local Service Network (Blue) - Tiny lines to regional centers */}
                            {[
                                { x: "55.8%", y: "57.5%" }, // Arua (approx)
                                { x: "55.5%", y: "58.2%" }, // Fort Portal
                                { x: "55.5%", y: "58.5%" }  // Mbarara
                            ].map((coord, i) => (
                                <motion.line
                                    key={`local-${i}`}
                                    x1="56%" y1="58%" // HQ
                                    x2={coord.x} y2={coord.y}
                                    stroke="#3b82f6" // Blue
                                    strokeWidth="1.5"
                                    strokeOpacity="0.9"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.5 + (i * 0.1) }}
                                />
                            ))}
                        </svg>

                        {/* Interactive Hotspots */}
                        {[
                            // --- GLOBAL PARTNERS (Green) ---
                            {
                                id: 1, name: "China Hub", location: "Beijing/Wenzhou", top: "35%", left: "75%", type: "Global",
                                details: [
                                    "Dongrui Electric (JV Partner)",
                                    "Dahua Technology (Security)"
                                ]
                            },
                            {
                                id: 2, name: "Japan Hub", location: "Tokyo", top: "35%", left: "85%", type: "Global",
                                details: [
                                    "World Navi Co. Ltd (Auto)",
                                ]
                            },
                            {
                                id: 3, name: "Italy Hub", location: "Veneto", top: "30%", left: "50%", type: "Global",
                                details: [
                                    "SIPA S.p.A. (Industrial)"
                                ]
                            },
                            {
                                id: 4, name: "Middle East Hub", location: "Dubai, UAE", top: "45%", left: "62%", type: "Global",
                                details: [
                                    "Al Noor Motors (Logistics)",
                                    "Lifeco Jebel Ali (Safety)",
                                    "Strategic Supply Chain"
                                ]
                            },
                            {
                                id: 5, name: "UK Hub", location: "London", top: "28%", left: "48%", type: "Global",
                                details: [
                                    "Lifeco HQ (Fire Safety)",
                                    "Financial Legal Services"
                                ]
                            },
                            {
                                id: 6, name: "USA Tech", location: "California", top: "35%", left: "20%", type: "Global",
                                details: [
                                    "Cisco Systems (IT Infra)"
                                ]
                            },

                            // --- LOCAL SERVICE CENTERS (Blue) ---
                            { id: 7, name: "NN Toyota", location: "Arua, Uganda", top: "57.5%", left: "55.8%", type: "Local", details: ["Authorized Service Center"] },
                            { id: 8, name: "Stitch & Sew", location: "Fort Portal", top: "58.2%", left: "55.5%", type: "Local", details: ["Regional Partner"] },
                            { id: 9, name: "Formula 21", location: "Mbarara", top: "58.5%", left: "55.5%", type: "Local", details: ["Pitstop Auto Center"] },
                            { id: 12, name: "Cadam Enterprises", location: "Kampala", top: "57.8%", left: "56.2%", type: "Local", details: ["Service Network"] },

                            // --- HQ & HUBS (Gold/Coral) ---
                            { id: 10, name: "HSF HQ", location: "Kampala, Uganda", top: "58%", left: "56%", type: "HQ", details: ["Central Headquarters"] },

                            // Government Representative Node
                            {
                                id: 11, name: "Gov. Clients", location: "Entebbe/Kampala", top: "58.5%", left: "56.5%", type: "Gov",
                                details: [
                                    "State House", "Ministry of Energy (MEMD)", "Uganda Police Force (UPF)",
                                    "KCCA", "Uganda Wildlife (UWA)", "Civil Aviation (UCAA)",
                                    "Ministry of Defence", "Immigration (DCIC)", "Office of Prime Minister"
                                ]
                            },

                            // Corporate Representative Node
                            {
                                id: 13, name: "Corp. Clients", location: "Industrial Area", top: "57.5%", left: "56.5%", type: "Corp",
                                details: [
                                    "World Vision", "TotalEnergies", "Vivo Energy", "MTN Uganda", "Join Medical Store"
                                ]
                            },

                        ].map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute group z-10"
                                style={{ top: spot.top, left: spot.left }}
                            >
                                {/* Dot Styling based on Type */}
                                <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                    <div className={`
                                        rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] z-20 transition-transform group-hover:scale-150
                                        ${spot.type === 'HQ' ? 'w-4 h-4 bg-coral-500' : ''}
                                        ${spot.type === 'Global' ? 'w-3 h-3 bg-green-500' : ''} // Green for Global
                                        ${spot.type === 'Local' ? 'w-2 h-2 bg-blue-500' : ''}
                                        ${spot.type === 'Gov' ? 'w-3 h-3 bg-yellow-400' : ''}
                                        ${spot.type === 'Corp' ? 'w-3 h-3 bg-purple-500' : ''}
                                    `}></div>

                                    {/* Ping Effect */}
                                    <div className={`
                                        absolute w-full h-full rounded-full opacity-60 animate-ping
                                        ${spot.type === 'HQ' ? 'bg-coral-500' : ''}
                                        ${spot.type === 'Global' ? 'bg-green-500' : ''} // Green Pulse
                                        ${spot.type === 'Local' ? 'bg-blue-500' : ''}
                                        ${spot.type === 'Gov' ? 'bg-yellow-400' : ''}
                                        ${spot.type === 'Corp' ? 'bg-purple-500' : ''}
                                    `}></div>

                                    {/* Special Ring for HQ */}
                                    {spot.type === 'HQ' && <div className="absolute w-12 h-12 border-2 border-coral-500 rounded-full animate-pulse opacity-30"></div>}
                                </div>

                                {/* Hover Tooltip Card */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white p-4 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-40">
                                    <div className="text-center">
                                        <h4 className="font-bold text-navy-900 text-sm mb-1">{spot.name}</h4>
                                        <p className="text-slate-500 text-xs mb-3">{spot.location}</p>

                                        <div className="text-xs text-left mb-2 space-y-1 max-h-48 overflow-y-auto custom-scrollbar border-t border-b py-2 my-2 border-slate-100">
                                            {spot.details.map((d, i) => (
                                                <p key={i}>• {d}</p>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent"></div>
                                </div>
                            </div>
                        ))}

                        {/* Map Legend & Summary Table */}
                        <div className="absolute bottom-4 left-4 z-30 flex flex-col md:flex-row gap-4">

                            {/* Key */}
                            <div className="bg-navy-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-lg w-48">
                                <h5 className="text-white text-xs font-bold mb-3 uppercase tracking-wider border-b border-white/10 pb-2">Network Key</h5>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-slate-300 text-xs">Global Partner</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <span className="text-slate-300 text-xs">Gov / Strategic Client</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                        <span className="text-slate-300 text-xs">Local Service Network</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                        <span className="text-slate-300 text-xs">Corporate & Institutional</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Table */}
                            <div className="bg-white/95 backdrop-blur border border-white/10 p-4 rounded-xl shadow-lg w-64 text-navy-900 hidden md:block">
                                <h5 className="font-black text-xs mb-3 uppercase tracking-wider border-b border-navy-100 pb-2 flex justify-between">
                                    <span>Segment</span>
                                    <span>Count</span>
                                </h5>
                                <div className="text-xs space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-slate-600">Global Supply Partners</span>
                                        <span className="bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">7+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-slate-600">Gov Ministries & Agencies</span>
                                        <span className="bg-yellow-100 text-yellow-700 font-bold px-2 py-0.5 rounded-full">13+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-slate-600">Corporate & Institutional</span>
                                        <span className="bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full">8+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-slate-600">Local Service Centers</span>
                                        <span className="bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">4</span>
                                    </div>
                                    <div className="border-t border-navy-100 mt-2 pt-2 flex justify-between items-center">
                                        <span className="font-black text-navy-900">Total Ecosystem</span>
                                        <span className="text-coral-500 font-black text-sm">32+</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <BoardOfDirectors />

            {/* 7. Team Section - FIFA Style Ratings */}
            <section className="py-24 bg-[#f8f7f4] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Leadership</span>
                        <h2 className="font-heading font-black text-4xl text-navy-900">The Squad</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-x-8 gap-y-20">
                        {[
                            // Hussein removed, starting with Sarah
                            {
                                name: "Sarah N. K.",
                                role: "Director of Operations",
                                image: "https://images.unsplash.com/photo-1573496359-136d47558bd4?q=80&w=2669&auto=format&fit=crop",
                                overall: 89,
                                quote: "Excellence is not an act, but a habit of precision.",
                                stats: [
                                    { label: "Ops", value: 95 },
                                    { label: "Logistics", value: 92 },
                                    { label: "Planning", value: 88 },
                                    { label: "Efficiency", value: 90 },
                                    { label: "Speed", value: 85 }
                                ]
                            },
                            {
                                name: "David O.",
                                role: "Head of Engineering",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
                                overall: 91,
                                quote: "Civilization is built on the foundation of engineering.",
                                stats: [
                                    { label: "Eng", value: 96 },
                                    { label: "Tech", value: 92 },
                                    { label: "Innovation", value: 89 },
                                    { label: "Quality", value: 94 },
                                    { label: "Safety", value: 90 }
                                ]
                            },
                            {
                                name: "Grace M.",
                                role: "Chief Financial Officer",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
                                overall: 90,
                                quote: "Stability is the currency of trust.",
                                stats: [
                                    { label: "Finance", value: 97 },
                                    { label: "Audit", value: 96 },
                                    { label: "Strategy", value: 88 },
                                    { label: "Risk", value: 92 },
                                    { label: "Compliance", value: 95 }
                                ]
                            }
                        ].map((member, idx) => (
                            <TeamMemberCard key={idx} member={member} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Leadership CTA */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-slate-200">
                <MotionWrapper variant="scale-up">
                    <h2 className="font-heading font-black text-4xl text-navy-900 mb-6">Ready to Partner?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                        Join hands with a team rated for excellence and delivering sovereign capability.
                    </p>
                    <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                        Contact Us
                    </Button>
                </MotionWrapper>
            </section>

            {/* 9. Corporate Resources */}
            <section className="py-16 bg-navy-900 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-white font-bold text-xl mb-8">Corporate Resources</h3>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Button variant="outline" onClick={() => window.open('/assets/HSF_Company_Profile.pdf', '_blank')}>
                            <span className="flex items-center gap-2">
                                <FileText className="w-4 h-4" /> Download Company Profile
                            </span>
                        </Button>
                        <Button variant="outline" onClick={() => window.open('/assets/HSF_Chairman_Bio.pdf', '_blank')}>
                            <span className="flex items-center gap-2">
                                <Download className="w-4 h-4" /> Download Chairman's Bio
                            </span>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- TEAM & RADAR CHART COMPONENTS ---

const TeamMemberCard = ({ member, index }: { member: any, index: number }) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
            {/* L: Photo & Identity */}
            <MotionWrapper
                delay={0.2}
                variant="slide-right"
                className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start"
            >
                <div className="relative w-64 h-64 md:w-full md:h-80 mb-6 group">
                    {/* Geometric Decoration */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-coral-500 rounded-tr-[3rem] -z-10 group-hover:scale-110 transition-transform"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-4 border-navy-900 rounded-bl-[1rem] -z-10"></div>

                    {/* Image */}
                    <div className="w-full h-full overflow-hidden rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="relative">
                    <h3 className="font-heading font-black text-2xl text-navy-900 leading-none mb-2 relative inline-block">
                        {member.name}
                        {/* Underline Decoration */}
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-2 left-0 h-1 bg-coral-500"
                        />
                    </h3>
                    <p className="text-slate-500 font-bold tracking-wide uppercase text-xs mb-4">{member.role}</p>
                    <div className="relative pl-6 border-l-2 border-slate-200 italic text-slate-600 text-sm max-w-xs mx-auto md:mx-0">
                        "{member.quote}"
                    </div>
                </div>
            </MotionWrapper>

            {/* R: FIFA Stats Card */}
            <MotionWrapper
                delay={0.6} // Delays appearance until after photo
                variant="scale-up"
                className="w-full md:w-1/2 flex items-center justify-center md:justify-start lg:pl-8"
            >
                {/* The Card Container */}
                <div className="bg-navy-900 rounded-xl p-6 shadow-2xl w-full max-w-[320px] relative overflow-hidden border border-white/10 group hover:border-coral-500/50 transition-colors duration-300">
                    {/* Top Bar: Rating & Role */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex flex-col items-center bg-navy-800 p-2 rounded-lg border border-white/5">
                            <span className="text-3xl font-black text-green-400 leading-none">{member.overall}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">OVR</span>
                        </div>
                        <div className="text-right">
                            <h4 className="font-bold text-white text-lg leading-tight">{member.name.split(' ')[0]}</h4>
                            <span className="text-xs text-coral-500 font-bold uppercase">{member.role.split(' ')[0]}</span>
                        </div>
                    </div>

                    {/* Radar Chart Visual */}
                    <div className="relative w-full aspect-square max-w-[240px] mx-auto">
                        <RadarChart stats={member.stats} />
                    </div>

                    {/* Stats List (Small) */}
                    <div className="mt-6 grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                        {member.stats.map((stat: any, i: number) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-1">
                                <span className="text-slate-400 font-medium uppercase">{stat.label}</span>
                                <span className={`font-bold ${stat.value > 90 ? 'text-green-400' : 'text-white'}`}>{stat.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 blur-[60px] rounded-full pointer-events-none"></div>
                </div>
            </MotionWrapper>
        </div>
    );
};

// SVG Radar Chart
const RadarChart = ({ stats }: { stats: { label: string, value: number }[] }) => {
    const size = 100; // Radius
    const center = 110; // Viewport center
    const numPoints = stats.length;

    // Helper to calculate coordinates
    const getCoordinates = (value: number, index: number) => {
        const angle = (Math.PI * 2 * index) / numPoints - Math.PI / 2;
        const x = center + (value / 100) * size * Math.cos(angle);
        const y = center + (value / 100) * size * Math.sin(angle);
        return { x, y };
    };

    // Background Web (20%, 40%, 60%, 80%, 100%)
    const levels = [25, 50, 75, 100];
    const bgPolygons = levels.map(level => {
        const points = stats.map((_, i) => {
            const { x, y } = getCoordinates(level, i);
            return `${x},${y}`;
        }).join(" ");
        return points;
    });

    // Data Polygon
    const dataPoints = stats.map((s, i) => {
        const { x, y } = getCoordinates(s.value, i);
        return `${x},${y}`;
    }).join(" ");

    return (
        <svg viewBox="0 0 220 220" className="w-full h-full animate-in fade-in zoom-in duration-1000">
            {/* Background Grid */}
            {bgPolygons.map((points, i) => (
                <polygon
                    key={i}
                    points={points}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                />
            ))}

            {/* Axis Lines */}
            {stats.map((_, i) => {
                const { x, y } = getCoordinates(100, i);
                return (
                    <line
                        key={i}
                        x1={center} y1={center}
                        x2={x} y2={y}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                    />
                );
            })}

            {/* Data Shape */}
            <motion.polygon
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                points={dataPoints}
                fill="rgba(34, 197, 94, 0.2)" // Green 500 equivalent
                stroke="#22c55e"
                strokeWidth="2"
            />

            {/* Labels */}
            {stats.map((stat, i) => {
                const { x, y } = getCoordinates(125, i); // Push labels out a bit
                return (
                    <text
                        key={i}
                        x={x} y={y}
                        fill="#cbd5e1"
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="uppercase tracking-tighter"
                    >
                        {stat.label}
                    </text>
                );
            })}
        </svg>
    );
};

export default AboutPage;
