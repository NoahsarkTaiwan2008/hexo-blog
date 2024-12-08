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
 - C
---

# 開發環境設定

C語言的編譯器是`gcc`或是`clang`。
開始前，先使用`gcc --version`檢查之前是否已經安裝過環境。如果出現錯誤，再進行下方的教學。

!!! info
    如果設定過了，可以直接跳到下面的教學

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

點擊**新增**並把安裝**MinGW**的位置貼上，預設安裝會是`C:\msys64\ucrt64\bin`，但因為我在安裝時是設定安裝在`D:\`，所以我設定的位置會是`C:\msys64\ucrt64\bin`(總之就是你在安裝時選擇安裝在哪裡，就輸入什麼位置)。輸入完成後按**確定**。
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

## printf()函式  
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

## scanf()函式  
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

## String

*更詳細的內容請參閱[W3schools](https://www.w3schools.com/c/c_strings.php)的教學*

C沒有內建的`string`變數(但其他程式語言通常會有)，所以在創建字串變數時就需要使用`char`建立字元[陣列](http://noahsarktw.com/2024/12/06/basic-c-lang/#%E9%99%A3%E5%88%97)來代替`string`。
例如：
```c
char hello[] = "hello world";
```
**注意，一定要用雙引號 `"` ，不能用單引號 `'`**

輸出字串時，要使用 `%s` 這個佔位符：

```c
#include <stdio.h>

int main() {
    char hello[] = "hello world";
    printf("%s", hello);
}
```

## bool
C語言在C99之前並沒有內建`bool`這個型態的變數。不過你可以使用`stdbool.h`這個函式庫來加入`bool`變數。或是用`_Bool`這個型態(限C99和之後的版本)。

範例(不引入`stdbool.h`，限C99和之後的版本)：
```c
#include <stdio.h>

int main() {
    _Bool a = 1;
    _Bool b = 0;

    printf("%d\n", a);
    printf("%d", b);
}
```

如果引入`stdbool.h`，就可以把`bool`的值使用`true`或`false`來代替`1`跟`0`：
```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool a = true;
    bool b = false;

    bool c = 1;
    bool d = 0;

    printf("%d\n", a);
    printf("%d\n", b);
    printf("%d\n", c);
    printf("%d\n", d);
}
```

## 佔位符

佔位符用在格式化輸出時，指定如何顯示變數的內容。例如，在C語言的`printf`函式中，我們使用不同的佔位符來表示變數的型態。這些佔位符可以指明數值的格式（如整數、小數點後的位數等）。

常見佔位符與資料型態：
| 資料型態            | 佔位符    | 說明                                    |
|---------------------|-----------|-----------------------------------------|
| `int`              | `%d`      | 帶符號的十進制整數                       |
| `unsigned int`     | `%u`      | 無符號十進制整數                         |
| `char`             | `%c`      | 單個字符                                |
| `double`           | `%lf`     | 雙精度浮點數                            |
| `float`            | `%f`      | 單精度浮點數（`printf`中會自動轉為`double`） |
| `bool`             | `%d`      | 布林值（0 表示`false`，1 表示`true`）     |
| `long`             | `%ld`     | 長整數                                  |
| `unsigned long`    | `%lu`     | 無符號長整數                            |
| `long long`        | `%lld`    | 長長整數                                |
| `unsigned long long`| `%llu`    | 無符號長長整數                          |
| `short`            | `%hd`     | 短整數                                  |
| `unsigned short`   | `%hu`     | 無符號短整數                            |
| `size_t`           | `%zu`     | 無符號大小型別，用於物件大小            |
| `int*`（指標）      | `%p`      | 指標地址，以十六進制表示                 |
| `char*`（字串）     | `%s`      | 字串（以 `null` 結尾）                   |



