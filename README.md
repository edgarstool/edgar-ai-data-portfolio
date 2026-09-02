# Edgar｜AI 資料整理與研究樣本

一個零額外月費的靜態作品集網站，用來展示 Edgar 將混亂資料整理成可用交付物的五個實作樣本。

網站只使用 HTML、CSS、少量瀏覽器端 JavaScript；不需要資料庫、後端、API 金鑰或付費服務。每張案例卡都有 **Before / Process / After / Deliverables / Value**，並直接連至既有 Google Drive 成果。

## 真實性與資料界線

| Sample | 資料性質 | 公開成果 |
| --- | --- | --- |
| 01 小商家商品髒資料 | 模擬常見需求，非客戶案例 | [Google Sheet](https://docs.google.com/spreadsheets/d/1-KWOwh9DfVdkxzV4M8x4w6DUUhqOyAVRiLaB81ceYrM/edit) |
| 02 政府 PDF 摘要 | 公開政府文件 | [Google Doc](https://docs.google.com/document/d/1Rtj__-muD-hp2OMHQd0YR00T_bqe_6tWvY1kZY6E9Q0/edit) |
| 03 會議文字轉 SOP | 情境樣本，非客戶案例 | [Google Doc](https://docs.google.com/document/d/1MPhtZEXBhWeOn6ms-lePXxocsWELVYB3h0syfngS7L8/edit) |
| 04 雲端資料庫研究 | 公開官方網站研究 | [Google Sheet](https://docs.google.com/spreadsheets/d/1mWux2I1Bu5zK_X6xvHXXnUgHoT-OSzPYWMsFvCiS3-A/edit) |
| 05 Google Drive 整理 | 情境樣本（實際執行），非客戶案例 | [Google Drive 資料夾](https://drive.google.com/drive/folders/1_jC-dPkWlBlALfJhSaqznx3n4sMSW1-a) |

Google Drive 的分享權限由原始成果擁有者管理；若公開網站上的連結顯示存取要求，請將該成果設定為「知道連結的使用者可以查看」，再重新測試。

## 本機預覽

不需安裝任何相依套件。可直接開啟 `index.html`，或在專案根目錄執行：

```powershell
python -m http.server 4173
```

接著瀏覽 `http://localhost:4173`。

## 部署到既有 Cloudflare 帳號（免費）

此專案採 Cloudflare Pages / Cloudflare Pages 靜態網站托管：把這個資料夾發布為 CDN 網站，不需要伺服器。

前提：本機已登入 `wrangler`，且使用的是 Edgar 現有 Cloudflare 帳號。

```powershell
cd V:\projects\edgar-ai-data-portfolio
wrangler pages deploy . --project-name edgar-ai-data-portfolio
```

命令完成後會輸出 `*.pages.dev` 的公開網址。若目前 Wrangler 版本沒有自動建立同名 Pages 專案，先在 Cloudflare Pages 建立同名專案後再重跑命令。這是外部公開部署；執行前應先確認五個 Google Drive 連結均可公開查看。

### 使用既有網域（選做，需明確核准）

不要在未確認前變更 `edgars.tools` 或任何既有 DNS。等 `pages.dev` 驗收完成後，才在 Cloudflare Pages 的 Custom domains 加上一個未使用的子網域，例如 `data.edgars.tools`；Cloudflare 會顯示需要建立的 DNS 記錄與衝突資訊。這一步會修改公開 DNS，因此不包含在本次預設部署流程。

## 驗收清單

- 首屏 30 秒內能說明「AI 資料整理與研究」及五個實作案例。
- 五張卡片都列出 Before、Process、After／Deliverables、Value。
- 五個「查看完成」按鈕各自指向本 README 列出的 Google Drive 成果。
- 案例篩選按鈕能切換案例顯示。
- 在窄螢幕下，卡片改為單欄，沒有水平捲動。
- 部署後，以無痕視窗逐一打開五個 Google Drive 連結，確認不要求登入或存取授權。

## 維護

- 更新案例文案：編輯 `index.html` 的對應 `<article>`。
- 更新外觀：編輯 `styles.css`。
- 若 Drive 連結變更，同時更新 `index.html` 與本 README 的表格。
- 這個網站不聲稱任何模擬／情境樣本是客戶案例；維護時請保留其標示。
