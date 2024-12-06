---
title: 基礎C語言
mathjax: true
date: 2024-12-06 02:09:07
tags:
 - C
 - 程式
 - 教學
description: 一個簡單的C語言教學。
categories:
 - 程式教學
---

# 開發環境設定

C語言的編譯器是`gcc`或是`clang`。
開始前，先使用`gcc --version`檢查之前是否已經安裝過環境。如果出現錯誤，再進行下方的教學。

## windows(以MinGW舉例)
*也可以看[vscode的教學](https://code.visualstudio.com/docs/cpp/config-mingw)*

會透過[MSYS2](https://www.msys2.org/)安裝MinGW。
從這裡下載[MinGW的exe安裝檔](https://github.com/msys2/msys2-installer/releases/download/2024-01-13/msys2-x86_64-20240113.exe)，或是自己到[MSYS2官網](https://www.msys2.org/)下載

之後執行這個`exe`檔，照著安裝精靈的指示安裝(總之一直點確認就可以了，可以把安裝位置改成自己想要的位置)
完成後勾選`Run MSYS2`就可以在點擊`Finish`後自動開啟一個終端機。(沒勾選就去搜尋`MSYS2 CLANG64`然後開啟他)
在這個終端機內執行以下指令:
```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

出現`Enter a selection (default=all)`時直接按`enter`，不用輸入內容。

之後有任何提示就輸入`y`，然後按`enter`。

安裝完成後要去修改環境變數。
在windows搜尋欄輸入`環境變數`並開啟:
![環境變數](https://github.com/NoahsarkTaiwan2008/pic/blob/main/c-tutorial/pic.png?raw=true)

點擊**環境變數**:
![進入環境變數](https://github.com/NoahsarkTaiwan2008/pic/blob/main/c-tutorial/pic2.png?raw=true)

點擊**使用者變數**的**Path**選項，然後按**編輯**:
![進入path](https://github.com/NoahsarkTaiwan2008/pic/blob/main/c-tutorial/pic3.png?raw=true)

點擊**新增**並把安裝**MinGW**的位置貼上，預設安裝會是`C:\msys64\ucrt64\bin`，我是設定安裝在`D:\`。輸入完成後按**確定**。
![新增環境變數](https://github.com/NoahsarkTaiwan2008/pic/blob/main/c-tutorial/pic4.png?raw=true)

之後就一直點擊**確定**來退出。

打開終端機輸入指令確認安裝是否成功:
```bash
gcc --version
```

成功會顯示以下內容:
```bash
PS C:\Users\ben> gcc --version
gcc.exe (Rev6, Built by MSYS2 project) 13.1.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

## MacOS
安裝**XCode**(檔案大)或是**Xcode Command Line Tools**(檔案小)
以**Xcode Command Line Tools**舉例:
在終端機輸入以下指令:
```bash
xcode-select --install
```
如果沒有權限，在前面加上`sudo`:
```bash
sudo xcode-select --install
```

安裝後檢查是否安裝成功:

```bash
gcc --version
```

## Debian 系列 Linux 發行版（如 Ubuntu）
透過`apt`安裝:
```bash
sudo apt install gcc
```

檢查安裝是否成功:

```bash
gcc --version
```

# 副檔名
C語言的副檔名為`c`，例如`hello.c`。

# 標頭檔
在開始時引入標頭檔(Header file)，例如
 - `stdio.h`
 - `string.h`
 - `math.h`

引入的時機就是在需要使用這些標頭檔中所定義的函數或變數時。例如，當你需要使用輸入輸出功能時，就需要引入 `stdio.h`；當你需要進行字串處理時，就需要引入 `string.h`；當你需要進行數學運算時，就需要引入 `math.h`。

# 入口點函式`main()`
幾乎每個程式都會需要`main()`這個函式。他返回的數值通常是`int`，所以用`int`開頭。
程式的主要內容會寫在`main()`函式裡面。
```c
int main() {
    // 程式內容
}
```

# 輸出與輸入  
在C語言中，輸出使用函式 `printf()`，而輸入則使用函式 `scanf()`。

---

## `printf()` 函式  
`printf()` 用於在終端輸出文字或變數的值。

### 範例: 輸出文字
```c
#include <stdio.h>

int main() {
    printf("hello world");
    return 0;
}
```
執行後會在終端顯示：`hello world`。

### 範例: 輸出變數值
要輸出變數的值，需要在格式字串中使用佔位符來指定變數型別，例如：
```c
#include <stdio.h>

int main() {
    int age = 16;
    printf("你%d歲", age);
    return 0;
}
```
以上程式會將 `age` 的值插入到 `%d` 的位置，輸出結果為：`你16歲`。

---

## `scanf()` 函式  
`scanf()` 用於從終端讀取輸入，並將輸入值儲存到指定變數中。

### 範例: 輸入數值
以下程式讀取使用者的年齡並輸出：
```c
#include <stdio.h>

int main() {
    int age;
    printf("請輸入你的年齡: ");
    scanf("%d", &age);
    printf("你%d歲", age);
    return 0;
}
```
執行流程：
1. 使用者會看到提示 `請輸入你的年齡:`。
2. 使用者輸入數值後，`scanf()` 將數值儲存到變數 `age` 中。
3. 輸出顯示輸入的年齡，例如：`你18歲`。

# 變數
變數是用來儲存資料的命名儲存空間。
在 C 語言有幾種常用的變數型態:

| 型態   | 說明               | 範例值       |
|--------|--------------------|-------------|
| `int`  | 整數               | 42          |
| `char` | 字元               | 'a'         |
| `double` | 雙精度浮點數     | 3.14159     |
| `float` | 單精度浮點數      | 3.14        |
|`bool`|布林值，只有true(1)或false(0)|true(或是1)|
| `long`      | 長整數，範圍比 `int` 大      | 1234567890  |
| `long long` | 更長整數，範圍比 `long` 大  | 9876543210  |
| `unsigned`  | 無符號整數，不會有負數，會加在整數型別前，例如 `int`。|42|

範例：

```c
int number = 100;

char n = 'A';

double number2 = 3.1415926;

float number3 = 3.14;

bool yes = true;

long long bigNumber = 9223372036854775807;

unsigned int positiveNumber = 300;
```

# `if else`判斷式
用來做兩個值的判斷。
例如我有兩個變數，`a`和`b`:
```c
int a = 10;
int b = 20;
```
我想要判斷這兩者的值是否相同，這時就可以使用`if`。

`if`的判斷式會寫在他旁邊的括號裡面。
判斷時會使用**比較運算子**和**邏輯運算子**。以下是各種的比較運算子:

## 比較運算子

|運算子|說明|舉例|
|-|-|-|
|`==`|比較兩個數值是否**相等**|`a == b`|
|`!=`|比較兩個數值是否**不相等**|`a != b`|
|`>`|比較前項數值是否**大於**後項數值|`a > b`|
|`<`|比較前項數值是否**小於**後項數值|`a < b`|
|`>=`|比較前項數值是否**大於而且等於**後項數值|`a >= b`|
|`>=`|比較前項數值是否**小於而且等於**後項數值|`a <= b`|

範例:
```c
int a = 5, b = 3;

// `==` 範例
if (a == b) {
    // 這裡不會執行，因為 a 不等於 b
}

// `!=` 範例
if (a != b) {
    // 這裡會執行，因為 a 不等於 b
}

// `>` 範例
if (a > b) {
    // 這裡會執行，因為 a 大於 b
}

// `<` 範例
if (a < b) {
    // 這裡不會執行，因為 a 不小於 b
}

// `>=` 範例
if (a >= b) {
    // 這裡會執行，因為 a 大於 b
}

// `<=` 範例
if (a <= b) {
    // 這裡不會執行，因為 a 不小於或等於 b
}
```

## 邏輯運算子

各種邏輯運算子:
|運算子|說明|舉例|
|-|-|-|
|`&&`| 檢查兩個條件是否都為 `true`|`a > b && a != b`，當 `a` **大於** `b` 而且 `a` 也 **不等於** `b` 時，結果才會是`true(1)`|
|`\|\|`| 檢查兩個條件是否至少有一個為 `true`|`a > b \|\| a == b`，當 `a` **大於** `b` 或 `a` **等於** `b` 時，結果會是 `true(1)`|
|`!`|將條件結果取反，如果為 `true` 則變為 `false`，反之亦然 |`!(a > b)`，當 `a` **不大於** `b` 時，結果才會是 `true(1)`|

範例：

```c
int a = 5, b = 3;

// `&&` 範例
if (a > b && a != b) {
    // 這裡會執行，因為 `a > b` 且 `a != b`
}

// `||` 範例
if (a > b || a == b) {
    // 這裡會執行，因為 `a > b`
}

// `!` 範例
if (!(a > b)) {
    // 這裡會執行，因為 `a > b` 為 `true`，所以 `!(a > b)` 為 `false`
}
```

# 迴圈
分為`for`跟`while`兩種，`for`會在知道要重複執行幾次時使用，`while`是在不知道明確重複次數時使用。

## for

`for`的基本語法為:
```C
for (初始變數; 判斷式; 遞增式) {
    // 內容
}
```

在 `for` 迴圈的語法中，`初始變數; 判斷式; 遞增式` 分別代表：  

1. **初始變數 (Initialization)** ：設定迴圈開始時的初始條件，通常用來宣告或初始化控制變數，例如 `int i = 0`。  
2. **判斷式 (Condition)** ：每次迴圈執行前檢查的條件，若為 `true` 則繼續執行，為 `false` 則結束迴圈。  
3. **遞增式 (Update)** ：在每次迴圈執行完後，對控制變數進行更新操作，例如 `i++` 或 `i += 2`。  

範例：  
```c
for (int i = 0; i < 5; i++) {
    printf("%d ", i); // 輸出：0 1 2 3 4
}
```  
- 初始變數：`int i = 0` (設定起始值為 0)。  
- 判斷式：`i < 5` (當 `i` 小於 5 時執行迴圈)。  
- 遞增式：`i++` (每次迴圈結束後將 `i` 增加 1)。

## while  

`while` 迴圈的基本語法：  

```c
while (條件式) {
    // 執行內容
}
```  

### 說明  
1. **條件式**：在每次執行迴圈前檢查，當條件為 `true` 時執行迴圈，為 `false` 則結束。
2. **執行內容**：條件成立時執行的程式碼。

### 範例
```c
int i = 0;
while (i < 5) {
    printf("%d ", i); // 輸出：0 1 2 3 4
    i++; // 遞增控制變數
}
```
- 初始值 `i = 0` 在迴圈外設定。
- 每次檢查 `i < 5`，滿足條件則執行。
- `i++` 更新變數以避免無限迴圈。(因為如果不更新變數，輸出的內容會一直是`0`)