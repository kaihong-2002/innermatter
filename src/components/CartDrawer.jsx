import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    const navigate = useNavigate();

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <>
            {/* Backdrop */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 9998,
                    backdropFilter: 'blur(2px)'
                }}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '450px',
                backgroundColor: 'white',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                animation: 'slideIn 0.3s ease-out'
            }}>
                {/* Header */}
                <div style={{
                    padding: '24px',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', margin: 0 }}>CART</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        style={{ fontSize: '1.5rem', padding: '8px', cursor: 'pointer' }}
                    >
                        ×
                    </button>
                </div>

                {/* Items */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {cartItems.length === 0 ? (
                        <div style={{ textAlign: 'center', marginTop: '40px', color: '#888' }}>
                            Your cart is empty.
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {cartItems.map(({ product, quantity }) => (
                                <div key={product.slug} style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ width: '80px', height: '100px', backgroundColor: '#f5f5f5' }}>
                                        <img
                                            src={product.image}
                                            alt={product.name_en}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{product.name_en}</h3>
                                            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>NT$ {product.price * quantity}</span>
                                        </div>
                                        <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '12px' }}>{product.name_tc}</p>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px'
                                            }}>
                                                <button
                                                    onClick={() => updateQuantity(product.slug, quantity - 1)}
                                                    style={{ padding: '4px 12px', color: '#666' }}
                                                >-</button>
                                                <span style={{ fontSize: '0.875rem', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(product.slug, quantity + 1)}
                                                    style={{ padding: '4px 12px', color: '#666' }}
                                                >+</button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(product.product?.slug || product.slug)}
                                                style={{ fontSize: '0.75rem', color: '#999', textDecoration: 'underline' }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div style={{
                        padding: '24px',
                        borderTop: '1px solid #eee',
                        backgroundColor: '#fafafa'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontFamily: 'var(--font-heading)', fontSize: '1.125rem', fontWeight: 700 }}>
                            <span>SUBTOTAL</span>
                            <span>NT$ {cartTotal}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            style={{
                                width: '100%',
                                padding: '16px',
                                backgroundColor: 'var(--color-midnight-black)',
                                color: 'white',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
            <style>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </>
    );
};

export default CartDrawer;
