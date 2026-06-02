# FRW-21-2 CIE94 Delta E Calculator

這是一個 FRW-21-2 噴砂重測黃金色塊的 CIE94 Delta E 靜態網頁。

## 標準 LAB 來源

來源檔案：

`C:\Users\SC-ENGINEER\Desktop\21-2 噴砂 重測黃金色塊\FRW-21-2 Target color data.xlsx`

標準值取自第 3 到第 6 分頁第 7 列：

- F2-10 / 0%UV: L* 97.44, a* -0.06, b* 0.17
- D65-10 / 0%UV: L* 97.44, a* -0.46, b* 0.76
- F2-10 / 100%UV: L* 97.45, a* 0.57, b* -2.85
- D65-10 / 100%UV: L* 97.51, a* 0.41, b* -1.84

## 計算

`app.js` 內的 `calculateCie94()` 沿用原 CIE94 Delta E 網頁公式。
