import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 w-12 h-12 rounded-full bg-gradient-gold text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 z-50 ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            aria-label="Scroll to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTopButton;