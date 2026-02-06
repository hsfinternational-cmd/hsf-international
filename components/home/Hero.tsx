import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { StaggerContainer } from '../MotionWrapper';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out on scroll

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-navy-900 text-white">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/40 z-10"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover filter grayscale opacity-40 scale-105"
                >
                    {/* Placeholder video - easy to swap with the user's asset later */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-engineering-team-working-on-a-large-machine-42867-large.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <StaggerContainer className="max-w-4xl" staggerDelay={0.2}>

                    <motion.div variants={textVariants}>
                        <span className="text-coral-500 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
                            Sovereign Capability
                        </span>
                    </motion.div>

                    <motion.h1 variants={textVariants} className="font-heading font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight mb-8 text-white">
                        The Architect of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-coral-400">
                            Implementation.
                        </span>
                    </motion.h1>

                    <motion.p variants={textVariants} className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed border-l-4 border-coral-500 pl-8">
                        Bridging the gap between Global Technology and National Sovereignty.
                        From the Albertine Oil Graben to the Digital Security of the State.
                    </motion.p>

                    <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-6">
                        <Button variant="primary" className="!bg-coral-500 !border-coral-500 hover:!bg-coral-600 shadow-xl shadow-coral-500/20">
                            Explore Our Projects
                        </Button>
                        <Button variant="outline" className="group !border-white/20 hover:!border-white hover:!bg-white/5">
                            Partner for Execution
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                </StaggerContainer>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
            >
                <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
                <ChevronDown className="w-5 h-5 text-coral-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
