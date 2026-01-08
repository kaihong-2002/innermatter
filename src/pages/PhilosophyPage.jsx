import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductIntro from '../components/ProductIntro';
import Footer from '../components/Footer';

const PhilosophyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="philosophy-page">
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <ProductIntro forceExpanded={true} />
            </div>
            <Footer />
        </div>
    );
};

export default PhilosophyPage;
