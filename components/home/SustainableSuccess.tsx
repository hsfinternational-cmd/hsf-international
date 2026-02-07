import React, { useState, useEffect } from 'react';
import MotionWrapper from '../MotionWrapper';
import Button from '../Button';
import { User, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "HSF International provided valuable technical and operational support. Their collaborative approach and commitment to quality contributed positively to the successful delivery of our objectives.",
        name: "Ministry of Health",
        role: "Strategic Partner",
        logo: User // Placeholder for logo icon
    },
    {
        id: 2,
        quote: "The strategic insights provided by HSF transformed our logistics framework. We achieved a 40% increase in operational efficiency within just six months of implementation.",
        name: "Global Logistics Corp",
        role: "Operations Director",
        logo: User
    },
    {
        id: 3,
        quote: "Unwavering professionalism and deep diplomatic reach. HSF International bridged the gap between complex regulatory requirements and our business goals effortlessly.",
        name: "PetroEnergy Solutions",
        role: "Chief Executive Officer",
        logo: User
    }
];

const SustainableSuccess = () => {
    const [current, setCurrent] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Fix: Assign component to capitalized variable for JSX rendering
    const CurrentLogo = testimonials[current].logo;

    return (
        <section className="bg-white border-b border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">

                {/* Left: Sustainable Success (White Theme) */}
                <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-white relative z-10">
                    <MotionWrapper variant="slide-right">
                        <div className="border-l-4 border-coral-500 pl-6 mb-8">
                            <h2 className="font-heading font-black text-4xl md:text-5xl text-navy-900 mb-2">We Help You Build</h2>
                            <h2 className="font-heading font-black text-4xl md:text-5xl text-coral-500">Sustainable Success.</h2>
                        </div>
                        <p className="text-slate-500 leading-relaxed mb-8 max-w-xl text-lg">
                            We deliver innovative solutions that empower businesses, governments, and organizations to thrive. With trust and excellence at our core, we create opportunities that drive long-term growth and impact.
                        </p>
                        <Button variant="solid-navy" className="bg-navy-900 text-white hover:bg-navy-800 shadow-xl shadow-navy-900/20 self-start px-8 py-4">
                            Contact Us
                        </Button>
                    </MotionWrapper>
                </div>

                {/* Right: Testimonials Carousel (Dark Navy Card with Deep Shadows) */}
                <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-slate-50 relative">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-900/5 rounded-full blur-3xl -ml-10 -mb-10"></div>

                    <MotionWrapper variant="slide-left" className="relative z-10">
                        <span className="text-coral-500 font-bold uppercase tracking-widest text-xs mb-8 block">Client Testimonials</span>

                        <div className="relative h-[350px]"> {/* Fixed height container for stability */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-navy-900/10 border border-slate-100 hover:shadow-coral-500/10 hover:-translate-y-1 transition-all duration-500"
                                >
                                    <Quote className="w-10 h-10 text-coral-500/20 mb-6" />

                                    <blockquote className="text-navy-900 text-lg md:text-xl italic leading-relaxed mb-8">
                                        "{testimonials[current].quote}"
                                    </blockquote>

                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center text-navy-900 border border-navy-100">
                                            <CurrentLogo className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-navy-900 font-bold text-lg">{testimonials[current].name}</h4>
                                            <p className="text-slate-500 text-sm">{testimonials[current].role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex gap-4 mt-8 ml-4">
                            <button onClick={prevSlide} className="p-3 rounded-full bg-white shadow-lg text-navy-900 hover:text-coral-500 hover:shadow-xl transition-all border border-slate-100 group">
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={nextSlide} className="p-3 rounded-full bg-white shadow-lg text-navy-900 hover:text-coral-500 hover:shadow-xl transition-all border border-slate-100 group">
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                    </MotionWrapper>
                </div>

            </div>
        </section>
    );
};

export default SustainableSuccess;
