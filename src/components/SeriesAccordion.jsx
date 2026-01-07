import React, { useState } from 'react';
import '../styles/accordion.css';
import { getAssetPath } from '../utils/assets';

const SERIES_DATA = [
    {
        id: 'rp',
        title: 'Reset Power',
        tagline: 'Recovery Ritual',
        description: '專為高強度運動後的黃金修復期設計。35g 高純度分離乳清，極速補給受損肌肉，消除疲勞感。這是你重返強大的關鍵儀式。',
        suitableFor: '重度運動者 / 追求肌肉線條 / 易疲勞體質',
        specs: 'Protein 35g | Sugar <6g',
        color: '#7E9689', // Sage Green
        image: 'texture_reset_power.png'
    },
    {
        id: 'ul',
        title: 'Urban Light',
        tagline: 'Afternoon Lift',
        description: '拒絕午後的沉重與水腫。輕量級蛋白配方，添加高纖與植化素，讓你保持輕盈體感，優雅應對忙碌日程。',
        suitableFor: '久坐上班族 / 易水腫體質 / 下午茶愛好者',
        specs: 'Low Cal | Fiber 8g',
        color: '#CFC0A5', // Warm Sand (Yellowish)
        image: 'texture_urban_light.png'
    },
    {
        id: 'db',
        title: 'Daily Balance',
        tagline: 'New Habit',
        description: '建立健康習慣的起點。穩定的優質油脂與植物性蛋白，撫平飢餓時的焦慮，為身心帶來平靜的能量流動。',
        suitableFor: '飲食不規律者 / 養生入門 / 素食友善',
        specs: 'Good Fats | Stable',
        color: '#95A9B8', // Steel Blue
        image: 'texture_balance_daily.png'
    },
    {
        id: 'ff',
        title: 'Focus Fuel',
        tagline: 'Deep Work',
        description: '當你需要絕對專注時的燃料。結合天然咖啡因與腦磷脂，提升思緒清晰度，讓你進入高效心流狀態。',
        suitableFor: '高壓腦力工作者 / 考生 / 需要熬夜者',
        specs: 'Caffeine 100mg',
        color: '#BCACA4', // Warm Clay (Reddish)
        image: 'texture_focus_fuel.png'
    },
    {
        id: 'cr',
        title: 'Complete Reset',
        tagline: 'Full Meal',
        description: '繁忙時刻的完美代餐。一份即包含人體所需全營養，無需在便利商店妥協。高效、精準、完整的能量管理。',
        suitableFor: '忙碌商務人士 / 嚴格飲控者 / 戶外活動者',
        specs: '400 Cal | Complete',
        color: '#A8A8A8', // Neutral Grey
        image: 'texture_complete_reset.png'
    }
];

import { Link, useNavigate } from 'react-router-dom';

