
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" role="main">
                <Hero />
                <Brands />
                <About />
                <Contact />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
};

export default App;
