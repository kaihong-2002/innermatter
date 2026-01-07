import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State
    const location = useLocation();
    const navigate = useNavigate();
    const { toggleCart, cartCount } = useCart();
    const { user } = useAuth(); // Create this link

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleScrollLink = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close menu on click

        // If we are already on home page, just scroll
        if (location.pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            // Do not pushState to '/#targetId' because it confuses HashRouter (treats as route /targetId)
            // Just let the scroll happen.
        } else {
            // Navigate to home with state, instructing it to scroll
            navigate('/', { state: { scrollTo: targetId } });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="navbar-logo" onClick={() => window.scrollTo(0, 0)}>
                Innermatter
            </Link>

            <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                {/* Custom handlers for sections */}
                <Link to="/philosophy" onClick={(e) => handleScrollLink(e, 'mission')} className="nav-link">Philosophy</Link>
                <a href="#shop" onClick={(e) => handleScrollLink(e, 'shop')} className="nav-link">Menu</a>
                <a href="#locations" onClick={(e) => handleScrollLink(e, 'locations')} className="nav-link">Locations</a>
                <a href="#health-club" onClick={(e) => handleScrollLink(e, 'health-club')} className="nav-link">Health Club</a>
            </div>

            <div className="navbar-actions">
                <div
                    className="cart-icon"
                    onClick={toggleCart}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 700 }}
                >
                    {/* Cart SVG */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="cart-text">CART ({cartCount})</span>
                </div>

                {user ? (
                    <Link to="/checkout" className="user-icon" style={{ display: 'flex', alignItems: 'center', marginLeft: '16px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </Link>
                ) : (
                    <button className="btn-order" onClick={() => navigate('/checkout')}>Login</button>
                )}

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <span style={{ transform: isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)' }}></span>
                    <span style={{ opacity: isMobileMenuOpen ? '0' : '1', translateX: isMobileMenuOpen ? '20px' : '0' }}></span>
                    <span style={{ transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></span>
                </button>
            </div>
        </nav >
    );
};

export default Navbar;
