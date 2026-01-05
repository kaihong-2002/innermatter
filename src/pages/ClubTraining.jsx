import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ClubTraining = () => {
    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <div style={{ height: '70vh', position: 'relative', overflow: 'hidden' }}>
                    <img
                        src="/assets/club_gym.png"
                        alt="Training Club"
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
                        }}>Training Club</h1>
                        <p style={{
                            color: '#f0f0f0',
                            fontSize: '1.5rem',
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em'
                        }}>Strength & Conditioning // Lab</p>
                    </div>
                </div>

                <div style={{ maxWidth: '800px', margin: '80px auto', padding: '0 24px', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '40px',
                        fontFamily: '"Didot", serif',
                        fontStyle: 'italic',
                        color: '#333'
                    }}>“Craft your resilience.”</h2>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#555',
                        marginBottom: '40px',
                        textAlign: 'justify',
                        textAlignLast: 'center'
                    }}>
                        InnerMatter Lab 不只研發產品，也研發強壯的身體。
                        我們與頂尖教練合作，提供肌力與體能（S&C）的科學化訓練課程。
                        在這裡，每一次舉起都是對極限的挑戰，每一次落下都是對控制的掌握。
                        訓練前一杯 Focus Fuel 專注精神，訓練後 Reset Power 重塑肌肉。
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
                            <p style={{ fontSize: '1.4rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>Daily Sessions<br />By Appointment</p>
                            <span style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.8rem', textDecoration: 'underline', color: 'var(--color-parakeet-green)' }}>Book Class</span>
                        </div>
                        <div style={{ backgroundColor: '#fff', padding: '40px 24px', transition: 'background 0.3s', cursor: 'pointer' }} className="grid-cell">
                            <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: '#999', marginBottom: '12px', letterSpacing: '0.1em' }}>Meeting Point</h3>
                            <p style={{ fontSize: '1.4rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>IM Lab<br />Xinyi District</p>
                            <span style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.8rem', textDecoration: 'underline', color: 'var(--color-parakeet-green)' }}>Location Info</span>
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

export default ClubTraining;
