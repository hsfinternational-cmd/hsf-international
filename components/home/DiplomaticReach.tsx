import React from 'react';
import MotionWrapper from '../MotionWrapper';
import Button from '../Button';
import { motion } from 'framer-motion';

const CircularProgress = ({ value, label, subtext }: { value: number, label: string, subtext: string }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Track */}
                    <circle
                        className="text-slate-100"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                    />
                    {/* Progress Indicator */}
                    <motion.circle
                        className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset="251.2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        initial={{ strokeDashoffset: 251.2, stroke: "#1e293b" }} // Starts dark/navy
                        whileInView={{
                            strokeDashoffset: 251.2 - (251.2 * value) / 100,
                            stroke: "#22c55e" // Animates to Green
                        }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-navy-900">{value}%</span>
                </div>
            </div>
            <div>
                <h4 className="text-navy-900 font-bold text-lg mb-2 leading-tight">{label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{subtext}</p>
            </div>
        </div>
    );
};

const DiplomaticReach = () => {
    return (
        <section className="bg-white border-b border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[800px]">

                {/* Left: Image Side (Diplomatic Context) */}
                <div className="lg:w-1/2 relative group min-h-[500px] lg:min-h-0">
                    <img
                        src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2532&auto=format&fit=crop"
                        alt="Diplomatic Handshake"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient (Lightened for White Theme) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>

                    {/* Overlay Card: Open For Opportunities */}
                    <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-md p-10 lg:p-12 max-w-xl border-t border-r border-white/20 shadow-2xl">
                        <h3 className="text-navy-900 font-heading font-bold text-2xl mb-4">We Are Open For Opportunities!</h3>
                        <p className="text-slate-600 leading-relaxed mb-0">
                            HSF International is committed to fostering partnerships and driving impactful solutions. Our expertise spans across industries, and we are always seeking new opportunities to collaborate, innovate, and grow.
                        </p>
                    </div>
                </div>

                {/* Right: Content Side (Safety & High Availability) */}
                <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
                    <MotionWrapper variant="slide-left">
                        <span className="text-coral-500 font-bold uppercase tracking-widest text-xs mb-4 block">Why Choose Us</span>

                        <div className="border-l-4 border-coral-500 pl-6 mb-8">
                            <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 leading-tight">
                                We Keep Your Business Safe & Ensure High Availability
                            </h2>
                        </div>

                        <p className="text-slate-500 mb-12 leading-relaxed max-w-xl">
                            HSF International is committed to safeguarding your business with reliable solutions, ensuring smooth operations and high availability. We leverage industry expertise to provide effective and sustainable outcomes.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
                            <CircularProgress
                                value={92}
                                label="Strategic Business Solutions"
                                subtext="Crafting comprehensive strategies that align with your long-term vision."
                            />
                            <CircularProgress
                                value={94}
                                label="Growth & Innovation"
                                subtext="Driving expansion through cutting-edge technology and market insights."
                            />
                            {/* New Stats Added */}
                            <CircularProgress
                                value={98}
                                label="Operational Reliability"
                                subtext="Ensuring 24/7 continuity for your most critical business infrastructures."
                            />
                            <CircularProgress
                                value={99}
                                label="Compliance & Safety"
                                subtext="Adhering to strict international standards to mitigate risk effectively."
                            />
                        </div>

                        <Button variant="solid-navy" className="bg-coral-600 text-white border-coral-600 hover:bg-coral-700 self-start px-8 shadow-lg shadow-coral-500/20">
                            Reach Out
                        </Button>
                    </MotionWrapper>
                </div>

            </div>
        </section>
    );
};

export default DiplomaticReach;
