import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/product-intro.css';
import { getAssetPath } from '../utils/assets';

const ProductIntro = ({ forceExpanded = false }) => {
  const navigate = useNavigate();
  // Pre-load assets
  useEffect(() => {
    ['v5_page1_mission_architecture.png', 'v5_page2_evolution_lifestyle.png', 'v5_page3_solution_smoothie.png',
      'v6_icon_control_measure.png', 'v6_icon_athletic_wing.png', 'v6_icon_diet_drop.png',
      'cereal_greens_v2.png', 'cereal_milk_pour.png', 'cereal_glass_v2.png'].forEach(f => {
        const img = new Image();
        img.src = getAssetPath(f.startsWith('v5') || f.startsWith('v6') ? `/artifacts/${f}` : `/assets/${f}`);
      });
  }, []);

  const [activePage, setActivePage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Mobile collapse state

  // Content Data - V5
  const PAGES = [
    {
      id: 'mission',
      label: 'I. Mission',
      title: 'Defining the Future of Asian Wellness.',
      subtitle: 'I. OUR MISSION',
      visual: 'v5_page1_mission_architecture.png', // Generated
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
            這一杯高蛋白果昔，是你連結健康與理想生活的關鍵。我們致力於透過全方位的營養均衡，助你達成專屬的健康目標，讓你追求更好自我時，擁有最堅強且優雅的後盾。
          </p>
        </div>
      ),
      bg: '#FDFCF8', // White / Warm Paper
      text: '#1a1a1a',
      accent: '#748B6F'
    },
    {
      id: 'shift',
      label: 'II. Shift',
      title: '健康追求的進化',
      subtitle: 'II. THE EVOLUTION',
      visual: 'v5_page2_evolution_lifestyle.png', // Generated
      visualStyle: { filter: 'grayscale(10%) contrast(1.0)' },
      content: (
        <div className="content-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <p className="body-text" style={{ marginBottom: '40px' }}>
            現代人對於健康的追求已經進化，從單一的體重數字，轉而追求更精細、更具體的自我掌控。我們相信，真正的健康建立在對身體的深度理解之上。
          </p>

          {/* Extended Mindset Grid - New Icons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', flex: 1 }}>

            <div className="shift-card" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: 'rgba(255,255,255,0.4)', borderLeft: '4px solid #3B3430', borderRadius: '4px' }}>
              <img src={getAssetPath('/assets/v6_icon_control_measure.png')} style={{ width: '50px', opacity: 0.9 }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem', fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>BODY CONTROL 體態關注</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>精準的熱量赤字與營養密度。</p>
              </div>
            </div>

            <div className="shift-card" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: 'rgba(255,255,255,0.4)', borderLeft: '4px solid #3B3430', borderRadius: '4px' }}>
              <img src={getAssetPath('/assets/v6_icon_athletic_wing.png')} style={{ width: '50px', opacity: 0.9 }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem', fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>ATHLETIC 運動表現</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>針對運動後的黃金修復期。</p>
              </div>
            </div>

            <div className="shift-card" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: 'rgba(255,255,255,0.4)', borderLeft: '4px solid #3B3430', borderRadius: '4px' }}>
              <img src={getAssetPath('/assets/v6_icon_diet_drop.png')} style={{ width: '50px', opacity: 0.9 }} alt="" />
              <div>
                <h4 style={{ margin: '0 0 6px', fontSize: '1.1rem', fontFamily: '"Cinzel", serif', letterSpacing: '0.05em' }}>CLEAN DIET 純粹飲食</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#444' }}>拒絕人工添加，嚴選原型食材。</p>
              </div>
            </div>

          </div>
        </div>
      ),
      bg: '#FDFCF8', // Unified White
      text: '#1a1a1a',
      accent: '#748B6F' // Unified Sage
    },
    {
      id: 'solution',
      label: 'III. Solution',
      title: '解構．重組．進化',
      subtitle: 'III. THE SOLUTION',
      visual: 'v5_page3_solution_smoothie.png', // Generated
      visualStyle: { filter: 'brightness(0.95) contrast(1.05)' },
      content: (
        <div className="content-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <p className="body-text" style={{ marginBottom: '32px', opacity: 0.9, fontSize: '1.1rem' }}>
            我們重新思考了「健康飲品」的角色。透過天然食材的黃金配比，將營養學化繁為簡，打造出美味與功能兼具的方案。
          </p>

          <p className="body-text" style={{ marginBottom: '40px', opacity: 0.9, fontWeight: 500 }}>
            我們定義了新產品 <span style={{ fontFamily: '"Cinzel", serif', borderBottom: '1px solid currentColor' }}>Protein Smoothie 高蛋白奶昔</span>。<br />
            透鍋營養均衡，助你達成個人的健康目標。
          </p>

          {/* Stylized Formula Section - Larger Ingredients & Labels */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'rgba(116, 139, 111, 0.05)', // Sage tint for white bg
            borderRadius: '4px',
            padding: '24px',
            border: '1px solid rgba(116, 139, 111, 0.1)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'start', gap: '10px', textAlign: 'center' }}>

              {/* Item 1 */}
              <div className="formula-item">
                <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', padding: '12px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  <img src={getAssetPath('/assets/cereal_greens_v2.png')} style={{ width: '100%' }} alt="" />
                </div>
                <h5 style={{ fontSize: '0.9rem', marginBottom: '4px', color: '#1a1a1a', fontWeight: 600 }}>新鮮蔬果</h5>
                <p style={{ fontSize: '0.75rem', opacity: 0.7, margin: 0, color: '#444' }}>嚴選產地直送</p>
              </div>

              <span style={{ fontSize: '2rem', opacity: 0.3, fontWeight: 300, paddingTop: '30px', color: '#1a1a1a' }}>+</span>

              {/* Item 2 */}
              <div className="formula-item">
                <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', padding: '12px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  <img src={getAssetPath('/assets/cereal_texture_nuts.png')} style={{ width: '100%' }} alt="" />
                </div>
                <h5 style={{ fontSize: '0.9rem', marginBottom: '4px', color: '#1a1a1a', fontWeight: 600 }}>天然食材</h5>
                <p style={{ fontSize: '0.75rem', opacity: 0.7, margin: 0, color: '#444' }}>豐富口感好油</p>
              </div>

              <span style={{ fontSize: '2rem', opacity: 0.3, fontWeight: 300, paddingTop: '30px', color: '#1a1a1a' }}>+</span>

              {/* Item 3 */}
              <div className="formula-item">
                <div style={{ width: '90px', height: '90px', background: '#fff', borderRadius: '50%', padding: '12px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  <img src={getAssetPath('/assets/cereal_milk_pour.png')} style={{ width: '100%' }} alt="" />
                </div>
                <h5 style={{ fontSize: '0.9rem', marginBottom: '4px', color: '#1a1a1a', fontWeight: 600 }}>優質蛋白</h5>
                <p style={{ fontSize: '0.75rem', opacity: 0.7, margin: 0, color: '#444' }}>高效吸收修復</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(116, 139, 111, 0.1)' }}>
              <h4 style={{ margin: '0', fontFamily: '"Cinzel", serif', fontSize: '1.4rem', letterSpacing: '0.1em', color: '#748B6F' }}>= THE GLASS</h4>
            </div>
          </div>
        </div>
      ),
      bg: '#FDFCF8', // Unified White
      text: '#1a1a1a',
      accent: '#748B6F'
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
      background: currentPage.bg,
      transition: 'background-color 0.8s ease',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>

      {/* Desktop View: Immersive Book */}
      <div className="desktop-philosophy-view">
        <div className="immersive-book" style={{
          width: '85vw',
          height: '80vh',
          display: 'flex',
          boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
          background: '#fff',
          overflow: 'hidden'
        }}>

          {/* LEFT: Visual */}
          <div className="book-visual">
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
                {/* Chapter Number */}
                <div className="chapter-number">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Content */}
          <div className="book-content" style={{ background: currentPage.bg }}>
            <div key={activePage} className="content-wrapper">
              <span className="content-subtitle" style={{ color: currentPage.accent }}>
                {currentPage.subtitle}
              </span>

              <h1 className="content-title" style={{ color: currentPage.text }}>
                {currentPage.title}
              </h1>

              <div className="content-body" style={{ color: currentPage.text }}>
                {currentPage.content}
              </div>
            </div>

            {/* Simple Arrow Navigation */}
            <div className="book-nav">
              <button
                onClick={() => changePage((activePage - 1 + PAGES.length) % PAGES.length)}
                className="nav-arrow left"
                style={{ color: currentPage.text }}
              >
                ←
              </button>
              <button
                onClick={() => changePage((activePage + 1) % PAGES.length)}
                className="nav-arrow right"
                style={{ color: currentPage.text }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View: Vertical Story Feed (Collapsible / Page) */}
      <div className="mobile-philosophy-view">
        {!forceExpanded ? (
          <div
            className="philosophy-teaser"
            style={{
              padding: '60px 24px',
              textAlign: 'center',
              background: '#FDFCF8',
              borderBottom: '1px solid #eaeaea'
            }}
          >
            <span style={{
              display: 'block',
              color: '#748B6F',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: 600
            }}>
              I. OUR MISSION
            </span>
            <h3 style={{
              fontFamily: '"Cinzel", serif',
              fontSize: '2rem',
              color: '#1a1a1a',
              letterSpacing: '0.05em',
              margin: '0 0 16px',
              lineHeight: '1.2'
            }}>
              OUR PHILOSOPHY
            </h3>
            <p style={{
              fontFamily: '"Lato", sans-serif',
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.8',
              maxWidth: '300px',
              margin: '0 auto 32px'
            }}>
              Where Precision Meets Aesthetics.<br />
              InnerMatter 旨在成為亞洲首個全方位健康品牌，兼顧「精準營養」與「生活風格」。
            </p>

            <button
              onClick={() => navigate('/philosophy')}
              style={{
                background: 'transparent',
                border: '1px solid #1a1a1a',
                padding: '12px 30px',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                color: '#1a1a1a',
                transition: 'all 0.3s'
              }}
            >
              Read More
            </button>
          </div>
        ) : (
          <>
            {PAGES.map((page, index) => (
              <div key={page.id} className="mobile-story-item">
                <div className="mobile-story-visual">
                  <img src={getAssetPath(`/assets/${page.visual}`)} alt="" style={page.visualStyle} />
                  <div className="mobile-chapter-num">0{index + 1}</div>
                </div>

                <div className="mobile-story-content">
                  <span style={{
                    display: 'block',
                    color: '#748B6F',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    fontWeight: 600
                  }}>
                    {page.subtitle}
                  </span>

                  <h2 className="mobile-title">
                    {page.title}
                  </h2>

                  <div className="mobile-body">
                    {page.content}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

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
            background: rgba(255,255,255,0.6) !important;
        }
        .shift-card {
            transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default ProductIntro;
