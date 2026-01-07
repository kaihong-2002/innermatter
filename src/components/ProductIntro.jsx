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
  return (
    <section className="intro-section">
      <div className="intro-container">

        {/* ... (Mission and Shift sections remain unchanged) ... */}
        {/* === PART 1: MISSION === */}
        <header id="mission" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="intro-subtitle">I. OUR MISSION</span>
          <h1 className="intro-title">Defining the Future of Asian Wellness.</h1>

          <div className="intro-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p>
              InnerMatter 旨在成為亞洲首個全方位健康生態系。我們深知現代都市生活的節快與高壓，
              因此我們不只提供一杯高蛋白果昔，更致力於打造一個能滿足你對「精準營養」與「生活美學」雙重渴望的解決方案。
            </p>
            <br />
            <p>
              透過科學化的營養配比與藝術般的味覺體驗，我們希望為你的每一次進食賦予意義。<br />
              在這條追求理想自我、平衡身心的路上，InnerMatter 是你最堅強且優雅的後盾。
            </p>
          </div>
        </header>

        {/* === PART 2: THE SHIFT === */}
        <div id="the-shift" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="intro-subtitle">II. THE SHIFT</span>
          <h1 className="intro-title">從目標導向到生活儀式</h1>

          <div className="intro-text" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p>
              健康不再只是體重計上的數字遊戲，而是一種對生活掌控感的極致追求。<br />
              我們觀察到，現代人的健康信仰正經歷三個關鍵的維度轉變，這也是 InnerMatter 產品研發的核心哲學：
            </p>
          </div>
        </div>

        {/* Mindset Grid - Premium Cards with Colors */}
        <div className="mindset-grid">
          {/* Card 1: Body Control */}
          <div className="mindset-card card-body-control">
            <img src={getAssetPath('/assets/icon_body.png')} alt="Body" className="card-icon" />
            <h3 className="card-title">Body Control<span>體態控制</span></h3>
            <p className="card-desc">
              真正的體態管理，不是盲目的挨餓，而是精準的熱量赤字與營養密度。
              我們提供高飽足感、低升糖的營養方案，助你輕鬆掌控熱量攝取，雕塑理想線條，同時維持整日的充沛活力。
            </p>
          </div>

          {/* Card 2: Athletic */}
          <div className="mindset-card card-athletic">
            <img src={getAssetPath('/assets/icon_energy.png')} alt="Athletic" className="card-icon" />
            <h3 className="card-title">Athletic<span>運動表現</span></h3>
            <p className="card-desc">
              每一次的揮汗如雨，都值得被更好的營養承接。
              InnerMatter 針對運動後的黃金修復期，提供優質分離乳清蛋白與關鍵胺基酸，加速肌肉修復，減少疲勞累積，為下一次的爆發儲備能量。
            </p>
          </div>

          {/* Card 3: Clean Diet */}
          <div className="mindset-card card-clean-diet">
            <img src={getAssetPath('/assets/icon_mind.png')} alt="Diet" className="card-icon" />
            <h3 className="card-title">Clean Diet<span>純粹飲食</span></h3>
            <p className="card-desc">
              在這充滿加工食品的時代，我們堅持「少即是多」的減法哲學。
              拒絕人工香料與化學添加，嚴選天然原型食材，保留最純粹的植化素與微量元素，這是身體與自然最直接、最安心的對話。
            </p>
          </div>
        </div>

        {/* === PART 3: SOLUTION === */}
        <div className="solution-visual-section">
          <header style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="intro-subtitle">III. THE SOLUTION</span>
            <h1 className="intro-title">解構．重組．進化</h1>
            <div className="section-divider"></div>
            <div className="intro-text" style={{ maxWidth: '760px', margin: '0 auto' }}>
              <p>
                真正的健康，不該是為了功能而犧牲美味的妥協。<br />
                我們重新思考了「飲品」在現代生活中的角色，打造出專為不同健康目標設計的營養均衡方案。
              </p>
              <br />
              <p>
                透過天然食材的黃金配比，我們將複雜的營養學化繁為簡。<br />
                讓你在繁忙的日常中，也能輕鬆享有一杯純淨、美味且營養完整的健康飲品。
              </p>
            </div>
          </header>

          <div className="solution-pillars">
            {/* Pillar 1 */}
            <div className="solution-pillar">
              <TiltCard className="pillar-image-wrap">
                <img src={getAssetPath('/assets/cereal_greens_v2.png')} alt="Fresh Greens" />
              </TiltCard>
              <div className="pillar-label">REAL FOOD</div>
              <div className="pillar-sub">新鮮蔬果<br />鮮活植化素</div>
            </div>

            <div className="pillar-operator">+</div>

            {/* Pillar 2 */}
            <div className="solution-pillar">
              <TiltCard className="pillar-image-wrap">
                <img src={getAssetPath('/assets/cereal_texture_nuts.png')} alt="Texture" />
              </TiltCard>
              <div className="pillar-label">TEXTURE</div>
              <div className="pillar-sub">原型食物<br />細緻纖維</div>
            </div>

            <div className="pillar-operator">+</div>

            {/* Pillar 3 */}
            <div className="solution-pillar">
              <TiltCard className="pillar-image-wrap">
                <img src={getAssetPath('/assets/cereal_milk_pour.png')} alt="Base" />
              </TiltCard>
              <div className="pillar-label">BASE</div>
              <div className="pillar-sub">優質乳源<br />分離蛋白</div>
            </div>

            <div className="pillar-operator">=</div>

            {/* Result */}
            <div className="solution-pillar solution-result-pillar">
              <TiltCard className="pillar-image-wrap">
                <img src={getAssetPath('/assets/cereal_glass_v2.png')} alt="Glass" />
              </TiltCard>
              <div className="pillar-label result-title">THE GLASS</div>
              <div className="pillar-sub">營養均衡．健康飲</div>
            </div>
          </div>

          {/* Collection Bridge */}
          <div className="collection-bridge">
            <h3 className="intro-title" style={{ fontSize: '1.8rem', fontStyle: 'italic' }}>Curated for your Rhythm.</h3>
            <p className="intro-text">
              你的身體在清晨需要的喚醒，與睡前渴望的平靜截然不同。<br />
              我們不相信一套配方能解決所有問題。因此，InnerMatter 針對現代人一日中的<strong>「五種關鍵生理時刻」</strong>，<br />
              設計出五款營養光譜截然不同的健康飲品，只為精準回應你身體當下的每一次呼喚。
            </p>

            <div className="collection-nav" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginTop: '40px'
            }}>
              {/* Elegant Text Links */}
              <button className="nav-text-btn" onClick={() => document.getElementById('accordion-rp')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                RESET POWER
              </button>
              <span className="nav-separator">|</span>

              <button className="nav-text-btn" onClick={() => document.getElementById('accordion-ul')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                URBAN LIGHT
              </button>
              <span className="nav-separator">|</span>

              <button className="nav-text-btn" onClick={() => document.getElementById('accordion-db')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                DAILY BALANCE
              </button>
              <span className="nav-separator">|</span>

              <button className="nav-text-btn" onClick={() => document.getElementById('accordion-ff')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                FOCUS FUEL
              </button>
              <span className="nav-separator">|</span>

              <button className="nav-text-btn" onClick={() => document.getElementById('accordion-cr')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                COMPLETE RESET
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductIntro;
