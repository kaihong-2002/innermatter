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
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const [isAnimating, setIsAnimating] = useState(false);

  // Content Data
  const PAGES = [
    {
      id: 'mission',
      label: 'I. Mission',
      title: 'Defining the Future of Asian Wellness.',
      subtitle: 'I. OUR MISSION',
      visual: 'store_tokyo.png',
      content: (
        <>
          <p>
            InnerMatter 旨在成為亞洲首個全方位健康生態系。我們深知現代都市生活的節快與高壓，
            因此我們不只提供一杯高蛋白果昔，更致力於打造一個能滿足你對「精準營養」與「生活美學」雙重渴望的解決方案。
          </p>
          <br />
          <p>
            透過科學化的營養配比與藝術般的味覺體驗，我們希望為你的每一次進食賦予意義。<br />
            在這條追求理想自我、平衡身心的路上，InnerMatter 是你最堅強且優雅的後盾。
          </p>
        </>
      ),
      bg: '#FDFCF8',
      color: '#1a1a1a',
      accent: '#748B6F'
    },
    {
      id: 'shift',
      label: 'II. Shift',
      title: '從目標導向到生活儀式',
      subtitle: 'II. THE SHIFT',
      visual: 'cereal_texture_nuts.png',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <p style={{ marginBottom: '24px', flexShrink: 0 }}>
            健康不再只是數字遊戲，而是對生活掌控感的追求。我們關注現代人健康信仰的三大維度轉變：
          </p>

          {/* Compact Mindset List - No Overflow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.5)', borderRadius: '4px' }}>
              <img src={getAssetPath('/assets/icon_body.png')} style={{ width: '32px' }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '0.85rem', fontFamily: '"Cinzel", serif' }}>BODY CONTROL 體態</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>精準熱量赤字，不盲目挨餓。</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.5)', borderRadius: '4px' }}>
              <img src={getAssetPath('/assets/icon_energy.png')} style={{ width: '32px' }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '0.85rem', fontFamily: '"Cinzel", serif' }}>ATHLETIC 表現</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>黃金修復期，加速肌肉修復。</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.5)', borderRadius: '4px' }}>
              <img src={getAssetPath('/assets/icon_mind.png')} style={{ width: '32px' }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 2px', fontSize: '0.85rem', fontFamily: '"Cinzel", serif' }}>CLEAN DIET 純粹</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.8 }}>拒絕人工添加，嚴選原型食材。</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bg: '#EAE6E1', // Warm Stone
      color: '#2c2c2c',
      accent: '#3B3430'
    },
    {
      id: 'solution',
      label: 'III. Solution',
      title: '解構．重組．進化',
      subtitle: 'III. THE SOLUTION',
      visual: 'vogue_river_smoothie_natural_v2.png',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <p style={{ marginBottom: '24px', opacity: 0.9 }}>
            我們將複雜的營養學化繁為簡，透過天然食材的黃金配比，打造出美味與功能兼具的方案。
          </p>

          {/* Integrated Formula - Ingredients */}
          <div style={{ marginTop: 'auto', marginBottom: 'auto', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '300px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', padding: '8px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={getAssetPath('/assets/cereal_greens_v2.png')} style={{ width: '100%' }} alt="" />
                </div>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>REAL FOOD</span>
              </div>
              <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>+</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', padding: '8px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={getAssetPath('/assets/cereal_texture_nuts.png')} style={{ width: '100%' }} alt="" />
                </div>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>TEXTURE</span>
              </div>
              <span style={{ fontSize: '1.2rem', opacity: 0.5 }}>+</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', background: '#fff', borderRadius: '50%', padding: '8px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={getAssetPath('/assets/cereal_milk_pour.png')} style={{ width: '100%' }} alt="" />
                </div>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>BASE</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <span style={{ fontFamily: '"Cinzel", serif', fontSize: '1rem' }}>= THE GLASS</span>
            </div>
          </div>
        </div>
      ),
      bg: '#3B3430', // Deep Wood
      color: '#FDFCF8', // White text on dark
      accent: '#CFC0A5' // Sand accent
    }
  ];

  const changePage = (newIndex) => {
    if (isAnimating) return;
    if (newIndex === activePage) return;

    const newDirection = newIndex > activePage ? 1 : -1;
    setDirection(newDirection);
    setIsAnimating(true);

    // Allow animation to play before switching state fully
    // But for React state driven animation, we often switch state immediately 
    // and let CSS handle the transition based on the new state index.
    setActivePage(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 1s matches the CSS duration
  };

  const currentPage = PAGES[activePage];

  return (
    <section className="intro-section" style={{ padding: '0', background: '#F9F9F9', overflow: 'hidden' }}>

      {/* 
        True Book Container 
        Perspective is essential for 3D rotation.
      */}
      <div className="book-stage" style={{
        maxWidth: '1000px',
        margin: '80px auto',
        height: '600px',
        perspective: '2500px', // Strong perspective
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
      }}>

        {/* The Book Itself */}
        <div className="book-spine" style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          transformStyle: 'preserve-3d', // Crucial: children exist in 3D space
          position: 'relative'
        }}>

          {/* Left Static Page (The Stack Base) */}
          <div className="book-page-left" style={{
            flex: 1,
            height: '100%',
            background: '#fcfcfc',
            position: 'relative',
            boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.05)', // Spine shadow
            zIndex: 1,
            overflow: 'hidden'
          }}>
            {/* Left Visual Layer */}
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              {PAGES.map((page, index) => (
                <img
                  key={`visual-${index}`}
                  src={getAssetPath(`/assets/${page.visual}`)}
                  alt=""
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
                    opacity: activePage === index ? 1 : 0,
                    transition: 'opacity 0.8s ease',
                    // Slight parallax scale
                    transform: activePage === index ? 'scale(1)' : 'scale(1.1)',
                    zIndex: activePage === index ? 2 : 1
                  }}
                />
              ))}
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                color: '#fff',
                fontFamily: '"Cinzel", serif',
                fontSize: '4rem',
                opacity: '0.8',
                zIndex: 10,
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                0{activePage + 1}
              </div>
            </div>
          </div>

          {/* Right Static Page (Base) - Acts as the destination for the flip */}
          <div className="book-page-right" style={{
            flex: 1,
            height: '100%',
            background: currentPage.bg,
            position: 'relative',
            transition: 'background-color 0.6s ease',
            boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.05)', // Spine shadow
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden' // Clip content
          }}>
            {/* Content Layer */}
            <div style={{ position: 'relative', width: '100%', height: '100%', padding: '50px' }}>
              {PAGES.map((page, index) => (
                <div
                  key={`content-${index}`}
                  style={{
                    position: 'absolute', inset: 0, padding: '50px 40px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    opacity: activePage === index ? 1 : 0,
                    transform: activePage === index ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                    pointerEvents: activePage === index ? 'auto' : 'none'
                  }}
                >
                  <span className="intro-subtitle" style={{ color: page.accent, fontSize: '0.8rem', letterSpacing: '0.2em' }}>{page.subtitle}</span>
                  <h1 className="intro-title" style={{ color: page.color, fontSize: '2rem', marginTop: '12px', marginBottom: '20px' }}>{page.title}</h1>
                  <div style={{ color: page.color, fontSize: '0.9rem', lineHeight: '1.6', flex: 1 }}>
                    {page.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div style={{ position: 'absolute', bottom: '40px', right: '40px', display: 'flex', gap: '16px', zIndex: 20 }}>
              <button
                onClick={() => changePage((activePage - 1 + PAGES.length) % PAGES.length)}
                disabled={isAnimating}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: `1px solid ${currentPage.color}`, color: currentPage.color,
                  background: 'transparent', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: isAnimating ? 0.3 : 0.7
                }}
              >←</button>
              <button
                onClick={() => changePage((activePage + 1) % PAGES.length)}
                disabled={isAnimating}
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  border: `1px solid ${currentPage.color}`, color: currentPage.color,
                  background: 'transparent', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: isAnimating ? 0.3 : 0.7
                }}
              >→. </button>
            </div>
          </div>

          {/* 
                 The "Flipper" Page 
                 This purely decorative element simulates the page moving across.
                 It appears only during transition.
               */}
          <div
            className={`flipper-page ${isAnimating ? 'flipping' : ''}`}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%', // Starts at spine
              width: '50%',
              height: '100%',
              transformOrigin: 'left center', // Rotates around spine
              backfaceVisibility: 'hidden',
              background: '#fff', // Or the color of the "previous" page back
              zIndex: 100,
              transform: isAnimating ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              transition: 'transform 1.0s cubic-bezier(0.645, 0.045, 0.355, 1.000)', // Smooth "Ease-in-out" cubic bezier
              display: isAnimating ? 'block' : 'none',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
            }}
          >
            {/* Front of Flipper (Visible when starting to flip right-to-left, but we are simplifying to a generic page turn effect) */}
            {/* Making a realistic double-sided 3D page requires two divs back-to-back. */}
            {/* For simplicity/reliability in this constraints, we use a shadow gradient to simulate the "page" passing over. */}
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent 20%)' }}></div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProductIntro;
