import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-deep-charcoal text-white/80 py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
                    {/* About Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h4 className="font-primary text-xl font-semibold text-primary-gold mb-4">Navodaa</h4>
                        <p className="text-sm leading-relaxed text-white/70 pr-4">
                            A unified vision of elegance and style, bringing together a portfolio of brands dedicated to quality and customer satisfaction.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-primary text-xl font-semibold text-primary-gold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-primary-gold transition-colors duration-300 text-sm text-white/70 hover:text-white">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brands */}
                    <div>
                        <h4 className="font-primary text-xl font-semibold text-primary-gold mb-4">Our Brands</h4>
                        <ul className="space-y-3">
                            <li><a href="https://www.facebook.com/share/1BVgd3qSs7/" className="hover:text-primary-gold transition-colors duration-300 text-sm text-white/70 hover:text-white">Saloon Navodaa</a></li>
                            <li><a href="https://www.facebook.com/share/17ZRxZhy46/" className="hover:text-primary-gold transition-colors duration-300 text-sm text-white/70 hover:text-white">The Fancy Point</a></li>
                            <li><a href="https://www.facebook.com/share/1Cvph26nSc/" className="hover:text-primary-gold transition-colors duration-300 text-sm text-white/70 hover:text-white">Navodaa Online Store</a></li>
                            <li><a href="https://www.facebook.com/salonnavodaDN" className="hover:text-primary-gold transition-colors duration-300 text-sm text-white/70 hover:text-white">Navodaa Fashion</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-primary text-xl font-semibold text-primary-gold mb-4">Connect</h4>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm text-white/70">
                                <i className="fas fa-map-marker-alt w-4 text-center text-primary-gold"></i>
                                <span>552/1/2, Colombo Rd, Gampaha, Western Province, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/70">
                                <i className="fas fa-phone w-4 text-center text-primary-gold"></i>
                                <a href="tel:+94703584172" className="hover:text-primary-gold transition-colors hover:text-white">+94 70 358 4172</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/70">
                                <i className="fas fa-envelope w-4 text-center text-primary-gold"></i>
                                <a href="mailto:navodasobaruu@gmail.com" className="hover:text-primary-gold transition-colors hover:text-white">navodasobaruu@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-white/70">
                                <i className="fas fa-clock w-4 text-center text-primary-gold"></i>
                                <span>Mon - Sun: 7:00 AM - 5:00 PM</span>
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 flex-wrap">
                            {SOCIAL_LINKS.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-gold text-white transition-all duration-300 hover:transform hover:-translate-y-1"
                                >
                                    <i className={link.icon} style={{ fontSize: '14px' }}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center">
                    <p className="text-sm text-white/60">&copy; {currentYear} Navodaa. All rights reserved. Designed with passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
