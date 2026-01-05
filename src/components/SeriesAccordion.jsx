import React, { useState } from 'react';
import '../styles/accordion.css';

const SERIES_DATA = [
    {
        id: 'rp',
        title: 'Reset Power',
        tagline: 'Recovery Ritual',
        description: '專為高強度運動後的黃金修復期設計。35g 高純度分離乳清，極速補給受損肌肉，消除疲勞感。這是你重返強大的關鍵儀式。',
        suitableFor: '重度運動者 / 追求肌肉線條 / 易疲勞體質',
        specs: 'Protein 35g | Sugar <6g',
        color: '#8B747F', // Muted Mauve (Complimentary to Sage)
        image: 'url("/assets/texture_reset_power.png")'
    },
    {
        id: 'ul',
        title: 'Urban Light',
        tagline: 'Afternoon Lift',
        description: '拒絕午後的沉重與水腫。輕量級蛋白配方，添加高纖與植化素，讓你保持輕盈體感，優雅應對忙碌日程。',
        suitableFor: '久坐上班族 / 易水腫體質 / 下午茶愛好者',
        specs: 'Low Cal | Fiber 8g',
        color: '#748B6F', // Sage Green (Brand Core)
        image: 'url("/assets/texture_urban_light.png")'
    },
    {
        id: 'db',
        title: 'Daily Balance',
        tagline: 'New Habit',
        description: '建立健康習慣的起點。穩定的優質油脂與植物性蛋白，撫平飢餓時的焦慮，為身心帶來平靜的能量流動。',
        suitableFor: '飲食不規律者 / 養生入門 / 素食友善',
        specs: 'Good Fats | Stable',
        color: '#8B8574', // Warm Stone/Taupe
        image: 'linear-gradient(to bottom right, #F5F1EB, #D8CFBE)' // Clean Sand Gradient
    },
    {
        id: 'ff',
        title: 'Focus Fuel',
        tagline: 'Deep Work',
        description: '當你需要絕對專注時的燃料。結合天然咖啡因與腦磷脂，提升思緒清晰度，讓你進入高效心流狀態。',
        suitableFor: '高壓腦力工作者 / 考生 / 需要熬夜者',
        specs: 'Caffeine 100mg',
        color: '#8B7D74', // Muted Clay/Bronze
        image: 'linear-gradient(to bottom right, #EBE6E1, #BFAFA0)' // Clean Bronze Gradient
    },
    {
        id: 'cr',
        title: 'Complete Reset',
        tagline: 'Full Meal',
        description: '繁忙時刻的完美代餐。一份即包含人體所需全營養，無需在便利商店妥協。高效、精準、完整的能量管理。',
        suitableFor: '忙碌商務人士 / 嚴格飲控者 / 戶外活動者',
        specs: '400 Cal | Complete',
        color: '#D9D9D6', // Mist Grey/Cream
        image: 'url("/assets/texture_complete_reset.png")'
    }
];

import { Link, useNavigate } from 'react-router-dom';

const SeriesAccordion = () => {
    // Navigate hook for programmatic navigation if needed, or just use Link
    return (
        <section className="series-section" id="products">
            <div className="accordion-container">
                {SERIES_DATA.map((series) => (
                    <div
                        key={series.id}
                        className="accordion-item"
                        style={{ backgroundImage: series.image }}
                    >
                        {/* Fallback color if image fails or layered */}
                        <div className="accordion-bg" style={{ backgroundColor: series.color, opacity: 0.2 }}></div>

                        <div className="accordion-content">
                            <h3 className="accordion-title">{series.title}</h3>
                            <div className="accordion-details">
                                <p style={{ fontStyle: 'italic', marginBottom: '16px', fontSize: '1.25rem', fontFamily: 'serif', color: '#111', fontWeight: '600' }}>{series.tagline}</p>

                                <p className="accordion-desc" style={{
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    maxWidth: '280px', // Limit width for readability
                                    fontFamily: 'var(--font-body)',
                                    color: '#000',
                                    fontWeight: '500'
                                }}>
                                    {series.description}
                                </p>

                                {/* Suitable For Section */}
                                <div style={{ marginBottom: '24px' }}>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '0.75rem',
                                        color: '#000',
                                        fontWeight: '800',
                                        letterSpacing: '0.1em',
                                        marginBottom: '6px',
                                        textTransform: 'uppercase'
                                    }}>
                                        Be Suitable For
                                    </span>
                                    <p style={{ fontSize: '0.95rem', color: '#000', fontWeight: '600' }}>
                                        {series.suitableFor}
                                    </p>
                                </div>

                                <div className="accordion-specs" style={{ color: '#000', fontWeight: '700' }}>
                                    {series.specs}
                                </div>
                                {/* Scroll to shop and set query param */}
                                <a href={`#series-${series.title.replace(/\s+/g, '-')}`} className="btn-explore" style={{ textDecoration: 'none', textAlign: 'center' }}>
                                    View Products
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SeriesAccordion;
