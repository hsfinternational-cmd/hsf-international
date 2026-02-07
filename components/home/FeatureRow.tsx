import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { Handshake, ThumbsUp, Users } from 'lucide-react';

const features = [
    {
        icon: Handshake,
        title: "Advice & Guides",
        desc: "Clear, practical insights that help organizations navigate complex challenges, make informed decisions, and unlock new opportunities with confidence."
    },
    {
        icon: ThumbsUp,
        title: "Great Solutions",
        desc: "Tailored strategies designed to deliver measurable results, drive efficiency, and create lasting impact across government and private sector projects."
    },
    {
        icon: Users,
        title: "Trusted Partnerships",
        desc: "Collaborative relationships built on integrity, expertise, and shared goals ensuring reliable delivery and long-term success at every stage."
    }
];

const FeatureRow = () => {
    return (
        <section className="bg-navy-900 py-20 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((f, i) => (
                        <MotionWrapper
                            key={i}
                            delay={i * 0.2}
                            variant="fade-up"
                            className="group"
                        >
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="p-4 rounded-full border border-coral-500/30 bg-coral-500/5 group-hover:bg-coral-500 group-hover:text-white text-coral-500 transition-all duration-500">
                                    <f.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-coral-500 transition-colors">{f.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureRow;
