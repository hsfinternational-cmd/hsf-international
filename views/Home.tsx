import React from 'react';
import Hero from '../components/home/Hero';
import ScaleTicker from '../components/home/ScaleTicker';
import ContractorAggregator from '../components/home/ContractorAggregator';
import ServiceClusters from '../components/home/ServiceClusters';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ScaleTicker />
            <ContractorAggregator />
            <ServiceClusters />
            {/* Additional sections can be added here */}
        </div>
    );
};

export default Home;
