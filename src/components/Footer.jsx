import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-midnight-black)', color: 'var(--color-clinical-white)', padding: '80px 0 40px' }}>
            <div className="container" style={{ maxWidth: '1440px', padding: '0 24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.05em' }}>INNERMATTER</h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: '1.8', opacity: 0.7, maxWidth: '250px' }}>
                            Refining the urban pulse. The ultimate health lifestyle for the modern achiever.
                        </p>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.1em' }}>Shop</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {['Reset Power', 'Urban Light', 'Daily Balance', 'Complete Reset'].map(item => (
                                <a key={item} href="/#shop" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.1em' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {['FAQ', 'Shipping & Returns', 'Privacy Policy'].map(item => (
                                <a key={item} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}>
                                    {item}
                                </a>
                            ))}
                            <a href="/contact" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                                onMouseEnter={(e) => e.target.style.opacity = '1'}
                                onMouseLeave={(e) => e.target.style.opacity = '0.7'}>
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.1em' }}>Newsletter</h4>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', opacity: 0.7, marginBottom: '24px' }}>
                            Join the inner circle. Receive updates on new drops and community events.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: 'white',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body)'
                                }}
                            />
                            <button style={{
                                padding: '12px 24px',
                                backgroundColor: 'var(--color-parakeet-green)',
                                color: 'white',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                letterSpacing: '0.05em'
                            }}>
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.5 }}>© 2026 Innermatter. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ fontSize: '0.75rem', opacity: 0.5 }}>Instagram</a>
                        <a href="#" style={{ fontSize: '0.75rem', opacity: 0.5 }}>Facebook</a>
                        <a href="#" style={{ fontSize: '0.75rem', opacity: 0.5 }}>Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
