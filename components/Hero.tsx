import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-soft-cream pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="lg:w-1/2 text-center lg:text-left animate-slide-in-left">
                    <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">The Navodaa Collection</span>
                    <h1 className="font-primary text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-text-primary mt-4 mb-6 leading-tight">
                        A Unified Vision of <span className="font-semibold bg-gradient-gold text-transparent bg-clip-text">Elegance & Style</span>
                    </h1>
                    <p className="text-text-secondary text-base lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Welcome to the world of Navodaa, where beauty, fashion, and lifestyle converge. Explore our portfolio of brands, each crafted with passion and dedication to excellence.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <a href="#brands" className="bg-gradient-gold text-white font-bold py-3 px-6 lg:px-8 rounded-lg shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm lg:text-base">
                            <i className="fas fa-arrow-down"></i> Explore Brands
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 relative flex justify-center">
                    <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-lg shadow-strong overflow-hidden">
                        <img src="./images/black-logo.png" alt="Navodaa Brand Mood" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;