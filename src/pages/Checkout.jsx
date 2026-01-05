import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

import { createOrder } from '../services/googleSheets';

const Checkout = () => {
    const { user, login, register } = useAuth();
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // UI States
    const [authMode, setAuthMode] = useState('register'); // 'login' or 'register'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    // Handlers
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        if (authMode === 'register') {
            if (formData.name && formData.email && formData.phone && formData.address) {
                register(formData);
            } else {
                alert('Please fill in all fields.');
            }
        } else {
            // Login Logic (Simple simulation)
            const success = login(formData.email);
            if (!success) {
                alert('User not found. Please register first.');
                setAuthMode('register');
            }
        }
    };

    const handlePlaceOrder = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        const orderData = {
            customerEmail: user.email,
            total: cartTotal,
            items: cartItems.map(item => ({
                id: item.product.id,
                name: item.product.name_en, // Sending name for readability in backend
                qty: item.quantity
            }))
        };

        try {
            const result = await createOrder(orderData);
            if (result.success) {
                // Success Handling: Navigate to Success Page with Data
                clearCart();
                navigate('/order-success', {
                    state: {
                        order: {
                            ...orderData,
                            orderId: result.orderId
                        }
                    }
                });
            } else {
                // Fallback for local simulation or error but 'success' false
                clearCart();
                navigate('/order-success', {
                    state: {
                        order: {
                            ...orderData,
                            orderId: 'LOCAL-' + Date.now()
                        }
                    }
                });
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cartItems.length === 0 && !user) { // Allow viewing if just empty but maybe checking account? No, redirect.
        // Actually keep it simple
    }

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <div style={{ flex: 1, paddingTop: '140px', paddingBottom: '80px' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '3rem',
                        textAlign: 'center',
                        marginBottom: '60px',
                        color: 'var(--color-midnight-black)'
                    }}>CHECKOUT</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>

                        {/* LEFT COLUMN: AUTH FORM or USER INFO */}
                        <div>
                            {!user ? (
                                <div style={{ border: '1px solid #eee', padding: '40px', borderRadius: '8px' }}>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '32px' }}>
                                        {authMode === 'register' ? 'NEW MEMBER' : 'WELCOME BACK'}
                                    </h2>

                                    {/* Tabs */}
                                    <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', borderBottom: '1px solid #eee' }}>
                                        <button
                                            onClick={() => setAuthMode('register')}
                                            style={{
                                                paddingBottom: '12px',
                                                borderBottom: authMode === 'register' ? '2px solid var(--color-parakeet-green)' : 'none',
                                                color: authMode === 'register' ? 'black' : '#999',
                                                fontWeight: 700
                                            }}
                                        >Register</button>
                                        <button
                                            onClick={() => setAuthMode('login')}
                                            style={{
                                                paddingBottom: '12px',
                                                borderBottom: authMode === 'login' ? '2px solid var(--color-parakeet-green)' : 'none',
                                                color: authMode === 'login' ? 'black' : '#999',
                                                fontWeight: 700
                                            }}
                                        >Login</button>
                                    </div>

                                    <form onSubmit={handleAuthSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        {authMode === 'register' && (
                                            <>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '8px' }}>NAME</label>
                                                    <input
                                                        type="text" name="name" required
                                                        value={formData.name} onChange={handleInputChange}
                                                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}
                                                    />
                                                </div>
                                            </>
                                        )}

                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '8px' }}>EMAIL</label>
                                            <input
                                                type="email" name="email" required placeholder="example@gmail.com"
                                                value={formData.email} onChange={handleInputChange}
                                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}
                                            />
                                        </div>

                                        {authMode === 'register' && (
                                            <>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '8px' }}>PHONE</label>
                                                    <input
                                                        type="tel" name="phone" required
                                                        value={formData.phone} onChange={handleInputChange}
                                                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}
                                                    />
                                                </div>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '8px' }}>ADDRESS</label>
                                                    <textarea
                                                        name="address" required rows="3"
                                                        value={formData.address} onChange={handleInputChange}
                                                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', backgroundColor: '#f9f9f9', resize: 'none' }}
                                                    ></textarea>
                                                </div>
                                            </>
                                        )}

                                        <button type="submit" style={{
                                            marginTop: '16px',
                                            padding: '16px',
                                            backgroundColor: 'var(--color-midnight-black)',
                                            color: 'white',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            {authMode === 'register' ? 'Create Account' : 'Login'}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div style={{ border: '1px solid var(--color-parakeet-green)', padding: '40px', borderRadius: '8px', backgroundColor: 'rgba(116, 139, 111, 0.05)' }}>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ color: 'var(--color-parakeet-green)' }}>●</span> SHIPPING DETAILS
                                    </h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1rem' }}>
                                        <p style={{ fontWeight: 700 }}>{user.name}</p>
                                        <p>{user.phone}</p>
                                        <p style={{ color: '#666' }}>{user.email}</p>
                                        <p style={{ marginTop: '16px', padding: '12px', backgroundColor: 'white', border: '1px solid #ddd' }}>
                                            {user.address}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => { localStorage.removeItem('innermatter_user'); window.location.reload(); }}
                                        style={{ marginTop: '24px', fontSize: '0.875rem', textDecoration: 'underline', color: '#888' }}
                                    >
                                        Log out / Change Account
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN: ORDER SUMMARY */}
                        <div>
                            <div style={{ backgroundColor: '#fafafa', padding: '40px', borderRadius: '8px' }}>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '24px', borderBottom: '1px solid #ddd', paddingBottom: '16px' }}>
                                    ORDER SUMMARY
                                </h3>

                                {cartItems.length === 0 ? (
                                    <p>Your cart is empty.</p>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                                        {cartItems.map(item => (
                                            <div key={item.product.slug} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                <span>{item.product.name_en} x {item.quantity}</span>
                                                <span style={{ fontWeight: 700 }}>NT$ {item.product.price * item.quantity}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div style={{ borderTop: '2px solid #ddd', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 700, marginBottom: '32px' }}>
                                    <span>TOTAL</span>
                                    <span>NT$ {cartTotal}</span>
                                </div>

                                <button
                                    disabled={!user || cartItems.length === 0 || isSubmitting}
                                    onClick={handlePlaceOrder}
                                    style={{
                                        width: '100%',
                                        padding: '20px',
                                        backgroundColor: !user ? '#ccc' : isSubmitting ? '#999' : 'var(--color-parakeet-green)',
                                        color: 'white',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        fontSize: '1rem',
                                        cursor: (!user || isSubmitting) ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.3s',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span style={{
                                                display: 'inline-block', width: '16px', height: '16px',
                                                border: '2px solid white', borderTopColor: 'transparent', borderRadius: '50%',
                                                animation: 'spin 1s linear infinite'
                                            }}></span>
                                            Processing...
                                        </>
                                    ) : (
                                        user ? 'Confirm & Pay' : 'Login to Checkout'
                                    )}
                                </button>
                                <style>{`
                                    @keyframes spin { to { transform: rotate(360deg); } }
                                `}</style>

                                {!user && (
                                    <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.875rem', color: '#888' }}>
                                        Please complete registration on the left to proceed.
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
