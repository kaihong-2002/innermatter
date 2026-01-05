import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state || {}; // Expecting order data passed via state

    useEffect(() => {
        if (!order) {
            navigate('/'); // Redirect to home if accessed directly without data
        }
    }, [order, navigate]);

    if (!order) return null;

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <div className="container" style={{ flex: 1, maxWidth: '800px', margin: '0 auto', padding: '140px 24px 80px', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px' }}>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-parakeet-green)',
                        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '16px' }}>
                        THANK YOU!
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#666' }}>
                        Your order has been placed successfully.
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '8px' }}>
                        Order ID: <strong>{order.orderId}</strong>
                    </p>
                </div>

                <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '32px', textAlign: 'left', backgroundColor: '#fafafa', marginBottom: '40px' }}>
                    <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '16px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                        RECEIPT
                    </h3>

                    <div style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '4px' }}>Customer</p>
                        <p style={{ fontWeight: 700 }}>{order.customerEmail}</p>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '12px' }}>Items</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {order.items.map((item, index) => (
                                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #eee', paddingBottom: '8px' }}>
                                    <span>{item.name} <span style={{ color: '#888' }}>x{item.qty}</span></span>
                                    {/* Price per item isn't in simple payload but we have total. Just show list. */}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #ddd', paddingTop: '20px', fontSize: '1.25rem', fontWeight: 700 }}>
                        <span>TOTAL</span>
                        <span>NT$ {order.total}</span>
                    </div>
                </div>

                <Link
                    to="/"
                    style={{
                        display: 'inline-block',
                        padding: '16px 40px',
                        backgroundColor: 'var(--color-midnight-black)',
                        color: 'white',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        textDecoration: 'none'
                    }}
                >
                    Continue Shopping
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default OrderSuccess;
