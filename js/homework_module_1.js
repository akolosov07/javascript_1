//http://htmllab.ru/zadachi-po-javascript-base/ - 1 модуль
// https://htmllab.ru/zadachi-po-javascript-base/

/*1
Определите переменные 
str, num, flag и txt со значениями «Привет», 123, true, «true». 
При помощи оператора определения типа убедитесь, 
что переменных принадлежат типам: string, number, boolean.
*/
console.log("--1--");
let str = 'Привет', num = 123, flag = true, txt = 'true';

console.log(`str = ${str}, type: ${typeof str} `);
console.log(`str = ${num}, type: ${typeof num} `);
console.log(`str = ${flag}, type: ${typeof flag} `);
console.log(`str = ${txt}, type: ${typeof txt} `);

console.log("--2--");
/*2
Создайте переменные a1, a2, a3, a4, a5. 
При помощи математических операторов 
(сложение, вычитание и т.д.) найдите значения выражений:
5 + 3,
5 - 3,
5 * 3,
5 / 3,
поместив результат каждого выражения в соответствующую переменную. 
Например, let a1 = 5 + 3.

*/

let a1, a2, a3, a4, a5;
a1 = 5 + 3;
a2 = 5 - 3;
a3 = 5 * 3;
a4 = 5 / 3;

console.log(`a1 = ${a1}, a2 = ${a2},a3 = ${a3}, a4 = ${a4}, a5 = ${a5}`);

/*3
Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
5 % 3,
3 % 5,
5 + '3',
'5' - 3,
75 + 'кг'
*/
console.log("--3--");
let a6, a7, a8, a9, a10;
a6 = 5 % 3;
a7 = 3 % 5;
a8 = 5 + '3';
a9 = '5' - 3;
a10 = 75 + 'кг';

console.log(`a6 = ${a6}, a7 = ${a7},a8 = ${a8}, a9 = ${a9}, a10 = ${a10}`);

/*4
Напишите скрипт, 
который находит площадь прямоугольника высота 23см. 
(в числовую переменную height), шириной 10см (в числовую переменную width), 
значение площади должно хранится в числовой переменной s.
*/

console.log("--4--");
let height, width, s;
height = 23;
width = 10;
s = height * width;
console.log(s);

/*
5.
Напиши скрипт, который находит объем цилиндра высотой 10м 
(переменная heightC) и диаметром основания 4м (dC),
 результат поместите в переменную v.
*/
console.log("--5--");
let heightC, dC, v;
//  V = π·r²·h. π — константа равная (3.14);
dC = 4;
heightC = 10;
v = 3.14 * Math.pow((dC / 2), 2) * heightC;
console.log(`v = ${v}`);

/*
6.
У прямоугольного треугольника две стороны n (со значением 3) 
и m (со значением 4). Найдите гипотенузу k по теореме 
Пифагора (нужно использовать функцию Math.pow(число, степень) 
или оператор возведения в степень 
*/
console.log("--6--");
let n, m, k;
n = 3;
m = 4;
k = Math.sqrt((Math.pow(n, 2) + Math.pow(m, 2)));
console.log(`k = ${k}`);

/**
 7.
 Найди двенадцатый элемент (let nFib = 12, el12;) последовательности 
 Леонардо Пизанского (нужно использовать функцию 
Math.pow(число, степень)). Не забудьте округлить полученное число до целого — Math.round(число).
 */
console.log("--7--");
function fibonacci(n) {
 const fib = [0, 1];
 for(let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
 }
 return fib;
}

function nthFibConstantTime(n) {
    let phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

nFibArray12 = fibonacci(12);

console.log(`fibonacci(12) = ${fibonacci(12)}`);
console.log(`nthFibConstantTime(12) = ${nthFibConstantTime(11)}`);


/**
 8.
 Даны размер ипотечного кредита (S — 2 млн.руб), 
 процентная ставка (p  — 10%), кол-во лет (years — 5). 
 Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl
 */
 console.log("--8--");

let S = 2e6;
let p = 10;
let years = 5;
let A; // платеж за месяц
n = 12 * years; // в месяцах
p = p / 12;
p = p / 100;

A = (S * p / (1 - (1 + p) ** (-n))).toFixed(2); 
console.log(`S = ${S}, A = ${A}`);

let totalPayment = A * 12 * years;
let perepl = totalPayment - S;
console.log(`perepl = ${perepl}`);



