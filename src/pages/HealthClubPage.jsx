import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import EventTimeline from '../components/EventTimeline';
import Footer from '../components/Footer';

const HealthClubPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="health-club-page">
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <EventTimeline forceExpanded={true} />
            </div>
            <Footer />
        </div>
    );
};

export default HealthClubPage;
