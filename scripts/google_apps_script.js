/**
 * Google Apps Script for InnerMatter Backend
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Copy/Paste this entire code
 * 4. Run setupSheet() once to create headers
 * 5. Deploy as Web App (Who has access: Anyone)
 */

// Configuration
const SHEET_PRODUCTS = 'Products';
const SHEET_CONTACTS = 'Contacts';

// 1. SETUP FUNCTION (Run once in Editor)
function setupSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Setup Products Sheet
    let pSheet = ss.getSheetByName(SHEET_PRODUCTS);
    if (!pSheet) {
        pSheet = ss.insertSheet(SHEET_PRODUCTS);
        pSheet.appendRow([
            'id', 'series', 'name_en', 'name_tc', 'desc_short', 'desc_long',
            'protein', 'carbs', 'fats', 'calories', 'price', 'image', 'is_sold_out',
            'ingredients', 'benefits'
        ]);
    }

    // Setup Contacts Sheet (New!)
    let cSheet = ss.getSheetByName(SHEET_CONTACTS);
    if (!cSheet) {
        cSheet = ss.insertSheet(SHEET_CONTACTS);
        cSheet.appendRow(['Date', 'Name', 'Email', 'Message', 'Status']);
    }
}

// 2. WEB APP HANDLERS (doGet / doPost)

function doGet(e) {
    const action = e.parameter.action;

    if (action === 'getProducts') {
        return getProducts();
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid action' }))
        .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        const action = data.action;

        if (action === 'submitContact') {
            return handleContactSubmission(data.payload);
        }

        return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid action' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// 3. CORE LOGIC

function getProducts() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_PRODUCTS);
    const rows = sheet.getDataRange().getValues();
    const headers = rows[0];
    const data = [];

    for (let i = 1; i < rows.length; i++) {
        let row = {};
        for (let j = 0; j < headers.length; j++) {
            row[headers[j]] = rows[i][j];
        }
        data.push(row);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: data }))
        .setMimeType(ContentService.MimeType.JSON);
}

function handleContactSubmission(payload) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_CONTACTS);

    if (!sheet) {
        return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Contacts sheet missing' }))
            .setMimeType(ContentService.MimeType.JSON);
    }

    // Append Row: Date, Name, Email, Message, Status
    sheet.appendRow([
        new Date(),
        payload.name,
        payload.email,
        payload.message,
        'New'
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Message sent' }))
        .setMimeType(ContentService.MimeType.JSON);
}