範例：

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    int number = -123;
    unsigned int positiveNumber = 300;
    char letter = 'A';
    double pi = 3.14159265358979;
    float smallPi = 3.14f;
    bool isTrue = true;  // bool的值除了可以用0跟1，也可以用true(代表1)跟false(代表0)來當變數值
    long bigNumber = 9223372036854775807;
    unsigned long bigUnsignedNumber = 4294967295;
    long long veryBigNumber = 9223372036854775807LL;
    unsigned long long veryBigUnsignedNumber = 18446744073709551615ULL;
    short smallNumber = -32000;
    unsigned short smallPositiveNumber = 65000;
    size_t objectSize = sizeof(int);
    char* string = "Hello, World!";
    int* pointer = &number;

    printf("int: %d\n", number);
    printf("unsigned int: %u\n", positiveNumber);
    printf("char: %c\n", letter);
    printf("double: %lf\n", pi);
    printf("float: %f\n", smallPi);
    printf("bool (as int): %d\n", isTrue);
    printf("bool (as true/false): %s\n", isTrue ? "true" : "false");
    printf("long: %ld\n", bigNumber);
    printf("unsigned long: %lu\n", bigUnsignedNumber);
    printf("long long: %lld\n", veryBigNumber);
    printf("unsigned long long: %llu\n", veryBigUnsignedNumber);
    printf("short: %hd\n", smallNumber);
    printf("unsigned short: %hu\n", smallPositiveNumber);
    printf("size_t: %zu\n", objectSize);
    printf("string: %s\n", string);
    printf("pointer address: %p\n", pointer);

    return 0;
}
```

輸出結果

```bash
int: -123
unsigned int: 300
char: A
double: 3.141593
float: 3.140000
bool (as int): 1
bool (as true/false): true
long: 9223372036854775807
unsigned long: 4294967295
long long: 9223372036854775807
unsigned long long: 18446744073709551615
short: -32000
unsigned short: 65000
size_t: 4
string: Hello, World!
pointer address: 0x7ffeea2db9bc
```

---

**浮點數精度控制**：
   - 可以用格式指定小數點位數，例如：`%.2f` 表示輸出小數點後兩位數的浮點數。

```c
#include <stdio.h>

int main() {
    float pi = 3.14159;
    printf("Pi (2 decimals): %.2f\n", pi); // 輸出: 3.14
    return 0;
}
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

範例:
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
- `i++` 更新變數以避免無限迴圈。(因為如果不更新變數，輸出的內容會一直是`0`，就無法達成`i < 5`這個條件，就會形成無限迴圈)

## 巢狀迴圈

就是在一個迴圈內加入另一個迴圈。執行的順序會是最裡面的迴圈先執行，執行完成後才會輪到他外層的迴圈執行。
假如有一個三層的巢狀迴圈，那執行順序就會是第三層 -> 第二層 -> 第一層。

用九九乘法表舉例：
因為九九乘法表裡面有兩個會變動的數值 - 乘數跟被乘數，所以會用到兩層的for巢狀迴圈。

首先設定用來控制乘數的迴圈：
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 9; i++) {
        printf("\n");
    }
}
```
接下來設定顯示被乘數和結果的迴圈：
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 9; i++) {
        for (int j = 1; j <= 9; j++) {
            printf("%d*%d=%d\t", i, j, i * j);
        }
        printf("\n");
    }
}
```

這會在終端機顯示以下內容：
```bash
1*1=1	1*2=2	1*3=3	1*4=4	1*5=5	1*6=6	1*7=7	1*8=8	1*9=9	
2*1=2	2*2=4	2*3=6	2*4=8	2*5=10	2*6=12	2*7=14	2*8=16	2*9=18	
3*1=3	3*2=6	3*3=9	3*4=12	3*5=15	3*6=18	3*7=21	3*8=24	3*9=27	
4*1=4	4*2=8	4*3=12	4*4=16	4*5=20	4*6=24	4*7=28	4*8=32	4*9=36	
5*1=5	5*2=10	5*3=15	5*4=20	5*5=25	5*6=30	5*7=35	5*8=40	5*9=45	
6*1=6	6*2=12	6*3=18	6*4=24	6*5=30	6*6=36	6*7=42	6*8=48	6*9=54	
7*1=7	7*2=14	7*3=21	7*4=28	7*5=35	7*6=42	7*7=49	7*8=56	7*9=63	
8*1=8	8*2=16	8*3=24	8*4=32	8*5=40	8*6=48	8*7=56	8*8=64	8*9=72	
9*1=9	9*2=18	9*3=27	9*4=36	9*5=45	9*6=54	9*7=63	9*8=72	9*9=81
```

## break跟continue

### break
`break`可以在迴圈達成某項條件時結束(跳出)這個迴圈。