const SeriesAccordion = () => {
    // Internal state for mobile click-to-expand interaction
    // This replaces strict hover on mobile which is flaky during scrolling
    const [mobileActiveId, setMobileActiveId] = useState(null);

    const handleItemClick = (id) => {
        // Toggle: close if open, otherwise open
        setMobileActiveId(prev => prev === id ? null : id);
    };

    const handleScrollToSeries = (e, title) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = `series-${title.replace(/\s+/g, '-')}`;
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="series-section" id="products" style={{ backgroundColor: '#EAE6E1', padding: '100px 0 80px', transition: 'background-color 0.5s ease' }}>

            {/* Intro Text for Series - Restored based on user request */}
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center', padding: '0 24px' }}>
                <h3 style={{
                    fontSize: '2rem',
                    fontFamily: '"Didot", serif',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                    color: '#2c2c2c'
                }}>
                    Curated for your Rhythm.
                </h3>
                <p style={{
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: '#555',
                    marginBottom: '16px'
                }}>
                    你的身體在清晨需要的喚醒，與睡前渴望的平靜截然不同。
                </p>
                <p style={{
                    fontFamily: '"Lato", sans-serif',
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    color: '#555'
                }}>
                    我們不相信一套配方能解決所有問題。因此，InnerMatter 針對現代人一日中的<strong>「五種關鍵生理時刻」</strong>，
                    設計出五款營養光譜截然不同的健康飲品，只為精準回應你身體當下的每一次呼喚。
                </p>
            </div>

            {/* Desktop / Tablet List View */}
            <div className="accordion-container desktop-only-accordion">
                {SERIES_DATA.map((series) => (
                    <div
                        key={series.id}
                        id={`accordion-${series.id}`}
                        className={`accordion-item ${mobileActiveId === series.id ? 'active' : ''}`}
                        style={{
                            background: series.image !== 'none'
                                ? `linear-gradient(${series.color}D9, ${series.color}D9), url(${getAssetPath(`/assets/${series.image}`)}) center/cover no-repeat`
                                : series.color
                        }}
                        onClick={() => handleItemClick(series.id)}
                    >
                        <div className="accordion-content">
                            <h3 className="accordion-title" style={{ background: 'rgba(255,255,255,0.2)', color: '#1a1a1a', fontFamily: '"Cinzel", serif' }}>{series.title}</h3>
                            <div className="accordion-details">
                                <p style={{ fontStyle: 'italic', marginBottom: '16px', fontSize: '1.25rem', fontFamily: '"Didot", serif', color: '#111', fontWeight: '600' }}>{series.tagline}</p>

                                <p className="accordion-desc" style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    maxWidth: '280px',
                                    fontFamily: '"Lato", sans-serif',
                                    color: '#000',
                                    fontWeight: '500'
                                }}>
                                    {series.description}
                                </p>

                                {/* Suitable For */}
                                <div style={{ marginBottom: '24px' }}>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '0.75rem',
                                        color: '#000',
                                        fontWeight: '800',
                                        letterSpacing: '0.1em',
                                        marginBottom: '6px',
                                        textTransform: 'uppercase',
                                        fontFamily: '"Lato", sans-serif'
                                    }}>
                                        Be Suitable For
                                    </span>
                                    <p style={{ fontSize: '0.95rem', color: '#000', fontWeight: '600', fontFamily: '"Lato", sans-serif' }}>
                                        {series.suitableFor}
                                    </p>
                                </div>

                                <div className="accordion-specs" style={{ color: '#000', fontWeight: '700', fontFamily: '"Cinzel", serif' }}>
                                    {series.specs}
                                </div>
                                <button
                                    onClick={(e) => handleScrollToSeries(e, series.title)}
                                    className="btn-explore"
                                    style={{
                                        textDecoration: 'none',
                                        textAlign: 'center',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                        fontFamily: '"Lato", sans-serif',
                                        border: '1px solid #000',
                                        color: '#000',
                                        padding: '8px 16px',
                                        marginTop: '12px'
                                    }}
                                >
                                    View Products
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Pentagon View */}
            <div className="mobile-pentagon-container">
                <div className="pentagon-wrapper">
                    {/* Center Content */}
                    <div className={`pentagon-center-content ${mobileActiveId ? 'active' : ''}`}>
                        {mobileActiveId ? (() => {
                            const activeSeries = SERIES_DATA.find(s => s.id === mobileActiveId);
                            return (
                                <>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#1a261b', fontFamily: '"Cinzel", serif' }}>{activeSeries.title}</h3>
                                    <div style={{ width: '40px', height: '2px', background: activeSeries.color, margin: '0 auto 12px' }}></div>
                                    <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#444', marginBottom: '16px', fontFamily: '"Lato", sans-serif' }}>{activeSeries.description}</p>
                                    <button
                                        onClick={(e) => handleScrollToSeries(e, activeSeries.title)}
                                        className="btn-explore"
                                        style={{
                                            fontSize: '0.7rem',
                                            padding: '6px 12px',
                                            cursor: 'pointer',
                                            background: 'transparent',
                                            fontFamily: '"Lato", sans-serif'
                                        }}
                                    >
                                        View Products
                                    </button>
                                </>
                            );
                        })() : (
                            <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', fontFamily: '"Lato", sans-serif' }}>Tap a circle to explore</p>
                        )}
                    </div>

                    {/* 5 Nodes */}
                    {SERIES_DATA.map((series, index) => {
                        // Calculate position on a circle
                        // Start from top (-90deg). Index 0 = Top.
                        const total = 5;
                        const angle = (index * (360 / total)) - 90;
                        const radius = 140; // px
                        // Convert polar to cartesian
                        // x = r * cos(theta)
                        // y = r * sin(theta)
                        const radian = (angle * Math.PI) / 180;
                        const x = Math.cos(radian) * radius;
                        const y = Math.sin(radian) * radius;

                        return (
                            <div
                                key={series.id}
                                className={`pentagon-node ${mobileActiveId === series.id ? 'active' : ''}`}
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                    background: series.color,
                                    backgroundImage: series.image !== 'none'
                                        ? `linear-gradient(${series.color}D9, ${series.color}D9), url(${getAssetPath(`/assets/${series.image}`)})`
                                        : series.color,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                                onClick={() => handleItemClick(series.id)}
                            >
                                <span className="node-label" style={{ fontFamily: '"Cinzel", serif' }}>{series.title.split(' ')[0]}</span> {/* Show first word */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SeriesAccordion;
