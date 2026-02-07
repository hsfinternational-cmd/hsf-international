import React from 'react';
import MotionWrapper from '../MotionWrapper';
import { Quote } from 'lucide-react';

const ChairmanFeature = () => {
    return (
        <section className="bg-navy-900 pb-24">
            {/* Top Banner */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                    alt="Meeting"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <MotionWrapper variant="scale-up">
                        <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">Needs Experience Business Consultant?</h2>
                        <p className="text-slate-400 max-w-xl mx-auto mb-8">
                            HSF International is your expert guide to driving success, delivering tailored solutions for sustainable growth.
                        </p>
                    </MotionWrapper>
                </div>
            </div>

            {/* Chairman Profile Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image */}
                    <MotionWrapper variant="slide-right" className="lg:w-1/2">
                        <div className="relative rounded-sm overflow-hidden border-8 border-navy-800 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" // Professional portrait placeholder
                                alt="Mr. Hussein .A"
                                className="w-full md:h-[600px] object-cover"
                            />
                        </div>
                    </MotionWrapper>

                    {/* Content */}
                    <MotionWrapper variant="slide-left" className="lg:w-1/2">
                        <span className="text-coral-500 font-heading font-bold text-2xl md:text-3xl mb-2 block">
                            Chairman | Founder, HSF International
                        </span>
                        <h3 className="text-white font-light text-4xl md:text-5xl mb-8 border-l-4 border-coral-500 pl-6">
                            Mr. Hussein .A
                        </h3>

                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                            <p>
                                "At HSF International Limited, we are driven by a commitment to excellence, resilience, and progress."
                            </p>
                            <p>
                                "We aim to foster sustainable development not only in Uganda but on a global scale. Our dedicated team, grounded in hard work and loyalty, empowers our clients and partners, enhancing local and international collaboration."
                            </p>
                            <p className="font-bold text-white">
                                "Together, we will shape a future marked by impactful contributions to economic growth and mutual success."
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="h-px bg-slate-700 flex-grow"></div>
                            <Quote className="text-coral-500 w-8 h-8 opacity-50" />
                        </div>

                    </MotionWrapper>

                </div>
            </div>
        </section>
    );
};

export default ChairmanFeature;
