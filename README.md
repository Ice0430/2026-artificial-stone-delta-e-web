# CIE94 Delta E Calculator

這是一個 CIE94 Delta E 靜態網頁，用來選擇工序、光源/UV 條件，輸入樣品 LAB，並顯示 CIE94 Delta E。

## 目前條件

- 工序：CNC、噴砂
- 光源/UV：F2-10 / 0%UV、D65-10 / 0%UV、F2-10 / 100%UV、D65-10 / 100%UV
- 標準 LAB：依照來源 Excel 第 3 到第 6 分頁第 7 列內建

## 公式

`app.js` 內的 `calculateCie94()` 依照來源 Excel 的 U 欄 CIE Lab (94) 公式實作。

## 發布要求

正式交付時必須發布成線上網頁，讓手機或其他裝置也能開啟使用。不能只停留在本機 `file://` 或 `localhost` 預覽。
