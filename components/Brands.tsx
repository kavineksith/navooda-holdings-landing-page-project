import React from 'react';
import { BRANDS } from '../constants';
import ServiceCard from './ServiceCard';

const Brands: React.FC = () => {
    return (
        <section id="brands" className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">Our Expertise</span>
                    <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-medium text-text-primary mt-4 leading-tight">Explore Our Brands</h2>
                    <p className="text-text-secondary text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        Each brand under the Navodaa umbrella offers a unique experience, united by a commitment to quality and customer satisfaction.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {BRANDS.map((brand, index) => (
                        <div key={brand.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <ServiceCard brand={brand} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;