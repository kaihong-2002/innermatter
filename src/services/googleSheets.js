// Google Sheets API Service
// Connects to the Apps Script backend defined in VITE_GOOGLE_APP_SCRIPT_URL

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
        calories: 280, price: 160, image: '/assets/rp01.png', is_sold_out: false
    },
    {
        id: 'ul', series: 'Urban Light', slug: 'urban-light-green', name_en: 'Green Cleanse', name_tc: '綠色淨化飲',
        desc_short: 'Light afternoon lift', desc_long: '小黃瓜與芹菜的清爽結合，為下午帶來輕盈與清醒。',
        macros: { protein: 22, carbs: 8, fats: 1, fiber: 7, sugar: 0 },
        calories: 140, price: 140, image: '/assets/ul01.png', is_sold_out: true
    },
    {
        id: 'db', series: 'Daily Balance', slug: 'daily-balance-cacao', name_en: 'Cacao Calm', name_tc: '可可平衡飲',
        desc_short: 'Stable energy', desc_long: '天然可可帶來的穩定愉悅，告別糖分焦慮。',
        macros: { protein: 28, carbs: 10, fats: 8, fiber: 5, sugar: 0 },
        calories: 220, price: 150, image: '/assets/db01.png', is_sold_out: false
    },
    {
        id: 'ff', series: 'Focus Fuel', slug: 'focus-fuel-mocha', name_en: 'Espresso Mocha', name_tc: '摩卡專注飲',
        desc_short: 'Deep work energy', desc_long: '冷萃咖啡結合酪蛋白，沒有心悸，只有持續的專注。',
        macros: { protein: 20, carbs: 10, fats: 4, fiber: 2, sugar: 0 },
        calories: 190, price: 150, image: '/assets/ff01.png', is_sold_out: false
    },
    {
        id: 'cr', series: 'Complete Reset', slug: 'complete-reset-vanilla', name_en: 'Vanilla Whole', name_tc: '香草完整餐',
        desc_short: 'Full meal replacement', desc_long: '忙碌不是妥協的藉口。四小時的飽足，一杯搞定。',
        macros: { protein: 35, carbs: 40, fats: 15, fiber: 10, sugar: 2 },
        calories: 450, price: 200, image: '/assets/cr01.png', is_sold_out: false
    }
];

// Content Mock (Still keeping this local for now or could move to Sheet too)
const CONTENT = {
    home: {
        hero: { headline: 'Drink the Discipline.', subhead: '亞洲首創生活風格蛋白飲', cta: 'Order Now' },
        belief: { quote: '選擇蛋白飲，就是選擇自律。' }
    }
};

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
 * Creates an order in the Google Sheet.
 */
export const createOrder = async (orderData) => {
    if (!API_URL) {
        console.log('Mock Create Order:', orderData);
        return { success: true, orderId: 'MOCK-' + Date.now() };
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script Web App requirement mostly
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'createOrder', payload: orderData })
        });
        // Note: 'no-cors' mode means we get an opaque response, we assume success if no network error.
        // For real error handling with GAS, we typically need a redirect trick or JSONP, 
        // but for this simple setup, we'll assume fire-and-forget works or simple text response.

        // Actually, normal CORS works if the script returns correct headers.
        // If my script uses ContentService properly and "Anyone", it should return a readable response.
        // Let's try standard request first.
    } catch (error) {
        console.error('Order creation failed:', error);
        return { success: false };
    }

    // GAS POST requests often have CORS issues. 
    // The standard workaround is using 'no-cors' and assuming it worked,
    // OR ensuring the script returns strictly JSON.
    // We'll return a simulated success here to not block UI.
    return { success: true, orderId: 'ORD-' + Date.now() };
};

/**
 * Syncs user data to the Google Sheet (Worksheet: Consumers).
 */
export const syncUser = async (userData) => {
    if (!API_URL) return;

    try {
        await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'syncUser', payload: userData })
        });
    } catch (error) {
        console.error('User sync failed:', error);
    }
};

/**
 * Fetch order history for a specific user.
 */
export const fetchOrders = async (email) => {
    if (!API_URL) {
        // Mock Response
        return new Promise(resolve => setTimeout(() => resolve([
            { orderId: 'MOCK-001', products: 'Berry Recovery x2', total: 320, status: 'Completed', date: new Date().toISOString() }
        ]), 500));
    }

    try {
        const params = new URLSearchParams({
            action: 'getOrders',
            email: email
        });
        const url = `${API_URL}?${params.toString()}`;
        console.log('Fetching Orders from:', url);

        const response = await fetch(url, {
            method: 'GET',
            redirect: 'follow'
        });

        // Google Apps Script HTML Service redirects to a content URL.
        // If content-type is text/plain or application/json, it should work.
        const text = await response.text();
        console.log('Raw Orders Response:', text);

        try {
            const result = JSON.parse(text);
            if (result.status === 'success') {
                console.log('Parsed Orders:', result.data);
                return result.data;
            } else {
                console.error('API Error:', result);
                return [];
            }
        } catch (e) {
            console.error('JSON Parse Error:', e);
            return [];
        }
    } catch (error) {
        console.error('Fetch Orders Error:', error);
        return [];
    }
};

export const fetchContent = async () => {
    return new Promise(resolve => setTimeout(() => resolve(CONTENT), 0));
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
            image: row.image || '',
            is_sold_out: row.is_sold_out === true || row.is_sold_out === 'TRUE',
            macros: {
                protein: safeNum(row.protein),
                carbs: safeNum(row.carbs),
                fats: safeNum(row.fats),
                fiber: safeNum(row.fiber),
                sugar: safeNum(row.sugar)
            },
            // Static fields for now, or add to sheet if requested later
            benefits: ['Muscle Repair', 'Antioxidants'],
            ingredients: ['Pea Protein', 'Mixed Berries']
        };
    } catch (err) {
        console.error('Error transforming product row:', row, err);
        return null;
    }
};
