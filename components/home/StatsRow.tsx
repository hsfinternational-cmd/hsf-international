import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Globe, FileText, ThumbsUp, Users } from 'lucide-react';

const stats = [
    { icon: Globe, value: 1452, label: "Happy Clients", suffix: "+" },
    { icon: FileText, value: 3452, label: "Projects Completed", suffix: "" },
    { icon: ThumbsUp, value: 15, label: "Years Of Experience", suffix: "" },
    { icon: Users, value: 72, label: "Team Members", suffix: "" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView && ref.current) {
            // 1. Count Sequence
            const controls = animate(0, value, {
                duration: 4,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
                    }
                },
                onComplete: () => {
                    // 2. Flash Sequence: Current -> Coral -> Navy
                    if (ref.current) {
                        animate(ref.current,
                            { color: ["#1e293b", "#ef4444", "#1e293b"] }, // Navy -> Red -> Navy
                            { duration: 1.5, times: [0, 0.2, 1] }
                        );
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix]);

    return <span ref={ref} className="font-heading font-black text-4xl md:text-5xl mb-2 inline-block text-navy-900" />;
};

const StatsRow = () => {
    return (
        <section className="bg-white pb-24 pt-10 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            key={idx}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 relative">
                                <stat.icon className="w-16 h-16 text-coral-500 stroke-[1] group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute -bottom-2 -right-2 bg-coral-500/10 w-8 h-8 rounded-full blur-xl group-hover:bg-coral-500/30 transition-colors"></div>
                            </div>

                            <Counter value={stat.value} suffix={stat.suffix} />

                            <p className="text-slate-500 font-medium uppercase tracking-wider text-sm group-hover:text-coral-500 transition-colors">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsRow;
