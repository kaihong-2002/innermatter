import React, { useState, useEffect, useRef } from 'react';
import '../styles/vogue-carousel.css';
import { getAssetPath } from '../utils/assets';

const IMAGES = [
    getAssetPath('/assets/vogue_panoramic_sage_texture_retry_1767545912658.png'),
    getAssetPath('/assets/vogue_panoramic_smoothie_art_1767545865355.png'),
    getAssetPath('/assets/vogue_panoramic_liquid_motion_1767545885894.png')
];

const VogueCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // 5 seconds auto-slide

        return () => resetTimeout();
    }, [activeIndex]);

    const scrollTo = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="vogue-carousel-frame">
            {/* Slides Container */}
            <div style={{
                whiteSpace: 'nowrap',
                height: '100%',
                transform: `translateX(${-activeIndex * 100}%)`,
                transition: 'transform 1000ms ease-in-out'
            }}>
                {IMAGES.map((src, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }}>
                        <img
                            src={src}
                            alt={`Vogue Slide ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) contrast(1.1)' // Slight vogue retouch
                            }}
                        />
                        {/* Overlay Text (Optional, removing for pure image focus as requested, but can be added) */}
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={() => scrollTo(activeIndex === 0 ? IMAGES.length - 1 : activeIndex - 1)}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '24px',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    opacity: 0.7,
                    transition: 'opacity 0.2s',
                    zIndex: 10
                }}
            >
                ←
            </button>
            <button
                onClick={() => scrollTo(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '24px',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    opacity: 0.7,
                    transition: 'opacity 0.2s',
                    zIndex: 10
                }}
            >
                →
            </button>

            {/* Indicators */}
            <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '12px',
                zIndex: 10
            }}>
                {IMAGES.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => scrollTo(index)}
                        style={{
                            width: activeIndex === index ? '32px' : '8px',
                            height: '4px',
                            backgroundColor: 'white',
                            opacity: activeIndex === index ? 1 : 0.4,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default VogueCarousel;
