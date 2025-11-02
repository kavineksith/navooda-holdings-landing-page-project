import React from 'react';

const FeatureItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
    <li className="flex items-start gap-3">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-gold/10 text-primary-gold">
            <i className={icon}></i>
        </div>
        <span className="text-text-secondary">{text}</span>
    </li>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 lg:py-20 bg-soft-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative h-96 lg:h-full min-h-[450px] order-2 lg:order-1">
                        <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-strong">
                            <img src="./images/about-us.png" alt="About Navodaa 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-lg overflow-hidden shadow-medium border-4 sm:border-8 border-soft-cream">
                            <img src="./images/about-us-tile.png" alt="About Navodaa 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">Our Story</span>
                        <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-medium text-text-primary mt-4 mb-6 leading-tight">Driven by Passion & Excellence</h2>
                        <p className="text-text-secondary text-base lg:text-lg mb-6 leading-relaxed">
                            Founded by a single individual with a grand vision, Navodaa is more than just a brand; it's a testament to dedication and the pursuit of excellence. Our journey began with a simple idea: to provide exceptional products and services that enrich people's lives.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <FeatureItem icon="fas fa-certificate" text="A portfolio built on a foundation of trust and quality." />
                            <FeatureItem icon="fas fa-award" text="Commitment to providing the best customer experience." />
                            <FeatureItem icon="fas fa-leaf" text="Embracing innovation while staying true to our core values." />
                        </ul>
                        <a href="#contact" className="inline-block bg-gradient-gold text-white font-bold py-3 px-6 lg:px-8 rounded-lg shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;