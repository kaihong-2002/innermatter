import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State
    const location = useLocation();
    const navigate = useNavigate();
    // No Cart/Auth logic needed anymore

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
                const navbarHeight = window.innerWidth < 768 ? 60 : 80;
                const elementHeight = element.offsetHeight;
                const windowHeight = window.innerHeight;

                // Center the element: Top of element should be at (WindowHeight - ElementHeight) / 2
                // But we must account for scrolling.
                // Target Scroll Y = Element Top Y - (WindowHeight - ElementHeight) / 2

                const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                let offsetPosition;

                if (elementHeight < windowHeight) {
                    // If element is smaller than window, center it but slightly higher (divide by 2.5 instead of 2)
                    offsetPosition = elementTop - (windowHeight - elementHeight) / 2.5;
                } else {
                    // If element is larger, align to top strictly (let navbar overlap padding)
                    offsetPosition = elementTop;
                }

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
                <span onClick={(e) => handleScrollLink(e, 'philosophy')} className="nav-link" style={{ cursor: 'pointer' }}>Philosophy</span>
                <span onClick={(e) => handleScrollLink(e, 'shop')} className="nav-link" style={{ cursor: 'pointer' }}>Menu</span>
                <span onClick={(e) => handleScrollLink(e, 'locations')} className="nav-link" style={{ cursor: 'pointer' }}>Locations</span>
                <span onClick={(e) => handleScrollLink(e, 'health-club')} className="nav-link" style={{ cursor: 'pointer' }}>Health Club</span>
            </div>

            <div className="navbar-actions">
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
