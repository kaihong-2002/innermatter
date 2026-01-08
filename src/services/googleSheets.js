// Google Sheets API Service
// Connects to the Apps Script backend defined in VITE_GOOGLE_APP_SCRIPT_URL
import { getAssetPath } from '../utils/assets';

// Use proxy in development to avoid CORS issues
const API_URL = import.meta.env.DEV
    ? '/api/gas'
    : import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL;

// Fallback Mock Data (User for development if API is not set)
const MOCK_PRODUCTS = [
    {
        id: 'rp', series: 'Reset Power', slug: 'reset-power-berry', name_en: 'Berry Recovery', name_tc: '莓果修復飲',
        desc_short: 'Post-workout repair', desc_long: '酸甜莓果口感，富含抗氧化劑，是運動後的最佳修復儀式。',
        macros: { protein: 32, carbs: 15, fats: 2, fiber: 4, sugar: 0 },
        calories: 280, price: 160, image: getAssetPath('/assets/rp01.png'), is_sold_out: false,
        ingredients: ['Hydrolyzed Pea Protein', 'Mixed Berry Extract', 'Tart Cherry', 'Vitamin C'],
        benefits: ['Accelerates Muscle Recovery', 'Reduces Inflammation', 'Antioxidant Support']
    },
    {
        id: 'ul', series: 'Urban Light', slug: 'urban-light-green', name_en: 'Green Cleanse', name_tc: '綠色淨化飲',
        desc_short: 'Light afternoon lift', desc_long: '小黃瓜與芹菜的清爽結合，為下午帶來輕盈與清醒。',
        macros: { protein: 22, carbs: 8, fats: 1, fiber: 7, sugar: 0 },
        calories: 140, price: 140, image: getAssetPath('/assets/ul01.png'), is_sold_out: true,
        ingredients: ['Pea Protein Isolate', 'Cucumber Extract', 'Celery Powder', 'Lemon Zest', 'Spinach'],
        benefits: ['Digestive Aid', 'Heavy Metal Detox', 'Hydration Support']
    },
    {
        id: 'db', series: 'Daily Balance', slug: 'daily-balance-cacao', name_en: 'Cacao Calm', name_tc: '可可平衡飲',
        desc_short: 'Stable energy', desc_long: '天然可可帶來的穩定愉悅，告別糖分焦慮。',
        macros: { protein: 28, carbs: 10, fats: 8, fiber: 5, sugar: 0 },
        calories: 220, price: 150, image: getAssetPath('/assets/db01.png'), is_sold_out: false,
        ingredients: ['Raw Cacao Powder', 'Maca Root', 'Pea Protein', 'Monk Fruit', 'Himalayan Salt'],
        benefits: ['Mood Stabilization', 'Sustainable Energy', 'Curbing Cravings']
    },
    {
        id: 'ff', series: 'Focus Fuel', slug: 'focus-fuel-mocha', name_en: 'Espresso Mocha', name_tc: '摩卡專注飲',
        desc_short: 'Deep work energy', desc_long: '冷萃咖啡結合酪蛋白，沒有心悸，只有持續的專注。',
        macros: { protein: 20, carbs: 10, fats: 4, fiber: 2, sugar: 0 },
        calories: 190, price: 150, image: getAssetPath('/assets/ff01.png'), is_sold_out: false,
        ingredients: ['Cold Brew Coffee Extract', 'MCT Oil Powder', 'Lion\'s Mane Mushroom', 'L-Theanine'],
        benefits: ['Enhanced Mental Clarity', 'Sustained Focus', 'No Caffeine Jitters']
    },
    {
        id: 'cr', series: 'Complete Reset', slug: 'complete-reset-vanilla', name_en: 'Vanilla Whole', name_tc: '香草完整餐',
        desc_short: 'Full meal replacement', desc_long: '忙碌不是妥協的藉口。六小時的飽足，一杯搞定。',
        macros: { protein: 35, carbs: 40, fats: 15, fiber: 10, sugar: 2 },
        calories: 450, price: 200, image: getAssetPath('/assets/cr01.png'), is_sold_out: false,
        ingredients: ['Premium Plant Protein', 'Oat Powder', 'Flaxseed', 'Vanilla Bean Extract', 'Multivitamin Blend'],
        benefits: ['Complete Meal Replacement', 'Sustained Satiety', 'Balanced Nutrition']
    }
];

/**
 * Fetch products from Google Sheet.
 * Maps the flat sheet columns back to the application's nested structure.
 */
export const fetchProducts = async () => {
    if (!API_URL) {
        console.warn('Google Apps Script URL not set. Using Mock Data.');
        return new Promise(resolve => setTimeout(() => resolve(MOCK_PRODUCTS), 500));
    }

    try {
        const response = await fetch(`${API_URL}?action=getProducts`);
        const result = await response.json();

        if (result.status === 'success') {
            console.log('Google Sheet Data Fetched:', result.data);
            return result.data
                .map(transformProduct)
                .filter(p => p !== null); // Filter out failed transforms
        } else {
            console.error('API Error (returning Mock Data):', result);
            return MOCK_PRODUCTS;
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        return MOCK_PRODUCTS;
    }
};

/**
 * Submit Contact Form to Google Sheet
 */
export const submitContact = async (formData) => {
    // formData: { name, email, message }
    if (!API_URL) {
        console.log('Mock Submit Contact:', formData);
        return new Promise(resolve => setTimeout(() => resolve({ success: true }), 800));
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'submitContact', payload: formData })
        });

        // Assume success due to no-cors opacity
        return { success: true };
    } catch (error) {
        console.error('Contact submit failed:', error);
        return { success: false };
    }
};

// Helper to transform flat sheet row to nested object
const transformProduct = (row) => {
    if (!row) return null;

    // Safety for numeric conversion
    const safeNum = (val) => {
        const n = Number(val);
        return isNaN(n) ? 0 : n;
    };

    try {
        return {
            id: row.id || 'unknown',
            series: row.series || 'Unknown Series',
            slug: row.slug || row.id || 'unknown-slug',
            name_en: row.name_en || 'Unnamed Product',
            name_tc: row.name_tc || '',
            desc_short: row.desc_short || '',
            desc_long: row.desc_long || '',
            price: safeNum(row.price),
            calories: safeNum(row.calories),
            image: getAssetPath(row.image) || '',
            is_sold_out: row.is_sold_out === true || row.is_sold_out === 'TRUE',
            macros: {
                protein: safeNum(row.protein),
                carbs: safeNum(row.carbs),
                fats: safeNum(row.fats),
                fiber: safeNum(row.fiber),
                sugar: safeNum(row.sugar)
            },
            ingredients: row.ingredients
                ? row.ingredients.toString().split(',').map(s => s.trim())
                : ['Premium Plant Protein', 'Natural Flavorings'],
            benefits: row.benefits
                ? row.benefits.toString().split(',').map(s => s.trim())
                : ['Muscle Repair', 'Antioxidants']
        };
    } catch (err) {
        console.error('Error transforming product row:', row, err);
        return null;
    }
};
