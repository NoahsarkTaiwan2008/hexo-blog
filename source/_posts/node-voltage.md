---
title: 節點電壓法
mathjax: true
date: 2024-12-03 00:25:55
tags:
 - 節點電壓法
 - 基本電學
 - 直流網路分析
description: 節點電壓法解題過程
categories:
  - 基本電學
  - 直流網路分析
---

*參考與部分圖片取自*
- *台科大圖書 - 基本電學上*
- *[All about circuits - Node Voltage Method](https://www.allaboutcircuits.com/textbook/direct-current/chpt-10/node-voltage-method/)*

直流電路分析中的節點電壓法是通過克希荷夫電流定律（KCL）方程組來求解電路節點的未知電壓。

---

以這張圖為例，要求出電流**I**的值:


<img src="https://github.com/NoahsarkTaiwan2008/pic/blob/main/node-vm/pica4.png?raw=true" width="500" height="300" alt="電路圖">


首先要以歐姆定律(V=IR)寫出各支路電流的算式:

支路 $I = \frac{V_{1}}{2}$

支路 $I_{2} = \frac{10-V_{1}}{3}$

支路 $I_{3} = \frac{V_{1}-(-8)}{6}$

接下來以[KCL定律](https://noahsarktw.com/2024/12/05/kcl/)寫出電流方程式:
這題為$I+I_{3}=I_{2}$ 。

將各支路電流的算式的算式帶入電流方程式:
$\frac{V_{1}}{2} + \frac{V_{1} + 8}{6} = \frac{10 - V_{1}}{3}$
將其通分:
$\frac{3V_{1}}{3}+\frac{V_{1}+8}{6}=\frac{2(10-V_{1})}{6}$

將所有分子合併至一個分母:
$\frac{3V_{1}+(V_{1}+8)}{6}=\frac{2(10-V_{1})}{6}$

化減分子:
$\frac{4V_{1}+8}{6}=\frac{20-2V_{1}}{6}$

因為分母相同，所以可以直接把分母消掉:
${4V_{1}+8}=20-2V_{1}$

接下來把數值分類:
$4V_{1}+2V_{1}=20-8$

計算:

$6V_{1}=12$
$V_{1}=2$

接下來把$2$帶入**I**的算式:$I = \frac{V_{1}}{2}$
$\frac{2}{2} = 1$

所以$I = 1$。