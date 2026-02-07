import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { CheckCircle, TrendingUp } from 'lucide-react';

const ExcellenceSection = () => {
    return (
        <section className="bg-navy-900 py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image/Video Side */}
                    <MotionWrapper variant="scale-up" className="lg:w-1/2 relative">
                        <div className="relative rounded-sm overflow-hidden shadow-2xl border-l-4 border-coral-500 h-[600px] group">
                            {/* Video Placeholder - In production, replace src with actual HSF work video */}
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                poster="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            >
                                <source src="https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-busy-office-3336-large.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-transparent transition-colors duration-500"></div>

                            {/* Floating Overlay Card */}
                            <div className="absolute bottom-8 right-8 bg-navy-800/95 backdrop-blur-sm p-8 max-w-xs border border-white/10 shadow-2xl z-10">
                                <TrendingUp className="w-12 h-12 text-coral-500 mb-4" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-coral-500 font-bold text-lg">See Our Work</span>
                                    <span className="text-white font-bold text-lg">Building The Future.</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-black text-9xl whitespace-nowrap z-0 pointer-events-none">
                            HSF WORK
                        </div>
                    </MotionWrapper>

                    {/* Content Side */}
                    <MotionWrapper variant="slide-left" className="lg:w-1/2">
                        <span className="text-coral-500 font-bold text-sm uppercase tracking-widest mb-2 block">About Us</span>
                        <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-8 leading-tight">
                            Delivering Excellence, <br />
                            Driving Growth
                        </h2>

                        <div className="space-y-6 text-slate-400 leading-relaxed text-sm md:text-base">
                            <p>
                                At HSF International, we are committed to providing world-class solutions across multiple industries, helping businesses, governments, and organizations achieve their goals. With a strong foundation built on trust, innovation, and excellence, we bridge gaps and create opportunities that drive long-term success.
                            </p>
                            <p>
                                Our approach is centered on understanding the unique challenges faced by our clients and delivering tailored strategies that produce measurable results. By combining industry expertise with forward-thinking solutions, we empower our partners to adapt, grow, and thrive.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Innovation at the Core",
                                "Unwavering Commitment",
                                "Quality Without Compromise",
                                "Reliable Partnerships",
                                "Tailored Financial Solutions"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-coral-500 flex-shrink-0" />
                                    <span className="text-white font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
};

export default ExcellenceSection;
