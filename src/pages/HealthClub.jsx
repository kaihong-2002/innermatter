import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ClubCard = ({ title, description, imageSrc }) => (
    <div style={{ flex: 1, minWidth: '300px', border: '1px solid #eee', padding: '0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
            <img
                src={imageSrc}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            />
        </div>
        <div style={{ padding: '32px', backgroundColor: 'var(--color-clinical-white)', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '16px', color: 'var(--color-midnight-black)' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', marginBottom: '24px', color: '#666', lineHeight: '1.6' }}>{description}</p>
            </div>
            <button style={{
                padding: '12px 24px',
                border: '1px solid var(--color-midnight-black)',
                textTransform: 'uppercase',
                fontWeight: 700,
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                alignSelf: 'flex-start'
            }}>Join Club</button>
        </div>
    </div>
);

const HealthClub = () => {
    return (
        <div className="page-health-club">
            <Navbar />
            <div style={{ backgroundColor: 'var(--color-parakeet-green)', color: 'white', padding: '160px 20px 80px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '4rem', fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Health Club</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto', fontFamily: 'var(--font-body)' }}>
                    More than a gym. A community of like-minded individuals redefined by sweat and discipline.
                </p>
            </div>

            <div className="container" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    <ClubCard
                        title="Running Club"
                        description="Tuesday mornings at 7 AM. We own the city streets before the world wakes up. 5K/10K pacing groups available."
                        imageSrc="/assets/club_running.png"
                    />
                    <ClubCard
                        title="Biking Club"
                        description="Weekend escapades to the mountains. High-intensity climbs followed by recovery sessions at the flagship store."
                        imageSrc="/assets/club_biking.png"
                    />
                    <ClubCard
                        title="Gym Club"
                        description="Functional strength and mobility. Expert-led workshops on lifting form and injury prevention."
                        imageSrc="/assets/club_gym.png"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HealthClub;
