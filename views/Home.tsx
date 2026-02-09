import React from 'react';
import Hero from '../components/home/Hero';
import ScaleTicker from '../components/home/ScaleTicker';
import { OpportunityCTA, WhyChooseUs } from '../components/home/WhyChooseUs';
import VisionMission from '../components/home/VisionMission';
import FeatureRow from '../components/home/FeatureRow';
import ExcellenceSection from '../components/home/ExcellenceSection';
import StatsRow from '../components/home/StatsRow';
import ServiceShowcase from '../components/home/ServiceShowcase';
import ChairmanFeature from '../components/home/ChairmanFeature';
import ContractorAggregator from '../components/home/ContractorAggregator';
import MotionWrapper from '../components/MotionWrapper';
import SustainableSuccess from '../components/home/SustainableSuccess';
import GlobalPartners from '../components/home/GlobalPartners';
import HowWeWork from '../components/home/HowWeWork';
import DiplomaticReach from '../components/home/DiplomaticReach';
import BoardOfDirectors from '../components/home/BoardOfDirectors';
import TeamShowcase from '../components/home/TeamShowcase';
import Button from '../components/Button';
import { Download, FileText } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-navy-900">
            <Hero />

            {/* Feature Row (Advice, Great Solutions, Trusted Partnerships) */}
            <FeatureRow />

            {/* Why Choose Us (Progress Bars) */}
            <WhyChooseUs />

            {/* Excellence Section (Video Showcase) */}
            <ExcellenceSection />

            {/* Vision & Mission */}
            <VisionMission />

            {/* Stats Row */}
            <StatsRow />

            {/* Services Grid */}
            <ServiceShowcase />

            {/* Chairman Profile */}
            <ChairmanFeature />

            {/* Sustainable Success & Testimonials */}
            <SustainableSuccess />

            {/* How We Work (Scroll Animation) */}
            <HowWeWork />

            {/* Global Partners & Map */}
            <GlobalPartners />

            {/* Diplomatic Reach (Section Moved) */}
            <DiplomaticReach />

            {/* Board of Directors */}
            <BoardOfDirectors />

            {/* Team Showcase (Details + HSF Model Headline) */}
            <TeamShowcase />

            {/* Corporate Resources & CTA (White Section) */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Ready to Partner CTA */}
                    <div className="mb-20">
                        <MotionWrapper variant="fade-up">
                            <h2 className="font-heading font-black text-4xl text-navy-900 mb-6">Ready to Partner?</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
                                Join hands with a team rated for excellence and delivering sovereign capability.
                            </p>
                            <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                                Contact Us
                            </Button>
                        </MotionWrapper>
                    </div>

                    {/* Corporate Resources Downloads */}
                    <div className="border-t border-slate-200 pt-16">
                        <MotionWrapper variant="fade-up" delay={0.2}>
                            <h3 className="font-heading font-black text-2xl text-navy-900 mb-8">Corporate Resources</h3>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Button
                                    variant="solid-navy"
                                    onClick={() => window.open('/assets/HSF_Company_Profile.pdf', '_blank')}
                                    className="w-full md:w-auto"
                                >
                                    <span className="flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> Download Company Profile
                                    </span>
                                </Button>
                                <Button
                                    variant="solid-navy"
                                    onClick={() => window.open('/assets/HSF_Chairman_Bio.pdf', '_blank')}
                                    className="w-full md:w-auto"
                                >
                                    <span className="flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> Download Chairman's Bio
                                    </span>
                                </Button>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
