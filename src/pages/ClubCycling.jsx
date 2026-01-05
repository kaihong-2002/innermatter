import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAssetPath } from '../utils/assets';

const ClubCycling = () => {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <div style={{ height: '70vh', position: 'relative', overflow: 'hidden' }}>
                    <img
                        src={getAssetPath('/assets/club_biking.png')}
                        alt="Cycling Club"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        width: '100%',
                        padding: '0 24px'
                    }}>
                        <h1 style={{
                            color: '#fff',
                            fontSize: '4rem',
                            fontFamily: '"Didot", serif',
                            fontWeight: 400,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '16px'
                        }}>Cycling Club</h1>
                        <p style={{
                            color: '#f0f0f0',
                            fontSize: '1.5rem',
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em'
                        }}>Weekend Ride // Riverside</p>
                    </div>
                </div>

                <div style={{ maxWidth: '800px', margin: '80px auto', padding: '0 24px', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '40px',
                        fontFamily: '"Didot", serif',
                        fontStyle: 'italic',
                        color: '#333'
                    }}>“Pedal towards balance.”</h2>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#555',
                        marginBottom: '40px',
                        textAlign: 'justify',
                        textAlignLast: 'center'
                    }}>
                        週末的清晨，是屬於公路的。InnerMatter Cycling Club 帶你遠離塵囂，往風吹來的方向前進。
                        我們定期舉辦中長距離的騎行活動，不論是風櫃嘴的挑戰，還是淡水的休閒騎乘。
                        在踩踏之間，找回身體的節奏與心靈的平靜。Urban Light 是我們隨身的補給，保持輕盈，騎得更遠。
                    </p>

                    {/* Info Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1px',
                        backgroundColor: '#eee',
                        border: '1px solid #eee',
                        marginBottom: '60px'
                    }}>
                        <div style={{ backgroundColor: '#fff', padding: '40px 24px', transition: 'background 0.3s', cursor: 'pointer' }} className="grid-cell">
                            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '12px', letterSpacing: '0.1em' }}>Time & Schedule</h3>
                            <p style={{ fontSize: '1.4rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>Sat or Sun<br />06:30 Start</p>
                            <span style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.8rem', textDecoration: 'underline', color: 'var(--color-parakeet-green)' }}>Add to Calendar</span>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '40px 24px', transition: 'background 0.3s', cursor: 'pointer' }} className="grid-cell">
                            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '12px', letterSpacing: '0.1em' }}>Meeting Point</h3>
                            <p style={{ fontSize: '1.4rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>Taipei Fine Arts Museum</p>
                            <span style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.8rem', textDecoration: 'underline', color: 'var(--color-parakeet-green)' }}>View Map</span>
                        </div>
                    </div>

                    <a href="/#health-club" style={{
                        display: 'inline-block',
                        padding: '16px 40px',
                        border: '1px solid #ddd',
                        backgroundColor: 'transparent',
                        color: '#333',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s'
                    }}
                        onMouseEnter={(e) => { e.target.style.borderColor = '#000'; e.target.style.color = '#000'; }}
                        onMouseLeave={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.color = '#333'; }}
                    >
                        ← Back to Health Club
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClubCycling;