例如在`while`迴圈，我想要在迴圈數到5的時候結束:
```c
#include <stdio.h>

int main() {
    int i = 0;

    while (1) { // 這裡使用無限迴圈
        printf("%d\n", i);
        i++;

        if (i == 5) {
            break; // 當 i 等於 5 時，跳出迴圈
        }
    }

    printf("迴圈結束\n");

    return 0;
}
```

這個程式會顯示這些內容:
```bash
0
1
2
3
4
迴圈結束
```
當`i`等於`5`時，`break`語句會跳出`while`迴圈，程式繼續執行迴圈後的程式碼。

### continue
`continue` 可以在迴圈達成某項條件時跳過當前迴圈的剩餘部分，直接進入下一次迴圈。
例如在 `for` 迴圈中，我想要跳過數值為 3 的迴圈：

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        if (i == 3) {
            continue; // 當 i 等於 3 時，跳過本次迴圈
        }
        printf("%d\n", i);
    }

    printf("迴圈結束\n");

    return 0;
}
```
這個程式會顯示這些內容：

```bash
0
1
2
4
迴圈結束
```
當`i`等於`3`時，`continue`語句會跳過本次迴圈的剩餘部分，直接進入下一次迴圈，程式繼續執行後面的迴圈。

# 陣列
陣列是一種資料結構，用來儲存多個相同型別的變數，並且可以通過索引來訪問每個元素。
要建立陣列，要定義資料類型和設定陣列名稱，然後在後面加一個`[]`。
```c
int number[] = {1, 2, 3, 4, 5};
```
陣列的排列是從`0`開始的，不是從`1`開始。
所以上面的`number[]`排列順序就是
```c
int number[] = {1, 2, 3, 4, 5};
//              0  1  2  3  4
```

如果需要使用陣列的某個內容，例如我想顯示陣列中的第3個數字：
```c
#include <stdio.h>

int main() {
    int number[] = {1, 2, 3, 4, 5};

    printf("%d", number[2]);
}
```

如果要修改陣列的內容，就要用<陣列名稱[你要修改的某個內容]>，例如我要修改`number[]`的第3個內容，把它從`4`改成`10`：
```c
int number[] = {1, 2, 3, 4, 5};

number[3] = 10;
```

這樣這個陣列現在就變成`1, 2, 3, 10, 5`了。

---

如果要把陣列的內容輸出出來，可以使用`for`迴圈。
```c
#include <stdio.h>

int main() {
    int number[] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        printf("%d, ", number[i]);
    }
}
```

## 多維陣列
就是在陣列裡放入其他的陣列。可以用$x$跟$y$或是表格來理解。例如我需要一個二維陣列：

```c
int m[3][5] = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 10}, {11, 12, 13, 14, 15}};
```
寫得好看一些：
```c
int m[3][5] = {
    {1, 2, 3, 4, 5},
    {6, 7, 8, 9, 10},
    {11, 12, 13, 14, 15};
}
```

如果要取用多維陣列中的某個數值，例如要顯示第2層陣列的第三個數值：
```c
#include <stdio.h>

int main() {
    int m[3][5] = {
        {1, 2, 3, 4, 5},
        {6, 7, 8, 9, 10},
        {11, 12, 13, 14, 15}
    };

    printf("%d", m[1][2]);
}
```

如果要顯示這個二維陣列中的所有內容，可以用巢狀的`for`迴圈：

```c
#include <stdio.h>

int main() {
    int m[3][5] = {
        {1, 2, 3, 4, 5},
        {6, 7, 8, 9, 10},
        {11, 12, 13, 14, 15}
    };

    // 使用巢狀迴圈遍歷二維陣列
    for (int i = 0; i < 3; i++) {       // 遍歷行
        for (int j = 0; j < 5; j++) {   // 遍歷列
            printf("%d ", m[i][j]);     // 輸出元素
        }
        printf("\n");                   // 換行顯示每一行
    }

    return 0;
}
```

三維陣列可以用$x，y，z$的方式來理解，因為三維陣列就是一個立體的圖形。
三維陣列在定義時會需要三個`[]`，例如：
```c
int m[][][]
```

以下面的範例來說，可以把第一個`[]`看成$y$，第二個`[]`看成$x$，第三個`[]`看成$z$。

```c
#include <stdio.h>

