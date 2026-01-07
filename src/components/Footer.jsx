import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-pure-black)', color: 'var(--color-clinical-white)', padding: '100px 0 40px' }}>
            <div className="container" style={{ maxWidth: '1440px', padding: '0 40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                    {/* Brand Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 400, letterSpacing: '0.1em', color: '#fff' }}>INNERMATTER</h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: '1.8', color: '#ccc', maxWidth: '250px' }}>
                            Refining the urban pulse. <br />Drink the discipline.
                        </p>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.15em', color: '#888' }}>Menu</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['Reset Power', 'Urban Light', 'Daily Balance', 'Complete Reset'].map(item => (
                                <a key={item} href="/#shop" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#bbb', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--color-parakeet-green)'}
                                    onMouseLeave={(e) => e.target.style.color = '#bbb'}>
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.15em', color: '#888' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {['FAQ', 'Shipping & Returns', 'Privacy Policy'].map(item => (
                                <a key={item} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#bbb', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--color-parakeet-green)'}
                                    onMouseLeave={(e) => e.target.style.color = '#bbb'}>
                                    {item}
                                </a>
                            ))}
                            <a href="/contact" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#bbb', transition: 'color 0.2s' }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--color-parakeet-green)'}
                                onMouseLeave={(e) => e.target.style.color = '#bbb'}>
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '0.15em', color: '#888' }}>Newsletter</h4>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#ccc', marginBottom: '24px' }}>
                            Join the inner circle.
                        </p>
                        <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #555', paddingBottom: '8px' }}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{
                                    flex: 1,
                                    padding: '8px 0',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <button style={{
                                padding: '0 12px',
                                backgroundColor: 'transparent',
                                color: 'var(--color-parakeet-green)',
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
                    borderTop: '1px solid #333',
                    paddingTop: '32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#666' }}>© 2026 Innermatter.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ fontSize: '0.75rem', color: '#666' }}>Instagram</a>
                        <a href="#" style={{ fontSize: '0.75rem', color: '#666' }}>Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
