import React from 'react';
import '../styles/hero.css';
import { getAssetPath } from '../utils/assets';

const Hero = () => {
    return (
        <section className="hero cereal-mode">
            {/* Background Layers */}
            <div className="hero-bg"></div>

            {/* Cereal Container (Compact for Viewport Visibility) */}
            <div className="cereal-container">

                {/* 1. Masthead (Compact) */}
                <header className="cereal-masthead">
                    <h1 className="brand-title">INNERMATTER</h1>
                    <div className="brand-meta">
                        <span>VOLUME 01</span>
                        <span className="dot">•</span>
                        <span>TAIPEI</span>
                        <span className="dot">•</span>
                        <span>EST. 2026</span>
                    </div>
                </header>

                {/* 2. Visual (Panoramic 21:9) */}
                <div className="cereal-visual-frame">
                    <img src={getAssetPath('/assets/vogue_river_smoothie_natural_v2.png')} alt="Inner Matter Serene Flow" className="cereal-image" />
                </div>

                {/* 3. Narrative (Compact) */}
                <div className="cereal-narrative">
                    <div className="narrative-right">
                        <p className="narrative-text">
                            源自亞洲的健康飲品品牌。<br />
                            以純淨健康飲品重塑都會日常，建立理想的健康生活儀式。
                        </p>
                        <button
                            className="hero-cta-pill"
                            onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>

                {/* 4. Footer Values (Integrated) */}
                <div className="cereal-footer-values">
                    <span>Health</span>
                    <span className="separator">|</span>
                    <span>Quality</span>
                    <span className="separator">|</span>
                    <span>Success</span>
                </div>

            </div>

            {/* Ticker (Fixed Bottom) */}
            <div className="hero-ticker-wrap">
                <div className="hero-ticker">
                    <span>WELLNESS IS THE NEW LUXURY — INNERMATTER — SCIENCE BACKED — PLANT BASED — AESTHETIC NUTRITION — </span>
                    <span>WELLNESS IS THE NEW LUXURY — INNERMATTER — SCIENCE BACKED — PLANT BASED — AESTHETIC NUTRITION — </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
