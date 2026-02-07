import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const VisionMission = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Vision Card - Dark Navy expanding to reveal depth */}
                    <MotionWrapper variant="slide-right" className="md:w-1/2">
                        <motion.div
                            className="bg-navy-900 p-12 md:p-16 text-white border-l-4 border-coral-500 h-full relative overflow-hidden group rounded-2xl shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative z-10 text-left">
                                <div className="mb-6">
                                    <Target className="w-12 h-12 text-coral-500 mb-4" />
                                    <h2 className="font-heading font-black text-3xl text-coral-500 mb-2">Our Vision</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
                                    To be the most trusted partner in delivering exceptional solutions for government and private sector projects worldwide, advancing progress through innovation.
                                </p>

                                {/* Expanding Content */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileHover={{ height: 'auto', opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                                        <div>
                                            <h4 className="text-coral-500 font-bold text-sm uppercase mb-1">Global Standard Setting</h4>
                                            <p className="text-xs text-slate-400">We don't just follow industry standards; we aim to define them through excellence and rigorous quality control.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-coral-500 font-bold text-sm uppercase mb-1">Sustainable Legacy</h4>
                                            <p className="text-xs text-slate-400">Creating long-term value that outlasts the contract, ensuring future generations benefit from our work today.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
                        </motion.div>
                    </MotionWrapper>

                    {/* Mission Card - Red/Coral expanding */}
                    <MotionWrapper variant="slide-left" className="md:w-1/2">
                        <motion.div
                            className="bg-[#8B0000] p-12 md:p-16 text-white relative h-full overflow-hidden group rounded-2xl shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Award className="w-48 h-48 text-white" />
                            </div>

                            <div className="relative z-10 text-left">
                                <div className="mb-6">
                                    <Award className="w-12 h-12 text-white mb-4" />
                                    <h2 className="font-heading font-black text-3xl text-white mb-2">Mission</h2>
                                </div>
                                <p className="text-white/90 leading-relaxed text-sm md:text-base mb-6">
                                    We are dedicated to providing outstanding services that empower clients to achieve their objectives, prioritizing loyalty and trust.
                                </p>

                                {/* Expanding Content */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileHover={{ height: 'auto', opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-white/20 flex flex-col gap-4">
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase mb-1">Client Empowerment</h4>
                                            <p className="text-xs text-white/70">Your success is our primary metric. We align our entire operational capability to ensure you win.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm uppercase mb-1">Unshakeable Trust</h4>
                                            <p className="text-xs text-white/70">Building transparent, long-term partnerships that survive market volatility and challenges.</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Static Tags Removed as per request */}
                            </div>
                        </motion.div>
                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;
