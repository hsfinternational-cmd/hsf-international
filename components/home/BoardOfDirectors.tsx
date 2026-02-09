import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, User, ArrowUpRight } from 'lucide-react';
import MotionWrapper from '../MotionWrapper';

const boardMembers = [
    {
        id: 1,
        name: "Hussein Abdullah",
        role: "Chairman & Founder",
        desc: "Visionary leader driving HSF's strategic global expansion and operational excellence.",
        image: null, // Placeholder or reuse existing if available
        linkedin: "#"
    },
    {
        id: 2,
        name: "Obed",
        role: "Director", // Placeholder role, can be updated
        desc: "Strategic director overseeing corporate governance and sustainable growth initiatives.",
        image: null,
        linkedin: "#"
    },
    {
        id: 3,
        name: "Emran",
        role: "Director", // Placeholder role, can be updated
        desc: "Key executive focused on international partnerships and high-stakes negotiation.",
        image: null,
        linkedin: "#"
    },
    {
        id: 4,
        name: "Barbra Toyota",
        role: "Managing Partner",
        desc: "Driving strategic partnerships and operational excellence across the portfolio.",
        image: null,
        linkedin: "#"
    }
];

const DirectorCard = ({ member, index }: { member: typeof boardMembers[0], index: number }) => (
    <div className="relative group perspective-1000">
        <div className="absolute inset-0 bg-coral-500 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-500 opacity-20 group-hover:opacity-40"></div>
        <div className="relative bg-white dark:bg-navy-900 border border-coral-500/20 rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-500 transform group-hover:-translate-y-2">

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-coral-500/10 to-transparent rounded-tr-2xl rounded-bl-3xl"></div>

            {/* Image */}
            <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-coral-400 to-coral-600 shadow-lg shadow-coral-500/30">
                    <div className="w-full h-full rounded-full bg-navy-950 overflow-hidden flex items-center justify-center border-4 border-white dark:border-navy-900">
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                            <User className="w-12 h-12 text-white/80" />
                        )}
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-navy-900 text-coral-500 p-2 rounded-full border border-coral-500 shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>

            {/* Info */}
            <h3 className="font-heading font-black text-2xl text-navy-900 dark:text-white mb-2 group-hover:text-coral-500 transition-colors">
                {member.name}
            </h3>
            <span className="inline-block px-4 py-1 rounded-full bg-coral-50 text-coral-600 text-xs font-bold uppercase tracking-widest mb-4 border border-coral-100 dark:bg-coral-500/10 dark:border-coral-500/20 dark:text-coral-400">
                {member.role}
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {member.desc}
            </p>

            {/* Social */}
            <div className="mt-auto">
                <a href={member.linkedin} className="text-slate-400 hover:text-coral-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
            </div>
        </div>
    </div>
);

const BoardOfDirectors = () => {
    return (
        <section className="bg-slate-50 dark:bg-navy-950 py-24 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-coral-500/5 skew-x-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <MotionWrapper>
                        <span className="text-coral-500 font-bold tracking-widest uppercase text-sm mb-4 block">Leadership</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 dark:text-white mb-6">
                            Board of <span className="text-coral-500">Directors</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                            Guiding HSF International with decades of experience, strategic foresight, and unwavering commitment to excellence.
                        </p>
                    </MotionWrapper>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {boardMembers.map((member, idx) => (
                        <MotionWrapper key={member.id} delay={idx * 0.1} variant="fade-up">
                            <DirectorCard member={member} index={idx} />
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardOfDirectors;
