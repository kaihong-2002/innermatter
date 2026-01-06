import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAssetPath } from '../utils/assets';
import '../styles/health-club.css';

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
            <Navbar />
            <div className="club-hero">
                <h1>Health Club</h1>
                <p>
                    More than a gym. A community of like-minded individuals redefined by sweat and discipline.
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

