import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import { getAssetPath } from '../utils/assets';

const EventTimeline = () => {
    const navigate = useNavigate();

    return (
        <section className="section" id="health-club" style={{ backgroundColor: '#fff', paddingBottom: '120px', paddingTop: '100px' }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto 60px', padding: '0 24px', textAlign: 'center' }}>
                <h2 style={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: '3rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#1a1a1a',
                    marginBottom: '24px'
                }}>Health Club</h2>

                <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                    <h3 style={{
                        fontFamily: '"Noto Serif TC", serif',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#2c2c2c',
                        marginBottom: '20px',
                        letterSpacing: '0.05em'
                    }}>
                        打造健康理想生活。
                    </h3>
                    <p style={{
                        fontFamily: '"Noto Sans TC", sans-serif',
                        fontSize: '1.05rem',
                        lineHeight: '1.9',
                        color: '#555',
                        textAlign: 'justify',
                        textAlignLast: 'center'
                    }}>
                        InnerMatter 深知都會靈魂對健康的渴望，因此我們策劃了一系列專屬活動——從晨間跑團到週末騎行及健身聚會。<br />
                        <span style={{ display: 'block', marginTop: '12px' }}>透過汗水與連結，讓健康不再只是口號，而是你每天實踐的理想生活風格。</span>
                    </p>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '1200px', padding: '0 24px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Running Club */}
                    <div
                        className="club-card"
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                        onClick={() => navigate('/club-running')}
                    >
                        <div style={{ overflow: 'hidden', marginBottom: '24px', border: '1px solid #eee' }}>
                            <img
                                src={getAssetPath('/assets/club_running.png')}
                                alt="Running Club"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '8px' }}>Running Club</h3>
                        <p style={{ color: '#888', fontFamily: 'var(--font-body)' }}>Urban Night Run // Taipei</p>
                        <span style={{
                            display: 'inline-block',
                            marginTop: '16px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            borderBottom: '1px solid currentColor',
                            paddingBottom: '2px'
                        }}>
                            Explore Club →
                        </span>
                    </div>

                    {/* Cycling Club */}
                    <div
                        className="club-card"
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                        onClick={() => navigate('/club-cycling')}
                    >
                        <div style={{ overflow: 'hidden', marginBottom: '24px', border: '1px solid #eee' }}>
                            <img
                                src={getAssetPath('/assets/club_biking.png')}
                                alt="Cycling Club"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '8px' }}>Cycling Club</h3>
                        <p style={{ color: '#888', fontFamily: 'var(--font-body)' }}>Weekend Ride // Riverside</p>
                        <span style={{
                            display: 'inline-block',
                            marginTop: '16px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            borderBottom: '1px solid currentColor',
                            paddingBottom: '2px'
                        }}>
                            Explore Club →
                        </span>
                    </div>

                    {/* Training Club */}
                    <div
                        className="club-card"
                        style={{ cursor: 'pointer', textAlign: 'center' }}
                        onClick={() => navigate('/club-training')}
                    >
                        <div style={{ overflow: 'hidden', marginBottom: '24px', border: '1px solid #eee' }}>
                            <img
                                src={getAssetPath('/assets/club_gym.png')}
                                alt="Training Club"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '8px' }}>Training Club</h3>
                        <p style={{ color: '#888', fontFamily: 'var(--font-body)' }}>Strength & Conditioning</p>
                        <span style={{
                            display: 'inline-block',
                            marginTop: '16px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            borderBottom: '1px solid currentColor',
                            paddingBottom: '2px'
                        }}>
                            Explore Club →
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventTimeline;
