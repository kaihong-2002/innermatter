import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

const Philosophy = () => {
    return (
        <div className="page-philosophy">
            <Navbar />
            <div style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
                <div style={{ padding: '40px 0', textAlign: 'center' }}>
                    {/* === I. OUR MISSION === */}
                    <h1 style={{
                        fontFamily: '"Didot", "Bodoni MT", "Times New Roman", serif',
                        fontSize: '3.5rem',
                        fontWeight: '400',
                        marginBottom: '1rem',
                        color: 'var(--color-midnight-black)',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase'
                    }}>
                        I. OUR MISSION
                        <span style={{
                            display: 'block',
                            fontSize: '1.5rem',
                            marginTop: '1rem',
                            fontFamily: 'var(--font-body)',
                            fontWeight: '300',
                            letterSpacing: '0.2em'
                        }}>
                            亞洲首個全方位健康品牌
                        </span>
                    </h1>
                    <div style={{ width: '60px', height: '1px', background: 'var(--color-parakeet-green)', margin: '40px auto' }}></div>
                    <h2 style={{ fontFamily: '"Didot", "Bodoni MT", serif', fontStyle: 'italic', fontSize: '1.75rem', marginBottom: '40px', color: '#555', fontWeight: '400' }}>
                        Defining the Future of Asian Wellness.
                    </h2>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '2.4', color: '#333', maxWidth: '720px', margin: '0 auto 80px', textAlign: 'justify', textAlignLast: 'center' }}>
                        <p style={{ marginBottom: '32px' }}>
                            InnerMatter 旨在成為亞洲第一個全方位健康品牌。<br />
                            我們不只提供一杯高蛋白果昔，更致力於滿足現代都市人對於健康目標的期待。
                        </p>
                        <p>
                            結合「精準營養」與「多元運動社群」，我們希望為你提供心理上在飲食的支持。<br />
                            在這條追求理想自我的路上，我們是你最堅強的後盾。
                        </p>
                    </div>

                    {/* === II. THE SHIFT === */}
                    <h1 style={{
                        fontFamily: '"Didot", "Bodoni MT", "Times New Roman", serif',
                        fontSize: '3.5rem',
                        fontWeight: '400',
                        marginBottom: '1rem',
                        color: 'var(--color-midnight-black)',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase'
                    }}>
                        II. THE SHIFT
                        <span style={{ display: 'block', fontSize: '1.5rem', marginTop: '1rem', fontFamily: 'var(--font-body)', fontWeight: '300', letterSpacing: '0.2em' }}>
                            從目標到生活
                        </span>
                    </h1>
                    <div style={{ width: '60px', height: '1px', background: 'var(--color-parakeet-green)', margin: '40px auto' }}></div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '2.4', color: '#333', maxWidth: '720px', margin: '0 auto 80px', textAlign: 'justify', textAlignLast: 'center' }}>
                        <p style={{ marginBottom: '32px' }}>
                            健康不再只是單純的數字增減，而是一種對生活掌控感的追求。<br />
                            從「體態控制」的精準管理，「運動表現」的能量修復，到「純粹飲食」的原型力量。<br />
                            這是現代人健康信仰的三大轉變，也是我們核心關注的課題。
                        </p>
                    </div>

                    {/* === III. THE SOLUTION === */}
                    <h1 style={{
                        fontFamily: '"Didot", "Bodoni MT", "Times New Roman", serif',
                        fontSize: '3.5rem',
                        fontWeight: '400',
                        marginBottom: '1rem',
                        color: 'var(--color-midnight-black)',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase'
                    }}>
                        III. THE SOLUTION
                        <span style={{ display: 'block', fontSize: '1.5rem', marginTop: '1rem', fontFamily: 'var(--font-body)', fontWeight: '300', letterSpacing: '0.2em' }}>
                            解構．重組．進化
                        </span>
                    </h1>
                    <div style={{ width: '60px', height: '1px', background: 'var(--color-parakeet-green)', margin: '40px auto' }}></div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: '2.4', color: '#333', maxWidth: '720px', margin: '0 auto', textAlign: 'justify', textAlignLast: 'center' }}>
                        <p style={{ marginBottom: '32px' }}>
                            為了回應這些高標期待，我們提出了最終解法。<br />
                            透過「Real Food」、「Texture」、「Base」的三位一體，我們將營養學轉化為一場味覺的藝術。<br />
                            一杯 InnerMatter，即能滿足你的身體渴望，同時撫慰你的心靈需求。
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Philosophy;
