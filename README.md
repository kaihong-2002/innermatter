# InnerMatter 前端與後端設定指南

本專案使用 **React (Vite)** 作為前端，並結合 **Google Sheets + Google Apps Script** 作為您的後臺資料庫。

## 1. Google Sheets 後端設定 (由您建立)

這部分是您需要手動操作的核心，請依照您的需求，我們設計了三個特定的工作表。

### 步驟 1：建立試算表
1.  前往 [Google Sheets](https://sheets.google.com) 建立新表，命名為 `InnerMatter DB`。
2.  建立以下三個 **工作表 (Worksheets)**，名稱請完全一致：

#### **1. Products (產品工作表)**
這裡存放您要在網站上使用顯示的商品資訊。
*   **用途**：讓您管理系列、名稱、描述、營養標示。
*   **必要欄位 (第一列標題)**：
    *   `series` (系列名稱)
    *   `name_tc` (產品名字)
    *   `desc_long` (文字描述)
    *   `protein` (營養素：蛋白質)
    *   `carbs` (營養素：碳水)
    *   `fats` (營養素：脂肪)
    *   `calories` (營養素：熱量)
    *   `ingredients` (成分)
    *   `benefits` (效益)
    *   以及系統需要的：`id`, `name_en`, `desc_short`, `price`, `image`, `is_sold_out`。
    
#### **2. Contacts (聯絡清單工作表)**
這裡存放來自「Contact Us」頁面的訪客留言。
*   **用途**：收集潛在客戶的訊息。
*   **欄位 (系統自動寫入)**：`Date`, `Name`, `Email`, `Message`, `Status`。

---

### 步驟 2：部署 Apps Script (橋接器)

1.  在試算表中點擊 **擴充功能 (Extensions) > Apps Script**。
2.  將 `scripts/google_apps_script.js` (請見專案檔案) 的內容**全選複製**並貼入編輯器（取代原本的內容）。
3.  **執行 `setupSheet` 函式**：它會幫您自動建立缺少的 `Contacts` 工作表。
4.  點擊 **部署 (Deploy) > 新增部署 > 網頁應用程式 (Web App)**。
    *   **權限**：Who has access 務必設為 **Anyone (任何人)**。
5.  複製 **Web App URL** 並更新到 `.env` 檔案中。

---

## 2. 環境變數設定

為了連接您的 Google Sheet，我們需要設定環境變數。

1.  在專案根目錄建立 `.env` 檔案。
2.  輸入以下內容，並填入您剛剛複製的網址：

```env
# Google Apps Script 的後端連結
VITE_GOOGLE_APP_SCRIPT_URL=https://script.google.com/macros/s/您的ID/exec
```

*注意：在 React (Vite) 專案中，環境變數必須以 `VITE_` 開頭，前端程式碼才能讀取。因此這裡我們將參數命名為 `VITE_GOOGLE_APP_SCRIPT_URL`。*

---

## 3. 專案啟動 (前端)

```bash
npm install  # 安裝依賴
npm run dev  # 啟動網站
```

啟動後，網頁將會自動抓取您在 `Products` 工作表中輸入的資料。當消費者下單時，資料也會自動寫入 `Orders` 與 `Consumers` 工作表。

---

## 4. 自動化部署 (GitHub Pages)

本專案已設定好 **GitHub Actions**，當您推送程式碼到 `main` 分支時，會自動部署到 GitHub Pages。

### 設定步驟

#### 1. 設定 GitHub Secrets (必要)
由於專案需要連接 Google Apps Script，您必須在 GitHub 上設定環境變數：

1.  進入您的 GitHub 儲存庫 (Repo) 頁面。
2.  點擊上方選單的 **Settings**。
3.  左側選單找到 **Secrets and variables** > **Actions**。
4.  點擊 **New repository secret** 按鈕。
5.  **Name (名稱)**：輸入 `VITE_GOOGLE_APP_SCRIPT_URL`
6.  **Value (值)**：貼上您的 Google Apps Script 網址 (即 `.env` 中的內容)。
7.  點擊 **Add secret** 儲存。

#### 2. 開啟 GitHub Pages 來源
1.  點擊 **Settings** > **Pages**。
2.  在 **Build and deployment** 下方的 **Source** 選單中，選擇 **GitHub Actions**。


### 開始部署
完成上述設定後，只要執行 `git push origin main`，GitHub Actions 就會自動開始建置並部署您的網站！

