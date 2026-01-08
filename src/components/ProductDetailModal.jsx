import React, { useEffect, useState } from 'react';
import { getAssetPath } from '../utils/assets';
import '../styles/global.css'; // Ensure variables are available if not globally

const ProductDetailModal = ({ product, isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            setIsVisible(false);
            document.body.style.overflow = 'unset';
            // Delay removing from DOM handled by parent or CSS animation matching timeout
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

    // Hardcoded Benefits/Ingredients based on Series/Product for prototype
    // Ideally this comes from the sheet/product object
    const getIngredients = (p) => {
        if (p.ingredients && p.ingredients.length > 0) return p.ingredients;
        if (p.series === 'Reset Power') return ['Hydrolyzed Pea Protein', 'Mixed Berry Extract', 'Tart Cherry', 'Vitamin C'];
        if (p.series === 'Urban Light') return ['Pea Protein Isolate', 'Cucumber Extract', 'Celery Powder', 'Lemon Zest', 'Spinach'];
        if (p.series === 'Daily Balance') return ['Raw Cacao Powder', 'Maca Root', 'Pea Protein', 'Monk Fruit', 'Himalayan Salt'];
        if (p.series === 'Focus Fuel') return ['Cold Brew Coffee Extract', 'MCT Oil Powder', 'Lion\'s Mane Mushroom', 'L-Theanine'];
        return ['Premium Plant Protein', 'Natural Flavorings', 'Superfood Blend'];
    };

    const getBenefits = (p) => {
        if (p.benefits && p.benefits.length > 0) return p.benefits;
        if (p.series === 'Reset Power') return ['Accelerates Muscle Recovery', 'Reduces Inflammation', 'Antioxidant Support'];
        if (p.series === 'Urban Light') return ['Digestive Aid', 'Heavy Metal Detox', 'Hydration Support'];
        if (p.series === 'Daily Balance') return ['Mood Stabilization', 'Sustainable Energy', 'Curbing Cravings'];
        if (p.series === 'Focus Fuel') return ['Enhanced Mental Clarity', 'Sustained Focus', 'No Caffeine Jitters'];
        return ['Complete Amino Acid Profile', 'Easy Digestion'];
    };

    const ingredients = getIngredients(product);
    const benefits = getBenefits(product);

    return (
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isOpen ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: isOpen ? 'auto' : 'none',
                padding: '20px'
            }}
        >
            <div
                className="modal-content"
                onClick={e => e.stopPropagation()}
                style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    maxWidth: '1000px',
                    height: 'auto',
                    maxHeight: '90vh',
                    borderRadius: '0', // Sharp edges for brand
                    display: 'flex',
                    flexDirection: 'row', // Desktop default
                    overflow: 'hidden',
                    position: 'relative',
                    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '24px',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '2rem',
                        lineHeight: 1,
                        cursor: 'pointer',
                        zIndex: 10,
                        color: '#1a1a1a',
                        fontWeight: 300,
                        fontFamily: 'var(--font-heading)'
                    }}
                >
                    &times;
                </button>

                {/* Left: Image */}
                <div className="modal-image-col" style={{ flex: '0 0 45%', position: 'relative', overflow: 'hidden', backgroundColor: '#f4f4f4' }}>
                    <img
                        src={product.image}
                        alt={product.name_en}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            mixBlendMode: 'multiply' // Helps if image has white bg
                        }}
                    />
                    {/* Series Tag Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '30px',
                        background: 'var(--color-parakeet-green)',
                        color: '#fff',
                        padding: '8px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        {product.series}
                    </div>
                </div>

                {/* Right: Content */}
                <div
                    className="modal-content-col"
                    style={{
                        flex: '1',
                        padding: '60px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '8px', lineHeight: 1.1 }}>
                        {product.name_en}
                    </h2>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', color: '#888', marginBottom: '32px', fontWeight: 300 }}>
                        {product.name_tc}
                    </h3>

                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '40px' }}>
                        {product.desc_long}
                    </p>

                    <div style={{ width: '100%', height: '1px', background: '#eee', marginBottom: '40px' }}></div>

                    {/* Quick Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                        <div>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '16px' }}>Key Benefits</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {benefits.map((b, i) => (
                                    <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--color-parakeet-green)' }}>•</span> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '16px' }}>Nutrients / Serv.</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                                <div className="stat-box">
                                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a' }}>{product.macros.protein}g</span>
                                    <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Protein</span>
                                </div>
                                <div className="stat-box">
                                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a' }}>{product.calories}</span>
                                    <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Cal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                        <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999', marginBottom: '12px' }}>Ingredients</h4>
                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>
                            {ingredients.join(', ')}.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .modal-content {
                        flex-direction: column !important;
                        height: 90vh !important;
                        max-height: 90vh;
                        width: 90vw !important;
                        overflow-y: auto;
                    }
                    .modal-image-col {
                        flex: 0 0 300px !important;
                        min-height: 250px;
                    }
                    .modal-content-col {
                        padding: 30px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetailModal;
