# Google Sheets 初始資料 (Mock Data) v3

請將以下資料複製到對應的最新版工作表。

## 1. Products (產品工作表)
**分頁名稱**: `Products`
**欄位**: id, series, name_en, name_tc, desc_short, desc_long, protein, carbs, fats, calories, price, image, is_sold_out

| id | series | name_en | name_tc | desc_short | desc_long | protein | carbs | fats | calories | price | image | is_sold_out |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| rp | Reset Power | Berry Recovery | 莓果修復飲 | Post-workout repair | 酸甜莓果口感，富含抗氧化劑，是運動後的最佳修復儀式。 | 32 | 15 | 2 | 280 | 160 | /assets/rp01.png | FALSE |
| ul | Urban Light | Green Cleanse | 綠色淨化飲 | Light afternoon lift | 小黃瓜與芹菜的清爽結合，為下午帶來輕盈與清醒。 | 22 | 8 | 1 | 140 | 140 | /assets/ul01.png | TRUE |
| db | Daily Balance | Cacao Calm | 可可平衡飲 | Stable energy | 天然可可帶來的穩定愉悅，告別糖分焦慮。 | 28 | 10 | 8 | 220 | 150 | /assets/db01.png | FALSE |
| ff | Focus Fuel | Espresso Mocha | 摩卡專注飲 | Deep work energy | 冷萃咖啡結合酪蛋白，沒有心悸，只有持續的專注。 | 20 | 10 | 4 | 190 | 150 | /assets/ff01.png | FALSE |
| cr | Complete Reset | Vanilla Whole | 香草完整餐 | Full meal replacement | 忙碌不是妥協的藉口。四小時的飽足，一杯搞定。 | 35 | 40 | 15 | 450 | 200 | /assets/cr01.png | FALSE |

---

## 2. Consumers (消費者工作表)
**分頁名稱**: `Consumers`
**欄位**: UserID, Email, Name, Phone, Address, LastLogin

| UserID | Email | Name | Phone | Address | LastLogin |
| :--- | :--- | :--- | :--- | :--- | :--- |
| U001 | alice@example.com | Alice Chen | 0912345678 | Taipei City | 2024-12-01 |
| U002 | bob@test.com | Bob Lin | 0987654321 | New Taipei | 2024-12-15 |

---

## 3. Orders (消費工作表)
**分頁名稱**: `Orders`
**欄位**: OrderID, Customer (Who), Products (What), Price (Total), Status, Date, RawData

| OrderID | Customer (Who) | Products (What) | Price (Total) | Status | Date | RawData |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ORD-01 | alice@example.com | Berry Recovery x2, Green Cleanse x1 | 460 | Completed | 2025-01-01 | ... |
| ORD-02 | bob@test.com | Espresso Mocha x2 | 300 | Pending | 2025-01-02 | ... |
