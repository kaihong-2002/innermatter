import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div className="page-contact" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
            <Navbar />

            <div style={{ padding: '160px 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '4rem',
                    marginBottom: '80px',
                    textAlign: 'center',
                    color: 'var(--color-midnight-black)'
                }}>Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>

                    {/* Left Column: Form */}
                    <div style={{ flex: 1 }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>NAME</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        border: '1px solid #e0e0e0',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-body)',
                                        backgroundColor: '#f9f9f9',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>EMAIL</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        border: '1px solid #e0e0e0',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-body)',
                                        backgroundColor: '#f9f9f9',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>MESSAGE</label>
                                <textarea
                                    rows="6"
                                    placeholder="How can we help?"
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        border: '1px solid #e0e0e0',
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-body)',
                                        backgroundColor: '#f9f9f9',
                                        resize: 'none',
                                        outline: 'none'
                                    }}
                                ></textarea>
                            </div>

                            <button type="submit" style={{
                                alignSelf: 'flex-start',
                                padding: '16px 40px',
                                backgroundColor: 'var(--color-midnight-black)',
                                color: 'white',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                letterSpacing: '0.1em',
                                marginTop: '16px',
                                transition: 'background-color 0.3s'
                            }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info */}
                    <div style={{ flex: 0.8, paddingTop: '10px' }}>
                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px' }}>General Inquiries</h3>
                            <p style={{ fontFamily: 'var(--font-body)', color: '#666', lineHeight: '1.8' }}>
                                For general questions about our products, philosophy, or events, please reach out to us directly via email.
                            </p>
                            <a href="mailto:innermatter@gmail.com" style={{
                                display: 'inline-block',
                                marginTop: '16px',
                                color: 'var(--color-parakeet-green)',
                                fontWeight: 700,
                                fontSize: '1.125rem',
                                textDecoration: 'underline'
                            }}>
                                innermatter@gmail.com
                            </a>
                        </div>

                        <div style={{ borderTop: '1px solid #eee', paddingTop: '40px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '16px' }}>Visit Us</h3>
                            <p style={{ fontFamily: 'var(--font-body)', color: '#666', lineHeight: '1.8', marginBottom: '8px' }}>
                                <strong>Xinyi Flagship</strong><br />
                                No. 123, Songshou Rd, Xinyi District<br />
                                Taipei City, Taiwan 110
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
