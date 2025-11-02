import React from 'react';
import { Brand } from '../types';

interface ServiceCardProps {
    brand: Brand;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ brand }) => {
    return (
        <div className="group bg-white rounded-lg shadow-soft hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
            <div className="relative h-48 sm:h-56 lg:h-64">
                <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-primary text-xl sm:text-2xl font-semibold text-text-primary mb-2 leading-tight">{brand.name}</h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-grow mb-4">{brand.description}</p>
                <div className="mt-auto pt-2">
                    <a href={brand.link} className="text-primary-gold font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm sm:text-base">
                        {brand.cta}
                        <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;