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
        color: '#7E9689', // Sage Green
        image: 'none'
    },
    {
        id: 'ul',
        title: 'Urban Light',
        tagline: 'Afternoon Lift',
        description: '拒絕午後的沉重與水腫。輕量級蛋白配方，添加高纖與植化素，讓你保持輕盈體感，優雅應對忙碌日程。',
        suitableFor: '久坐上班族 / 易水腫體質 / 下午茶愛好者',
        specs: 'Low Cal | Fiber 8g',
        color: '#CFC0A5', // Warm Sand (Yellowish)
        image: 'none'
    },
    {
        id: 'db',
        title: 'Daily Balance',
        tagline: 'New Habit',
        description: '建立健康習慣的起點。穩定的優質油脂與植物性蛋白，撫平飢餓時的焦慮，為身心帶來平靜的能量流動。',
        suitableFor: '飲食不規律者 / 養生入門 / 素食友善',
        specs: 'Good Fats | Stable',
        color: '#95A9B8', // Steel Blue
        image: 'none'
    },
    {
        id: 'ff',
        title: 'Focus Fuel',
        tagline: 'Deep Work',
        description: '當你需要絕對專注時的燃料。結合天然咖啡因與腦磷脂，提升思緒清晰度，讓你進入高效心流狀態。',
        suitableFor: '高壓腦力工作者 / 考生 / 需要熬夜者',
        specs: 'Caffeine 100mg',
        color: '#BCACA4', // Warm Clay (Reddish)
        image: 'none'
    },
    {
        id: 'cr',
        title: 'Complete Reset',
        tagline: 'Full Meal',
        description: '繁忙時刻的完美代餐。一份即包含人體所需全營養，無需在便利商店妥協。高效、精準、完整的能量管理。',
        suitableFor: '忙碌商務人士 / 嚴格飲控者 / 戶外活動者',
        specs: '400 Cal | Complete',
        color: '#A8A8A8', // Neutral Grey
        image: 'none'
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

    return (
        <section className="series-section" id="products">
            <div className="accordion-container">
                {SERIES_DATA.map((series) => (
                    <div
                        key={series.id}
                        id={`accordion-${series.id}`} // Unique ID for scroll targeting
                        className={`accordion-item ${mobileActiveId === series.id ? 'active' : ''}`}
                        style={{ background: series.color }} // Forced background color
                        onClick={() => handleItemClick(series.id)}
                    >
                        {/* Removed the white gradient overlay div entirely to let color shine */}

                        <div className="accordion-content">
                            <h3 className="accordion-title" style={{ background: 'rgba(255,255,255,0.4)' }}>{series.title}</h3>
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
