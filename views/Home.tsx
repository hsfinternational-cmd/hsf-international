import React from 'react';
import Hero from '../components/home/Hero';
import ScaleTicker from '../components/home/ScaleTicker';
import { OpportunityCTA, WhyChooseUs } from '../components/home/WhyChooseUs';
import ServiceClusters from '../components/home/ServiceClusters';
import ContractorAggregator from '../components/home/ContractorAggregator';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <OpportunityCTA />
            <WhyChooseUs />
            <ScaleTicker />
            <ServiceClusters />
            <ContractorAggregator />
        </div>
    );
};

export default Home;
