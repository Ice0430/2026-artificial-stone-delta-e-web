# FRW-21-2 CIE94 Delta E Calculator

这是一个 FRW-21-2 喷砂重测黄金色块的 CIE94 Delta E 静态网页。

## 标准 LAB 来源

来源文件：

`C:\Users\SC-ENGINEER\Desktop\21-2 噴砂 重測黃金色塊\FRW-21-2 Target color data.xlsx`

标准值取自第 3 到第 6 分页第 7 行：

- F2-10 / 0%UV: L* 97.44, a* -0.06, b* 0.17
- D65-10 / 0%UV: L* 97.44, a* -0.46, b* 0.76
- F2-10 / 100%UV: L* 97.45, a* 0.57, b* -2.85
- D65-10 / 100%UV: L* 97.51, a* 0.41, b* -1.84

## 计算

`app.js` 内的 `calculateCie94()` 沿用原 CIE94 Delta E 网页公式。
