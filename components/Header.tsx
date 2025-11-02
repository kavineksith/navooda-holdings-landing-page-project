import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = NAV_LINKS.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
            let currentSection = 'home';
            
            sections.forEach(section => {
                if(section){
                    const sectionTop = section.offsetTop - 100;
                    if (window.scrollY >= sectionTop) {
                        currentSection = section.id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-soft-cream/95 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-3 text-decoration-none">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-gold p-2 animate-pulse">
                        <img src="./images/white-logo.png" alt="Navodaa Logo" className="rounded-full w-9 h-9" />
                    </div>
                    <span className="font-primary text-xl lg:text-2xl font-semibold text-text-primary">Navodaa</span>
                </a>

                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {NAV_LINKS.map((link: NavLink) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className={`font-semibold text-sm lg:text-base text-text-primary hover:text-primary-gold transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-gold after:transition-all after:duration-300 ${activeSection === link.href.substring(1) ? 'after:w-full text-primary-gold' : 'after:w-0'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button onClick={toggleMenu} className="md:hidden z-50 focus:outline-none p-2" aria-label="Toggle menu">
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`block w-full h-0.5 bg-text-primary transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-text-primary transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-full h-0.5 bg-text-primary transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-soft-cream/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
                    {NAV_LINKS.map((link: NavLink) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-text-primary hover:text-primary-gold transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;