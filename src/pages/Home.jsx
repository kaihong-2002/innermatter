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
        if (location.hash) {
            const targetId = location.hash.substring(1);
            const element = document.getElementById(targetId);

            if (element) {
                // Use scrollIntoView with 'auto' for initial mount to be instant,
                // or 'smooth' if user prefers. User asked for "seamless" without obstacles.
                // Usually 'auto' on mount is best to just BE there.
                // But navigating from another page, smooth might be nice?
                // Actually, browsers usually jump instantly on cross-page.
                // Let's try 'smooth' for elegance, or 'auto' for speed.
                // Manual offset calculation for absolute precision
                // This avoids reliance on CSS scroll-margin-top which can be flaky
                const performScroll = () => {
                    const yOffset = -100; // Exact height of Navbar + buffer
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'auto' });
                };

                // Execute immediately and after a short render tick
                performScroll();
                setTimeout(performScroll, 50);
                setTimeout(performScroll, 200); // Final verification snap
            }
        }
    }, [location]);

    return (
        <div className="home-page">
            <Navbar />
            <Hero />
            <VogueCarousel />
            <ProductIntro />
            <SeriesAccordion />
            <ProductList />
            <div id="locations" style={{ padding: '64px 0', background: '#f5f5f5', scrollMarginTop: '100px' }}>
                <LocationSection />
            </div>
            <EventTimeline />
            <Footer />
        </div>
    );
};

export default Home;
