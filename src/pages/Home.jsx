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
    // Lifted state for Series Accordion control
    const [activeSeriesId, setActiveSeriesId] = React.useState(null);

    // Instant Hash Navigation
    // Since data loading is now instant (mock service), layout is stable immediately.
    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.substring(1);
            const element = document.getElementById(targetId);

            if (element) {
                // ... existing scroll logic ...
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
            <ProductIntro onSeriesSelect={setActiveSeriesId} />
            <SeriesAccordion activeSeriesId={activeSeriesId} />
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
