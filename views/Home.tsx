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
import TeamShowcase from '../components/home/TeamShowcase';

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

            {/* Team Showcase (Details + HSF Model Headline) */}
            <TeamShowcase />
        </div>
    );
};

export default Home;
