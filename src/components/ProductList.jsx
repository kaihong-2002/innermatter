import React, { useState, useEffect } from 'react';

import { fetchProducts } from '../services/googleSheets';
import '../styles/product.css';

import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name_en} className="product-image" />
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name_en}</h3>
                <p className="product-desc" style={{ fontWeight: 700, color: 'var(--color-parakeet-green)', marginBottom: '8px' }}>
                    {product.desc_short}
                </p>
                <p className="product-desc-long" style={{ fontSize: '0.9rem', color: '#666', marginBottom: '16px', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                    {product.desc_long}
                </p>
                <div className="product-footer">
                    <span className="product-price">NT$ {product.price}</span>
                    <button
                        className="btn-add"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Macros Displayed Beside (Grid col 3 in CSS) */}
            <div className="macro-container">
                <div className="macro-item">
                    <span className="macro-value">{product.macros.protein}g</span>
                    <span className="macro-label">Protein</span>
                </div>
                <div className="macro-item">
                    <span className="macro-value">{product.macros.carbs}g</span>
                    <span className="macro-label">Carbs</span>
                </div>
                <div className="macro-item">
                    <span className="macro-value">{product.macros.fats}g</span>
                    <span className="macro-label">Good Fats</span>
                </div>
                <div className="macro-item">
                    <span className="macro-value">{product.calories}</span>
                    <span className="macro-label">Calories</span>
                </div>
            </div>
        </div>
    );
};

const SERIES_ORDER = [
    'Reset Power',
    'Urban Light',
    'Daily Balance',
    'Focus Fuel',
    'Complete Reset'
];

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchProducts().then(data => {
            console.log("ProductList received:", data);
            setProducts(data || []); // ensure array
            setIsLoading(false);
        });
    }, []);

    // Helper to format ID for scrolling
    const getSeriesId = (seriesName) => `series-${seriesName.replace(/\s+/g, '-')}`;

    // Normalize for comparison
    const normalize = (str) => (str || '').toString().toLowerCase().trim();

    // Track computed products to find unmapped ones
    const mappedProductIds = new Set();

    return (
        <section className="product-section" id="shop">
            <div className="product-header">
                <h2 className="section-title">Menu</h2>
            </div>

            <div className="collection-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', minHeight: '80vh' }}>
                {isLoading && (
                    <div style={{ padding: '80px', textAlign: 'center', color: '#888' }}>
                        <h3>Loading Menu...</h3>
                    </div>
                )}

                {!isLoading && products.length === 0 && (
                    <div style={{ padding: '80px', textAlign: 'center', color: '#888' }}>
                        <h3>No products found.</h3>
                        <p>Please check your Google Sheets connection.</p>
                    </div>
                )}

                {SERIES_ORDER.map((seriesName) => {
                    const seriesProducts = products.filter(p => {
                        const match = normalize(p.series) === normalize(seriesName);
                        if (match) mappedProductIds.add(p.id);
                        return match;
                    });

                    if (seriesProducts.length === 0) return null;

                    return (
                        <div key={seriesName} id={getSeriesId(seriesName)} className="series-group" style={{ marginBottom: '80px', scrollMarginTop: '100px' }}>
                            <div className="series-header" style={{ marginBottom: '32px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                                <h3 style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '2rem',
                                    color: 'var(--color-midnight-black)',
                                    marginBottom: '8px'
                                }}>
                                    {seriesName}
                                </h3>
                                <p style={{ fontFamily: 'var(--font-body)', color: '#666', fontStyle: 'italic' }}>
                                    {seriesName === 'Reset Power' && 'Recovery Ritual'}
                                    {seriesName === 'Urban Light' && 'Afternoon Lift'}
                                    {seriesName === 'Daily Balance' && 'New Habit'}
                                    {seriesName === 'Focus Fuel' && 'Deep Work'}
                                    {seriesName === 'Complete Reset' && 'Full Meal'}
                                </p>
                            </div>

                            <div className="product-grid">
                                {seriesProducts.map(p => (
                                    <ProductCard key={p.slug || p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* catch-all for products with different series names */}
                {!isLoading && products.filter(p => !mappedProductIds.has(p.id)).length > 0 && (
                    <div className="series-group" style={{ marginBottom: '80px' }}>
                        <div className="series-header" style={{ marginBottom: '32px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#888' }}>
                                Uncategorized / Others
                            </h3>
                        </div>
                        <div className="product-grid">
                            {products.filter(p => !mappedProductIds.has(p.id)).map(p => (
                                <ProductCard key={p.slug || p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductList;
