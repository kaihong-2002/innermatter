import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { fetchOrders } from '../services/googleSheets';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/checkout'); // Redirect to login if not authenticated
            return;
        }

        const loadHistory = async () => {
            setLoading(true);
            const data = await fetchOrders(user.email);
            setOrders(data);
            setLoading(false);
        };

        loadHistory();
    }, [user, navigate]);

    if (!user) return null;

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <div className="container" style={{ flex: 1, maxWidth: '1000px', margin: '0 auto', padding: '140px 24px 80px' }}>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    marginBottom: '40px',
                    color: 'var(--color-midnight-black)'
                }}>
                    ORDER HISTORY
                </h1>

                <p style={{ marginBottom: '40px' }}>Logged in as: <strong>{user.email}</strong></p>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
                        Loading purchase history...
                    </div>
                ) : orders.length === 0 ? (
                    <div style={{ padding: '40px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}>
                        <p>No orders found (or connection failed).</p>

                        {/* Debugging Link */}
                        <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#999', padding: '10px', background: '#f5f5f5' }}>
                            <p>Debugging: Check if data exists directly</p>
                            <a
                                href={`${import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL}?action=getOrders&email=${encodeURIComponent(user.email)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'blue', textDecoration: 'underline' }}
                            >
                                Open Raw Data in New Tab
                            </a>
                            <p style={{ marginTop: '5px', fontSize: '0.7rem' }}>
                                (If this opens a Google Login page, your deployment settings are wrong.)
                            </p>
                        </div>

                        <button
                            onClick={() => navigate('/')}
                            style={{
                                marginTop: '16px',
                                background: 'transparent',
                                borderBottom: '1px solid black',
                                fontWeight: 700
                            }}
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {orders.map((order, index) => (
                            <div key={index} style={{
                                border: '1px solid #eee',
                                padding: '24px',
                                borderRadius: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                backgroundColor: '#fafafa'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', paddingBottom: '12px' }}>
                                    <span style={{ fontWeight: 700 }}>#{order.orderId}</span>
                                    <span style={{
                                        color: order.status === 'Completed' ? 'green' :
                                            order.status === 'Pending' ? 'orange' : 'black'
                                    }}>
                                        {order.status}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '4px' }}>Items:</p>
                                        <p style={{ fontWeight: 500 }}>{order.products}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '4px' }}>Total:</p>
                                        <p style={{ fontWeight: 700, fontSize: '1.2rem' }}>NT$ {order.total}</p>
                                    </div>
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '8px' }}>
                                    Date: {new Date(order.date).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default OrderHistory;
