import React from 'react';
import '../styles/product-intro.css';
import { getAssetPath } from '../utils/assets';

// Internal component for 3D Tilt Effect
const TiltCard = ({ children, className, style }) => {
  const [transform, setTransform] = React.useState('');
  const [transition, setTransition] = React.useState('transform 0.1s ease-out');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
    setTransition('transform 0.05s linear');
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setTransition('transform 0.5s ease-out');
  };

  return (
    <div
      className={className}
      style={{ ...style, transform, transition, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const ProductIntro = () => {
  const [activePage, setActivePage] = React.useState(0);

  const PAGES = [
    {
      id: 'mission',
      label: 'I. Mission',
      title: 'Defining the Future of Asian Wellness.',
      subtitle: 'I. OUR MISSION',
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
      bg: '#FDFCF8', // Warm Paper
      color: '#1a1a1a',
      accent: '#748B6F'
    },
    {
      id: 'shift',
      label: 'II. Shift',
      title: '從目標導向到生活儀式',
      subtitle: 'II. THE SHIFT',
      content: (
        <>
          <p>
            健康不再只是體重計上的數字遊戲，而是一種對生活掌控感的極致追求。<br />
            我們觀察到，現代人的健康信仰正經歷三個關鍵的維度轉變，這也是 InnerMatter 產品研發的核心哲學：
          </p>
        </>
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
      content: (
        <>
          <p>
            真正的健康，不該是為了功能而犧牲美味的妥協。<br />
            我們重新思考了「飲品」在現代生活中的角色，透過天然食材的黃金配比，我們將複雜的營養學化繁為簡。
          </p>
          <br />
          <p>
            打造出專為不同健康目標設計的營養均衡方案，讓你在繁忙的日常中，也能輕鬆享有一杯純淨、美味且營養完整的健康飲品。
          </p>
        </>
      ),
      bg: '#3B3430', // Deep Wood
      color: '#FDFCF8', // White text on dark
      accent: '#CFC0A5' // Sand accent
    }
  ];

  const handleNext = () => {
    setActivePage(prev => (prev + 1) % PAGES.length);
  };

  const handlePrev = () => {
    setActivePage(prev => (prev - 1 + PAGES.length) % PAGES.length);
  };

  const currentPage = PAGES[activePage];

  return (
    <section className="intro-section" style={{ padding: '0', background: '#F9F9F9' }}>

      {/* Book Container */}
      <div className="book-container" style={{
        maxWidth: '1000px',
        margin: '80px auto',
        minHeight: '600px',
        display: 'flex',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Visual Side (Left) - Dynamic based on page */}
        <div className="book-visual" style={{
          flex: '1',
          background: '#f0f0f0',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Using existing assets creatively for visual interest */}
          <img
            src={getAssetPath(activePage === 0 ? '/assets/store_tokyo.png' : activePage === 1 ? '/assets/cereal_texture_nuts.png' : '/assets/vogue_river_smoothie_natural_v2.png')}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: activePage === 2 ? 'brightness(0.8) contrast(1.1)' : 'grayscale(20%) contrast(0.9) brightness(1.1)',
              transition: 'all 0.6s ease'
            }}
          />
          {/* Page Number Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            color: '#fff',
            fontFamily: '"Cinzel", serif',
            fontSize: '4rem',
            opacity: '0.8',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            0{activePage + 1}
          </div>
        </div>

        {/* Text Side (Right) */}
        <div className="book-content" style={{
          flex: '1',
          background: currentPage.bg,
          padding: '60px 50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          transition: 'background-color 0.6s ease'
        }}>

          {/* Content Transition Wrapper */}
          <div key={activePage} className="fade-in-up" style={{ animation: 'fadeInUp 0.6s ease forwards' }}>
            <span className="intro-subtitle" style={{ color: currentPage.accent }}>{currentPage.subtitle}</span>
            <h1 className="intro-title" style={{ color: currentPage.color, fontSize: '2.5rem', marginTop: '16px', marginBottom: '32px' }}>{currentPage.title}</h1>

            <div className="intro-text" style={{ color: currentPage.color, opacity: 0.9 }}>
              {currentPage.content}
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '60px', alignItems: 'center' }}>
            <button
              onClick={handlePrev}
              style={{
                background: 'transparent',
                border: `1px solid ${currentPage.color}`,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                color: currentPage.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.6,
                transition: 'opacity 0.2s'
              }}
            >
              ←
            </button>
            <span style={{ fontFamily: '"Cinzel", serif', fontSize: '0.9rem', color: currentPage.color, opacity: 0.7 }}>
              {activePage + 1} / {PAGES.length}
            </span>
            <button
              onClick={handleNext}
              style={{
                background: 'transparent',
                border: `1px solid ${currentPage.color}`,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                color: currentPage.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.6,
                transition: 'opacity 0.2s'
              }}
            >
              →
            </button>
          </div>

        </div>
      </div>

      {/* Mindset Grid - Only show on Shift page or below book? Let's keep it below as extended content */}
      {/* User asked for flip book for philosophy, but Mindset cards are part of Shift. 
          To keep it clean, let's conditionally render the grid ONLY when activePage === 1 (Shift) 
          OR keep it separate. The prompt implies standardizing reading. 
          Let's try putting the Mindset cards strictly under the book when Page 2 is active for a "Reveal" effect.
      */}

      {activePage === 1 && (
        <div style={{ maxWidth: '1000px', margin: '0 auto 80px', animation: 'fadeIn 0.8s ease' }}>
          <div className="mindset-grid">
            {/* Card 1: Body Control */}
            <div className="mindset-card card-body-control">
              <img src={getAssetPath('/assets/icon_body.png')} alt="Body" className="card-icon" />
              <h3 className="card-title">Body Control<span>體態控制</span></h3>
              <p className="card-desc">
                真正的體態管理，不是盲目的挨餓，而是精準的熱量赤字與營養密度。
              </p>
            </div>

            {/* Card 2: Athletic */}
            <div className="mindset-card card-athletic">
              <img src={getAssetPath('/assets/icon_energy.png')} alt="Athletic" className="card-icon" />
              <h3 className="card-title">Athletic<span>運動表現</span></h3>
              <p className="card-desc">
                InnerMatter 針對運動後的黃金修復期，提供優質分離乳清蛋白與關鍵胺基酸。
              </p>
            </div>

            {/* Card 3: Clean Diet */}
            <div className="mindset-card card-clean-diet">
              <img src={getAssetPath('/assets/icon_mind.png')} alt="Diet" className="card-icon" />
              <h3 className="card-title">Clean Diet<span>純粹飲食</span></h3>
              <p className="card-desc">
                拒絕人工香料與化學添加，嚴選天然原型食材，保留最純粹的植化素。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Solution Visuals - Only on Page 3 */}
      {activePage === 2 && (
        <div className="solution-visual-section" style={{ paddingBottom: '80px', animation: 'fadeIn 0.8s ease' }}>
          <div className="solution-pillars">
            {/* Simplified Pillars for cleaner view */}
            <div className="solution-pillar">
              <img src={getAssetPath('/assets/cereal_greens_v2.png')} alt="Fresh Greens" style={{ width: '80px', marginBottom: '16px' }} />
              <div className="pillar-label">REAL FOOD</div>
            </div>
            <div className="pillar-operator">+</div>
            <div className="solution-pillar">
              <img src={getAssetPath('/assets/cereal_texture_nuts.png')} alt="Texture" style={{ width: '80px', marginBottom: '16px' }} />
              <div className="pillar-label">TEXTURE</div>
            </div>
            <div className="pillar-operator">+</div>
            <div className="solution-pillar">
              <img src={getAssetPath('/assets/cereal_milk_pour.png')} alt="Base" style={{ width: '80px', marginBottom: '16px' }} />
              <div className="pillar-label">BASE</div>
            </div>
            <div className="pillar-operator">=</div>
            <div className="solution-pillar solution-result-pillar">
              <img src={getAssetPath('/assets/cereal_glass_v2.png')} alt="Glass" style={{ width: '80px', marginBottom: '16px' }} />
              <div className="pillar-label result-title">THE GLASS</div>
            </div>
          </div>

          {/* Collection Bridge */}
          <div className="collection-bridge" style={{ marginTop: '60px' }}>
            <h3 className="intro-title" style={{ fontSize: '1.8rem', fontStyle: 'italic' }}>Curated for your Rhythm.</h3>
            <div className="collection-nav" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginTop: '20px'
            }}>
              {/* Elegant Text Links */}
              <button className="nav-text-btn" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                EXPLORE THE SERIES ↓
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ProductIntro;
