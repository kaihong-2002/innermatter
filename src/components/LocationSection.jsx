import React from 'react';
import { getAssetPath } from '../utils/assets';

const LocationSection = () => {
    return (
        <section className="location-section">
            <div style={{ maxWidth: '1440px', margin: '0 auto 40px', padding: '0 24px' }}>
                <h2 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: 'var(--color-midnight-black)'
                }}>Locations</h2>
            </div>

            <div className="location-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Xinyi Flagship</h2>
                    <div style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '1.125rem' }}>No. 123, Songshou Rd, Xinyi District</p>
                        <p style={{ color: '#666' }}>Taipei City, Taiwan 110</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-parakeet-green)' }}></div>
                        <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>OPEN NOW</span>
                        <span style={{ color: '#666', fontSize: '0.875rem' }}>• Live Wait: 15min</span>
                    </div>

                    <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
                        <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#666', marginBottom: '8px' }}>Now Playing</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#333' }}></div>
                            <div>
                                <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>Midnight City</p>
                                <p style={{ fontSize: '0.75rem' }}>M83</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1, minWidth: '300px', height: '400px', position: 'relative' }}>
                    {/* Digital Twin Placeholder */}
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                        <img src={getAssetPath('/assets/store_tokyo.png')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Innermatter Tokyo Flagship" />
                    </div>
                    <div style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)', letterSpacing: '0.1em' }}>3D DIGITAL TWIN</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
