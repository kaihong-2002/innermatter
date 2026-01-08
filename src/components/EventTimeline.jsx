import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import '../styles/health-club-mobile.css';
import { getAssetPath } from '../utils/assets';

const EventTimeline = ({ forceExpanded = false }) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="section" id="health-club" style={{
            background: 'linear-gradient(to bottom, #F5F5F3 0%, #FFFFFF 100%)', // Subtle Stone Gradient
            paddingBottom: '120px',
            paddingTop: '100px',
            borderTop: '1px solid #E2DCD2' // Subtle separation line
        }}>
            <div style={{ maxWidth: '1440px', margin: '0 auto 60px', padding: '0 24px', textAlign: 'center' }}>
                <h2 className="section-title-mobile-override" style={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    background: '#748B6F', // Sage Green Block
                    display: 'inline-block',
                    padding: '12px 40px',
                    marginBottom: '32px',
                    boxShadow: '0 4px 12px rgba(116, 139, 111, 0.2)'
                }}>Health Club</h2>

                {/* Desktop Intro */}
                {!isMobile && (
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
                )}
            </div>

            {/* Mobile Teaser (Home Page Only) */}
            {isMobile && !forceExpanded && (
                <div
                    className="club-teaser"
                    style={{
                        textAlign: 'center',
                        padding: '0 24px 60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px'
                    }}
                >
                    <p style={{
                        fontFamily: '"Noto Serif TC", serif',
                        fontSize: '1.1rem',
                        color: '#444',
                        lineHeight: '1.8',
                        maxWidth: '280px'
                    }}>
                        打造健康理想生活。<br />
                        透過汗水與連結，讓健康不再只是口號，而是你每天實踐的理想生活風格。
                    </p>

                    <button
                        onClick={() => navigate('/health-club')}
                        style={{
                            background: '#748B6F',
                            color: '#fff',
                            border: 'none',
                            padding: '12px 32px',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(116, 139, 111, 0.3)'
                        }}
                    >
                        ENTER CLUB
                    </button>
                </div>
            )}

            {/* Club Cards Container (Desktop OR Mobile Page) */}
            {(!isMobile || forceExpanded) && (
                <div className="container" style={{ maxWidth: '1200px', padding: '0 24px', margin: '0 auto' }}>

                    {/* Intro Text for Mobile Page View */}
                    {isMobile && forceExpanded && (
                        <div style={{ maxWidth: '680px', margin: '0 auto 40px', textAlign: 'center' }}>
                            <p style={{
                                fontFamily: '"Noto Sans TC", sans-serif',
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                color: '#555'
                            }}>
                                InnerMatter 深知都會靈魂對健康的渴望，<br />因此我們策劃了一系列專屬活動。
                            </p>
                        </div>
                    )}

                    <div className={`club-card-container ${forceExpanded ? 'vertical-mobile' : ''}`}>

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

                    {/* Back Button for Page View */}
                    {forceExpanded && (
                        <div
                            onClick={() => navigate('/', { state: { scrollTo: 'health-club' } })}
                            style={{
                                textAlign: 'center',
                                marginTop: '60px',
                                cursor: 'pointer'
                            }}
                        >
                            <span style={{
                                display: 'inline-block',
                                padding: '12px 32px',
                                border: '1px solid #1a1a1a',
                                color: '#1a1a1a',
                                borderRadius: '30px',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                letterSpacing: '0.1em',
                                background: 'transparent',
                                transition: 'all 0.3s'
                            }}>
                                ← BACK TO HOME
                            </span>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
};

export default EventTimeline;
