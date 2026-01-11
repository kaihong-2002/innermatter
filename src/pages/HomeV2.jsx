import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/home-v2.css';
import { getAssetPath } from '../utils/assets';
import { fetchProducts } from '../services/googleSheets';

// Reusing Product Detail Modal Logic? 
// For V2, let's keep it simple first: Focus on layout.
// We'll import product logic if needed, or just link to Detail.

const HomeV2 = () => {
    // Assets
    const heroImg = getAssetPath('/assets/v2/hero-fashion.png');
    const lifestyleImg = getAssetPath('/assets/v2/lifestyle-desk.png');
    const textureImg = getAssetPath('/assets/v2/texture-macro.png');

    // Mock Products for Display (Or fetch real ones)
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        const load = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        load();
    }, []);

    return (
        <div className="home-v2">
            <Navbar />

            {/* HERO: Cinematic & Bold */}
            <section className="v2-hero">
                <img src={heroImg} alt="Urban Success" className="v2-hero-bg" />
                <div className="v2-hero-content">
                    <p className="v2-hero-subtitle">EST. 2026 TAIPEI</p>
                    <h1 className="v2-hero-title v2-headline">URBAN<br />DISCIPLINE</h1>
                    <p className="v2-subhead" style={{ marginTop: '20px' }}>DRINK THE DISCIPLINE</p>
                </div>
            </section>

            {/* MANIFESTO: Editorial Layout */}
            <section className="v2-manifesto">
                <p className="v2-subhead" style={{ marginBottom: '20px', color: '#999' }}>PHILOSOPHY</p>
                <h2 className="v2-headline">"Chaos is cheap.<br />Discipline is expensive."</h2>
                <p className="v2-body">
                    在混亂的世界裡，我們販賣秩序。
                    InnerMatter 不只是營養補給，它是你從忙碌中奪回控制權的儀式。
                    每一口，都是對自律的致敬。
                </p>
            </section>

            {/* EDITORIAL LIFESTYLE: Asymmetrical */}
            <section className="v2-editorial">
                <div className="v2-editorial-img-wrapper">
                    <img src={lifestyleImg} alt="Architect Desk" className="v2-editorial-img" />
                </div>
                <div className="v2-editorial-text">
                    <p className="v2-subhead" style={{ marginBottom: '30px', color: '#888' }}>FOR THE MIND</p>
                    <blockquote className="v2-editorial-quote">
                        Before you build your body,<br />build your mind.
                    </blockquote>
                    <p className="v2-body" style={{ color: '#ccc' }}>
                        為高腦力工作者設計的營養建築學。
                        去除甜膩，保留本質。讓攝取營養像閱讀一樣精準。
                    </p>
                    <div style={{ marginTop: '40px', borderBottom: '1px solid #fff', display: 'inline-block', width: 'fit-content', paddingBottom: '5px' }}>
                        READ THE JOURNAL
                    </div>
                </div>
            </section>

            {/* TEXTURE: Full sensory */}
            <section className="v2-texture">
                <img src={textureImg} alt="Texture Macro" />
                <div className="v2-texture-caption">
                    <p>NO LUMPS. NO NOISE. JUST FLOW.</p>
                </div>
            </section>

            {/* COLLECTION: Mimicking a Fashion Catalog */}
            <section id="collection" className="v2-collection">
                <div className="v2-collection-header">
                    <h2 className="v2-headline" style={{ fontSize: '3rem' }}>THE COLLECTION</h2>
                    <p className="v2-subhead">S/S 2026</p>
                </div>

                <div className="v2-product-grid">
                    {products.slice(0, 4).map((product, idx) => (
                        <div key={product.id} className="v2-product-card">
                            <img src={product.image} alt={product.name_en} className="v2-product-image" />
                            <div className="v2-product-meta">
                                <p className="v2-subhead" style={{ marginBottom: '10px' }}>{product.series.toUpperCase()}</p>
                                <h3 className="v2-headline" style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{product.name_en}</h3>
                                <p className="v2-body">{product.name_tc}</p>
                                <p className="v2-subhead" style={{ marginTop: '15px' }}>NT$ {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomeV2;