int main() {
    int m[3][5][2] = {
        {
            {1, 2, 3, 4, 5},
            {6, 7, 8, 9, 10},
            {11, 12, 13, 14, 15}
        },
        {
            {16, 17, 18, 19, 20},
            {21, 22, 23, 24, 25},
            {26, 27, 28, 29, 30}
        }
    };
}
```

可以理解成一個長3寬５，高度2的立方體。

如果要顯示這個陣列的內容，要用到3層的for巢狀迴圈：
```c
#include <stdio.h>

int main() {
    int m[2][3][5] = {
        {
            {1, 2, 3, 4, 5},
            {6, 7, 8, 9, 10},
            {11, 12, 13, 14, 15}
        },
        {
            {16, 17, 18, 19, 20},
            {21, 22, 23, 24, 25},
            {26, 27, 28, 29, 30}
        }
    };

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 5; k++) {
                printf("m[%d][%d][%d] = %d\n", i, j, k, m[i][j][k]);
            }
        }
    }

    return 0;
}
```

# 函式
函式是用來封裝一段可以重複使用的程式碼，並且可以通過呼叫函式名稱來執行這段程式碼。
例如我想要顯示很多次`10+10`的結果，如果不使用函式會長這樣:

```c
#include <stdio.h>

int main() {
    printf("10 + 10 = %d\n", 10 + 10);
    printf("10 + 10 = %d\n", 10 + 10);
    printf("10 + 10 = %d\n", 10 + 10);
    return 0;
}
```

使用函式(在`main()`裡面輸入函式名稱+括號):

```c
#include <stdio.h>

void add() {
    printf("10 + 10 = %d\n", 10 + 10);
}

int main() {
    add();  //函式呼叫
    add();  //函式呼叫
    add();  //函式呼叫
    return 0;
}
```

需要寫的程式碼變少了。

## 函式參數
在函式中使用變數的目的，是讓函式能夠接收輸入值（**參數**），並根據這些值進行計算或操作。

需要使用幾個參數，就新增幾個參數。例如我要三個參數：
```c
int add(int a, int b, int c) {
    //內容....
}
```
如果要兩個：
```c
int add(int a, int b) {
    //內容....
}
```

---

例如，你可以讓函式 `add` 接收兩個數字作為參數，然後計算它們的和，像這樣：

```c
#include <stdio.h>

// 定義函式，接收兩個整數參數 a 和 b，並打印它們的和
void add(int a, int b) {
    printf("%d + %d = %d\n", a, b, a + b);
}

int main() {
    // 呼叫函式並傳遞不同的值
    add(10, 20);
    add(5, 15);
    add(100, 200);
    return 0;
}
```

1. **函式參數（parameters）**  
   在定義函式時，括號內的變數（例如 `int a, int b`）稱為**參數**。它們是函式的輸入值，必須在呼叫函式時提供具體的數值。
   
2. **函式呼叫（function call）**  
   當你在 `main` 中呼叫 `add(10, 20)` 時，數值 `10` 和 `20` 分別賦值給 `a` 和 `b`，函式會根據這些值進行計算。

3. **重複使用**  
   現在 `add` 函式可以針對不同的輸入值計算和，不需要每次都重寫計算邏輯。

### 參數回傳
有時候，你可能希望函式不直接輸出，而是將結果傳回給使用者，讓使用者決定如何使用。這時就要使用 `return`。

例如：

```c
#include <stdio.h>

// 定義函式，回傳兩個整數的和
int add(int a, int b) {
    return a + b;
}

int main() {
    int result1 = add(10, 20);  // 呼叫函式並接收回傳值
    int result2 = add(5, 15);

    printf("Result 1: %d\n", result1);
    printf("Result 2: %d\n", result2);

    return 0;
}
```

回傳類型 `int add(int a, int b)` 的 `int` 要根據回傳值的類型修改。例如在上面範例的 `add()` 回傳的數值會是整數，也就是 `int`，所以在設定函式時就要寫 `int`。如果回傳的值是 `double`，那就要改成 `double`。

```c
#include <stdio.h>

double add(double a, double b) {
    return a + b;
}

int main() {
    double result1 = add(10.5, 20.6);
    double result2 = add(5.7, 15.8);

    printf("Result 1: %f\n", result1);
    printf("Result 2: %f\n", result2);

    return 0;
}
```

這樣這個函式就可以進行小數計算。