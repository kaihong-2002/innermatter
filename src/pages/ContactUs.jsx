import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitContact } from '../services/googleSheets';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const result = await submitContact(formData);
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

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
                        {status === 'success' ? (
                            <div style={{ padding: '40px', backgroundColor: '#f4f9f4', borderLeft: '4px solid var(--color-parakeet-green)' }}>
                                <h3 style={{ margin: '0 0 16px', color: 'var(--color-parakeet-green)' }}>Message Sent!</h3>
                                <p>Thank you for reaching out. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    style={{ marginTop: '20px', textDecoration: 'underline', color: '#666', background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        disabled={status === 'submitting'}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            backgroundColor: '#f9f9f9',
                                            outline: 'none',
                                            opacity: status === 'submitting' ? 0.6 : 1
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        disabled={status === 'submitting'}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            backgroundColor: '#f9f9f9',
                                            outline: 'none',
                                            opacity: status === 'submitting' ? 0.6 : 1
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>MESSAGE</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        placeholder="How can we help?"
                                        required
                                        disabled={status === 'submitting'}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            border: '1px solid #e0e0e0',
                                            fontSize: '1rem',
                                            fontFamily: 'var(--font-body)',
                                            backgroundColor: '#f9f9f9',
                                            resize: 'none',
                                            outline: 'none',
                                            opacity: status === 'submitting' ? 0.6 : 1
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    style={{
                                        alignSelf: 'flex-start',
                                        padding: '16px 40px',
                                        backgroundColor: status === 'submitting' ? '#999' : 'var(--color-midnight-black)',
                                        color: 'white',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        fontSize: '0.875rem',
                                        letterSpacing: '0.1em',
                                        marginTop: '16px',
                                        transition: 'background-color 0.3s',
                                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'error' && (
                                    <p style={{ color: 'red', fontSize: '0.9rem' }}>Something went wrong. Please try again.</p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Right Column: Info */}
                    <div style={{ flex: 0.8, paddingTop: '10px' }}>
                        {/* ... keep existing info section ... */}
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
