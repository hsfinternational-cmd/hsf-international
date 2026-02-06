import React from 'react';
import Button from '../Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-navy-900 text-white">

            {/* Background Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40 z-10"></div>
                {/* Simulating the "Land Cruiser / High Voltage / Server Room" loop with a high-end CSS animation or placeholder image if available */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-slow-pan grayscale-[50%] opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
                <div className="max-w-4xl">
                    <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-6 animate-fade-in-up">
                        THE ARCHITECT OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-400">IMPLEMENTATION.</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-100">
                        Bridging the gap between Global Technology and National Sovereignty.
                        From the Albertine Oil Graben to the Digital Security of the State.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-200">
                        <Button variant="primary" className="shadow-gold-500/20 shadow-2xl">
                            Explore Our Projects
                        </Button>
                        <Button variant="outline" className="group">
                            Partner for Execution
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
