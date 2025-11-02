import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const ContactInfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-gold text-white text-xl">
            <i className={icon}></i>
        </div>
        <div className="flex-1">
            <h4 className="font-primary text-xl font-semibold text-text-primary mb-1">{title}</h4>
            <div className="text-text-secondary">{children}</div>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-primary-gold font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
                    <h2 className="font-primary text-3xl sm:text-4xl lg:text-5xl font-medium text-text-primary mt-4 leading-tight">We'd Love to Hear From You</h2>
                    <p className="text-text-secondary text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about our brands, services, or just want to say hello, feel free to reach out.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-8">
                        <ContactInfoItem icon="fas fa-map-marker-alt" title="Location">
                            <p className="leading-relaxed">Gampaha, Western Province, Sri Lanka</p>
                        </ContactInfoItem>
                        <ContactInfoItem icon="fas fa-phone" title="Phone">
                            <a href="tel:+94703584172" className="hover:text-primary-gold transition-colors duration-300">+94 70 358 4172</a>
                        </ContactInfoItem>
                        <ContactInfoItem icon="fas fa-envelope" title="Email">
                            <a href="mailto:navodasobaruu@gmail.com" className="hover:text-primary-gold transition-colors duration-300 break-all">navodasobaruu@gmail.com</a>
                        </ContactInfoItem>
                    </div>
                    <div className="lg:pl-4">
                        <h3 className="font-primary text-2xl font-semibold mb-4 text-text-primary">Follow Us</h3>
                        <p className="text-text-secondary mb-6 leading-relaxed">Stay connected with us through our social channels for the latest updates and offers.</p>
                        <div className="flex items-center gap-4 flex-wrap">
                            {SOCIAL_LINKS.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-gold text-white text-xl shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;