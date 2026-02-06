import React from 'react';
import Hero from '../components/home/Hero';
import ScaleTicker from '../components/home/ScaleTicker';
import { OpportunityCTA, WhyChooseUs } from '../components/home/WhyChooseUs';
import ServiceClusters from '../components/home/ServiceClusters';
import ContractorAggregator from '../components/home/ContractorAggregator';
import MotionWrapper from '../components/MotionWrapper';

const Home = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <Hero />

            <MotionWrapper delay={0.1} variant="fade-up">
                <OpportunityCTA />
            </MotionWrapper>

            <MotionWrapper delay={0.2} variant="fade-up">
                <WhyChooseUs />
            </MotionWrapper>

            <ScaleTicker />

            {/* Service Clusters handles its own internal staggering, but we wrap the container */}
            <div className="bg-slate-50">
                <ServiceClusters />
            </div>

            <MotionWrapper delay={0.2} variant="fade-up">
                <ContractorAggregator />
            </MotionWrapper>
        </div>
    );
};

export default Home;
