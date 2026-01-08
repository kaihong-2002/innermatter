import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAssetPath } from '../utils/assets';
import '../styles/health-club-mobile.css';

const ClubCard = ({ title, description, imageSrc }) => (
    <div className="club-card">
        <div className="card-image-wrapper">
            <img
                src={imageSrc}
                alt={title}
                className="card-image"
            />
        </div>
        <div className="card-content">
            <div>
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
            </div>
            <button className="btn-join">Join Club</button>
        </div>
    </div>
);

const HealthClub = () => {
    return (
        <div className="page-health-club">
            <style>{`
                /* Inlined Mobile Styles to bypass cache */
                @media (max-width: 768px) {
                    .page-health-club .club-hero {
                        padding: 100px 20px 60px !important;
                    }
                    .page-health-club .club-hero h1 {
                        font-size: 2.5rem !important;
                    }
                    .page-health-club .club-container {
                        padding: 40px 0 !important;
                        overflow: hidden !important;
                    }
                    .page-health-club .club-grid {
                        display: flex !important;
                        flex-direction: row !important;
                        flex-wrap: nowrap !important;
                        overflow-x: auto !important;
                        scroll-snap-type: x mandatory !important;
                        gap: 16px !important;
                        padding: 0 20px 20px 20px !important;
                        -webkit-overflow-scrolling: touch !important;
                    }
                    .page-health-club .club-card {
                        min-width: 85vw !important;
                        width: 85vw !important;
                        flex: none !important;
                        scroll-snap-align: center !important;
                    }
                }
            `}</style>
            <Navbar />
            <div className="club-hero">
                <h1 style={{ fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>Health Club</h1>
                <p style={{ fontFamily: '"Noto Sans TC", sans-serif', maxWidth: '800px', margin: '0 auto', lineHeight: '2', fontSize: '1.1rem', color: '#555' }}>
                    <strong style={{ display: 'block', fontSize: '1.4rem', marginBottom: '16px', color: '#2c2c2c', fontWeight: 500 }}>打造健康理想生活。</strong>
                    InnerMatter 深知都會靈魂對健康的渴望，因此我們策劃了一系列專屬活動——從晨間跑團到週末騎行及健身聚會。<br />
                    透過汗水與連結，讓健康不再只是口號，而是你每天實踐的理想生活風格。
                </p>
            </div>

            <div className="club-container">
                <div className="club-grid">
                    <ClubCard
                        title="Running Club"
                        description="Tuesday mornings at 7 AM. We own the city streets before the world wakes up. 5K/10K pacing groups available."
                        imageSrc={getAssetPath('/assets/club_running.png')}
                    />
                    <ClubCard
                        title="Biking Club"
                        description="Weekend escapades to the mountains. High-intensity climbs followed by recovery sessions at the flagship store."
                        imageSrc={getAssetPath('/assets/club_biking.png')}
                    />
                    <ClubCard
                        title="Gym Club"
                        description="Functional strength and mobility. Expert-led workshops on lifting form and injury prevention."
                        imageSrc={getAssetPath('/assets/club_gym.png')}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HealthClub;

