import React, { useState, useEffect } from 'react';
import '../styles/product-intro.css';
import { getAssetPath } from '../utils/assets';

const ProductIntro = () => {
  // Pre-load assets
  useEffect(() => {
    ['store_tokyo.png', 'cereal_texture_nuts.png', 'vogue_river_smoothie_natural_v2.png',
      'icon_body.png', 'icon_energy.png', 'icon_mind.png',
      'cereal_greens_v2.png', 'cereal_milk_pour.png', 'cereal_glass_v2.png'].forEach(f => {
        const img = new Image();
        img.src = getAssetPath(`/assets/${f}`);
      });
  }, []);

  const [activePage, setActivePage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Content Data - Restored Full Detail
  const PAGES = [
    {
      id: 'mission',
      label: 'I. Mission',
      title: 'Defining the Future of Asian Wellness.',
      subtitle: 'I. OUR MISSION',
      visual: 'store_tokyo.png',
      visualStyle: { filter: 'grayscale(0%) contrast(1.05)' },
      content: (
        <div className="content-fade-in">
          <h3 style={{ fontSize: '1.2rem', fontFamily: '"Didot", serif', fontStyle: 'italic', marginBottom: '24px', opacity: 0.8 }}>
            Where Precision Meets Aesthetics.
          </h3>
          <p className="body-text">
            InnerMatter 旨在成為亞洲首個全方位健康品牌。面對都會生活的快節奏，我們知道你需要的不只是高蛋白，而是能兼顧「精準營養」與「生活風格」的解決方案。
          </p>
          <br />
          <p className="body-text">
            這一杯果昔，是你連結健康與理想生活的關鍵。我們致力於透過全方位的營養均衡，助你達成專屬的健康目標，讓你追求更好自我時，擁有最堅強且優雅的後盾。
          </p>
        </div>
      ),
      bg: '#FDFCF8', // Warm Paper
      text: '#1a1a1a',
      accent: '#748B6F'
    },
    {
      id: 'shift',
      label: 'II. Shift',
      title: '從目標導向到生活儀式',
      subtitle: 'II. THE SHIFT',
      visual: 'cereal_texture_nuts.png',
      visualStyle: { filter: 'grayscale(20%) contrast(0.95)' },
      content: (
        <div className="content-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <p className="body-text" style={{ marginBottom: '40px' }}>
            健康不再只是數字遊戲，而是對生活掌控感的追求。我們關注現代人健康信仰的三大維度轉變：
          </p>

          {/* Extended Mindset Grid - Full Width */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', flex: 1 }}>

            <div className="shift-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'rgba(255,255,255,0.6)', borderLeft: '4px solid #3B3430' }}>
              <img src={getAssetPath('/assets/icon_body.png')} style={{ width: '48px', opacity: 0.9 }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1.1rem', fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>BODY CONTROL 體態</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#444' }}>
                  真正的體態管理，不是盲目的挨餓，而是精準的熱量赤字與營養密度。
                </p>
              </div>
            </div>

            <div className="shift-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'rgba(255,255,255,0.6)', borderLeft: '4px solid #3B3430' }}>
              <img src={getAssetPath('/assets/icon_energy.png')} style={{ width: '48px', opacity: 0.9 }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1.1rem', fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>ATHLETIC 表現</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#444' }}>
                  InnerMatter 針對運動後的黃金修復期，提供優質分離乳清蛋白與關鍵胺基酸。
                </p>
              </div>
            </div>

            <div className="shift-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px', background: 'rgba(255,255,255,0.6)', borderLeft: '4px solid #3B3430' }}>
              <img src={getAssetPath('/assets/icon_mind.png')} style={{ width: '48px', opacity: 0.9 }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1.1rem', fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>CLEAN DIET 純粹</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#444' }}>
                  拒絕人工香料與化學添加，嚴選天然原型食材，保留最純粹的植化素。
                </p>
              </div>
            </div>

          </div>
        </div>
      ),
      bg: '#EAE6E1', // Warm Stone
      text: '#2c2c2c',
      accent: '#3B3430'
    },
    {
      id: 'solution',
      label: 'III. Solution',
      title: '解構．重組．進化',
      subtitle: 'III. THE SOLUTION',
      visual: 'vogue_river_smoothie_natural_v2.png',
      visualStyle: { filter: 'brightness(0.9) contrast(1.1)' },
      content: (
        <div className="content-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <p className="body-text" style={{ marginBottom: '48px', opacity: 0.9, fontSize: '1.1rem' }}>
            我們重新思考了「飲品」在現代生活中的角色。透過天然食材的黃金配比，將營養學化繁為簡，打造出美味與功能兼具的方案。
          </p>

          {/* Stylized Formula Section */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '2px',
            padding: '40px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'center', gap: '20px', textAlign: 'center' }}>

              {/* Real Food */}
              <div className="formula-item">
                <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', padding: '12px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  <img src={getAssetPath('/assets/cereal_greens_v2.png')} style={{ width: '100%' }} alt="" />
                </div>
                <h5 style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '8px', color: '#CFC0A5' }}>REAL FOOD</h5>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>天然原型食材</p>
              </div>

              <span style={{ fontSize: '2rem', opacity: 0.3, fontWeight: 300 }}>+</span>

              {/* Texture */}
              <div className="formula-item">
                <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', padding: '12px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  <img src={getAssetPath('/assets/cereal_texture_nuts.png')} style={{ width: '100%' }} alt="" />
                </div>
                <h5 style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '8px', color: '#CFC0A5' }}>TEXTURE</h5>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>豐富口感層次</p>
              </div>

              <span style={{ fontSize: '2rem', opacity: 0.3, fontWeight: 300 }}>+</span>

              {/* Base */}
              <div className="formula-item">
                <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', padding: '12px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  <img src={getAssetPath('/assets/cereal_milk_pour.png')} style={{ width: '100%' }} alt="" />
                </div>
                <h5 style={{ fontSize: '0.9rem', letterSpacing: '0.2em', marginBottom: '8px', color: '#CFC0A5' }}>BASE</h5>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>優質營養基底</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ margin: '0 0 8px', fontFamily: '"Cinzel", serif', fontSize: '1.5rem', letterSpacing: '0.1em' }}>= THE GLASS</h4>
              <span style={{ fontSize: '0.9rem', opacity: 0.6, letterSpacing: '0.05em' }}>營養均衡．極致美味．身心修復</span>
            </div>
          </div>
        </div>
      ),
      bg: '#3B3430', // Deep Wood
      text: '#FDFCF8', // White text on dark
      accent: '#CFC0A5' // Sand accent
    }
  ];

  const changePage = (newIndex) => {
    if (isAnimating) return;
    if (newIndex === activePage) return;
    setIsAnimating(true);
    setActivePage(newIndex);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const currentPage = PAGES[activePage];

  return (
    <section className="intro-section" style={{
      padding: '0',
      background: currentPage.bg, // Immersive Background
      transition: 'background-color 0.8s ease',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>

      {/* Immersive Container - Fills screen but keeps margins */}
      <div className="immersive-book" style={{
        width: '95vw',
        height: '90vh',
        display: 'flex',
        boxShadow: '0 40px 100px rgba(0,0,0,0.2)', // Deep float
        background: '#fff',
        overflow: 'hidden'
      }}>

        {/* LEFT: Visual (45%) */}
        <div className="book-visual" style={{
          flex: '0 0 45%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {PAGES.map((page, index) => (
            <div
              key={page.id}
              style={{
                position: 'absolute', inset: 0,
                opacity: activePage === index ? 1 : 0,
                transition: 'opacity 1s ease',
                zIndex: activePage === index ? 2 : 1
              }}
            >
              <img
                src={getAssetPath(`/assets/${page.visual}`)}
                alt=""
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: activePage === index ? 'scale(1)' : 'scale(1.1)',
                  transition: 'transform 1.2s ease',
                  ...page.visualStyle
                }}
              />
              {/* Chapter Number Overlay on Image - Magazine Style */}
              <div style={{
                position: 'absolute', top: '40px', left: '40px',
                color: '#fff', fontFamily: '"Cinzel", serif', fontSize: '6rem',
                opacity: 0.8, textShadow: '0 0 30px rgba(0,0,0,0.5)'
              }}>
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Content (55%) */}
        <div className="book-content" style={{
          flex: '1',
          background: currentPage.bg,
          padding: '80px 100px', // Luxurious Padding
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          transition: 'background-color 0.8s ease'
        }}>

          {/* Content Fade Wrapper */}
          <div key={activePage} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            animation: 'fadeInSlide 0.8s ease forwards'
          }}>
            <span style={{
              display: 'block',
              color: currentPage.accent,
              fontSize: '0.9rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 600
            }}>
              {currentPage.subtitle}
            </span>

            <h1 style={{
              color: currentPage.text,
              fontSize: '3.5rem', // Large Headline
              fontFamily: '"Cinzel", serif',
              lineHeight: '1.2',
              marginBottom: '40px'
            }}>
              {currentPage.title}
            </h1>

            <div style={{
              color: currentPage.text,
              fontSize: '1.1rem',
              lineHeight: '1.8',
              fontFamily: '"Lato", sans-serif',
              fontWeight: 400
            }}>
              {currentPage.content}
            </div>
          </div>

          {/* Navigation Bar - Bottom Right */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginTop: '40px',
            borderTop: `1px solid ${currentPage.text}20`,
            paddingTop: '30px'
          }}>
            <button
              onClick={() => changePage((activePage - 1 + PAGES.length) % PAGES.length)}
              style={{ background: 'none', border: 'none', color: currentPage.text, fontSize: '1.5rem', cursor: 'pointer', opacity: 0.6, padding: '0 10px' }}
            >
              ← PREV
            </button>
            <div style={{ height: '1px', flex: 1, background: `${currentPage.text}20` }}></div>
            <button
              onClick={() => changePage((activePage + 1) % PAGES.length)}
              style={{ background: 'none', border: 'none', color: currentPage.text, fontSize: '1.5rem', cursor: 'pointer', hover: { opacity: 1 }, padding: '0 10px' }}
            >
              NEXT →
            </button>
          </div>

        </div>

      </div>

      {/* Global CSS for animations just for this component */}
      <style>{`
        @keyframes fadeInSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .body-text {
             font-size: 1.1rem;
             line-height: 1.8;
             opacity: 0.9;
        }
        .shift-card:hover {
            transform: translateX(10px);
            background: rgba(255,255,255,0.95) !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .shift-card {
            transition: all 0.3s ease;
        }
      `}</style>

    </section>
  );
};

export default ProductIntro;
