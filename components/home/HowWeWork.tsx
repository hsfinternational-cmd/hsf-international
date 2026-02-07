import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Check, ArrowRight, MessageSquare, Compass, Settings, Trophy } from 'lucide-react';
import Button from '../Button';

const steps = [
    {
        id: 1,
        title: "Inquiry & Consultation",
        subtitle: "Industry-Leading Consulting Solutions",
        desc: "We start by listening. Whether it's a government contract or a private sector initiative, we analyze your specific needs and challenges to build a foundation of trust.",
        icon: MessageSquare,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" // Meeting/Handshake
    },
    {
        id: 2,
        title: "Strategic Planning",
        subtitle: "Tailored Strategies for All Sizes",
        desc: "Our experts craft a bespoke roadmap. We leverage data-driven insights to design a strategy that aligns with your goals, ensuring efficiency and scalability.",
        icon: Compass,
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop" // Planning/Board
    },
    {
        id: 3,
        title: "Execution & Implementation",
        subtitle: "Expert Guidance from a Skilled Team",
        desc: "We don't just plan; we do. Our team is on the ground, managing logistics, compliance, and operations to ensure flawless execution of the project.",
        icon: Settings,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop" // Industrial/Work
    },
    {
        id: 4,
        title: "Deal Success & Growth",
        subtitle: "Customer-Driven Approach",
        desc: "The job isn't done until you see results. We monitor performance and ensure sustainable growth, solidifying a long-term partnership.",
        icon: Trophy,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" // Success/Team
    }
];

const StepCard = ({ step, index, setHostRef }: { step: typeof steps[0], index: number, setHostRef: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setHostRef(index);
        }
    }, [isInView, index, setHostRef]);

    return (
        <div ref={ref} className="min-h-[80vh] flex flex-col justify-center py-20 group">
            <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-colors duration-500 ${isInView ? 'bg-coral-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                <step.icon className="w-8 h-8" />
            </div>

            <h3 className={`font-heading font-black text-3xl md:text-4xl mb-2 transition-colors duration-500 ${isInView ? 'text-navy-900' : 'text-slate-300'}`}>
                {step.title}
            </h3>

            <div className="flex items-center gap-3 mb-6">
                <div className={`p-1 rounded bg-slate-100 ${isInView ? 'text-coral-500' : 'text-slate-300'}`}>
                    <Check className="w-4 h-4" />
                </div>
                <span className={`font-bold text-lg ${isInView ? 'text-coral-500' : 'text-slate-300'}`}>{step.subtitle}</span>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                {step.desc}
            </p>
        </div>
    );
};

const HowWeWork = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row">

                    {/* Left: Scrollable Text Steps */}
                    <div className="lg:w-1/2 ">
                        <div className="py-24">
                            <span className="text-coral-500 font-bold uppercase tracking-widest text-sm mb-4 block">How We Work</span>
                            <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 mb-2 leading-tight">
                                Finding the Right Partner <br /> to Drive Your Business.
                            </h2>
                            <p className="text-slate-500 text-sm mb-12">Scroll down to see our process.</p>

                            <div className="space-y-0">
                                {steps.map((step, idx) => (
                                    <StepCard key={step.id} step={step} index={idx} setHostRef={setActiveStep} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Sticky Image Stage */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <div className="sticky top-0 h-screen flex items-center justify-center p-12">
                            <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-2 border-slate-100 bg-slate-50">
                                {/* Images Stack */}
                                {steps.map((step, idx) => (
                                    <motion.img
                                        key={step.id}
                                        src={step.image}
                                        alt={step.title}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{
                                            opacity: activeStep === idx ? 1 : 0,
                                            scale: activeStep === idx ? 1 : 1.1,
                                            zIndex: activeStep === idx ? 10 : 0
                                        }}
                                        transition={{ duration: 0.7 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ))}

                                {/* Gradient Overlay (Lighter for White Theme) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent opacity-60 z-20"></div>

                                {/* Floating CTA Card */}
                                <div className="absolute bottom-12 left-12 right-12 bg-white/95 backdrop-blur-md p-6 border border-white/20 shadow-xl z-30 rounded-sm">
                                    <span className="text-coral-500 font-bold text-sm uppercase mb-2 block">Next Step</span>
                                    <h4 className="text-navy-900 font-bold text-xl mb-4">If You Need Help, Get A Consultation</h4>
                                    <Button variant="solid-navy" className="bg-coral-500 border-coral-500 hover:bg-coral-600 text-white w-full justify-between group">
                                        Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
