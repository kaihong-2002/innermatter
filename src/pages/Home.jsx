import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SeriesAccordion from '../components/SeriesAccordion';
import ProductIntro from '../components/ProductIntro';
import ProductList from '../components/ProductList';
import EventTimeline from '../components/EventTimeline';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

import VogueCarousel from '../components/VogueCarousel';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    // Instant Hash Navigation
    // Since data loading is now instant (mock service), layout is stable immediately.
    useEffect(() => {
        // Handle Hash (legacy/direct link) OR State (from internal navigation)
        const targetId = location.state?.scrollTo || (location.hash ? location.hash.substring(1) : null);

        if (targetId) {
            const element = document.getElementById(targetId);

            if (element) {
                // ... existing scroll logic ...
                const performScroll = () => {
                    const elementHeight = element.offsetHeight;
                    const windowHeight = window.innerHeight;
                    const navbarHeight = window.innerWidth < 768 ? 60 : 80;
                    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;

                    let y;
                    if (elementHeight < windowHeight) {
                        y = elementTop - (windowHeight - elementHeight) / 2.5;
                    } else {
                        y = elementTop - navbarHeight;
                    }

                    window.scrollTo({ top: y, behavior: 'smooth' });
                };

                // Execute immediately and after a short render tick
                performScroll();
                setTimeout(performScroll, 100);
            }
        }
    }, [location]);

    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <VogueCarousel />
            <div id="philosophy" style={{ scrollMarginTop: '100px' }}>
                <ProductIntro />
            </div>
            <SeriesAccordion />
            <ProductList />
            <div id="locations" style={{ background: '#3B3430', scrollMarginTop: '100px' }}>
                <LocationSection />
            </div>
            <EventTimeline />
            <Footer />
        </div>
    );
};

export default Home;
