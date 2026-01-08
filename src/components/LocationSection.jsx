import React from 'react';
import { getAssetPath } from '../utils/assets';
import '../styles/location.css';

const LocationSection = () => {
    return (
        <section className="location-section">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Editorial Layout: Image Left, Content Right (Asymmetrical) */}
                <div className="location-grid">

                    {/* Visual (Dominant) */}
                    <div style={{ position: 'relative' }} className="location-visual-height">
                        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                            <img src={getAssetPath('/assets/store_tokyo.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95)' }} alt="Innermatter Tokyo Flagship" />
                        </div>
                        {/* Minimal Label */}
                        <div style={{
                            position: 'absolute',
                            bottom: '32px',
                            left: '-20px',
                            background: 'var(--color-parakeet-green)',
                            color: '#fff',
                            padding: '16px 32px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.8rem' }}>FLAGSHIP STORE</span>
                        </div>
                    </div>

                    {/* Editorial Content */}
                    <div style={{ paddingLeft: '20px' }}>
                        <span style={{ display: 'block', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#aaa', marginBottom: '24px', textTransform: 'uppercase' }}>Destination</span>
                        <h2 className="location-title">
                            Xinyi <br /> Sanctuary.
                        </h2>

                        <div style={{ width: '40px', height: '1px', background: '#555', marginBottom: '32px' }}></div>

                        <p className="location-description" style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '40px', maxWidth: '400px' }}>
                            An oasis of calm in the heart of the city.
                            Designed for clarity, restoration, and the mindful consumption of essential nutrients.
                        </p>

                        <div style={{ marginBottom: '40px' }}>
                            <p style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', marginBottom: '8px', color: '#fff' }}>No. 123, Songshou Rd</p>
                            <p style={{ color: '#999', fontStyle: 'italic' }}>Taipei City, Taiwan</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-parakeet-green)' }}></div>
                            <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>Open Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
