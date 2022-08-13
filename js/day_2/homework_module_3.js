// https://htmllab.ru/zadachi-po-javascript-function/

/*
1.
Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».
*/
function hello1() {
    console.log("Привет, JavaScript!");
}

hello1();

/**
 2.
 Напишите функцию hello2(), 
 которая при вызове будет принимать переменную name (например, «Василий») 
 и выводить строку (в нашем случае «Привет, Василий»).  
 В случае отсутствующего аргумента выводить «Привет, гость»
 */

function hello2(name){
    name = name == undefined ? 'гость' : name;
    var msg = `Привет, ${name}`;
    console.log(msg);
}
hello2();
hello2('Василий');

/**
 3.
 Напишите функцию mul(n,m), которая принимает два аргумента 
 и возвращает произведение этих аргументов. Проверьте ее работу.
 */

 function mul(n,m) {
    return n * m;
 }

 var check = mul(5, 5) == 25 ? true : false;
 console.log(`check = ${check}`);

 /*
 4.
 Создайте функцию repeat(str, n), 
 которая возвращает строку, состоящую из n повторений строки str. n — по умолчанию 2, str — пустая строка
 */

 function repeat(str, n = 2) {
    var result = '';
    for(let i = 0; i < n; i++) {
        result += str + " ";
    }
    return result;
 }

 console.log(`repeat('t', 5) = ${repeat('t', 5)}`);

 /**
  5.
  Создайте функцию rgb(), которая будет принимать три числовых аргумента 
  и возвращать строку вида «rgb(23,100,134)». 
  Если аргументы не заданы, считать их равными нулю.
   Не проверять переменные на тип данных
  */

   function rgb(r, g, b) {
    r = r == undefined ? 0 : r;
    g = g == undefined ? 0 : g;
    b = b == undefined ? 0 : b;
    return `rgb(${r}, ${g}, ${b})`;
   }

   console.log(`rgb() = ${rgb()}`);
   console.log(`rgb(23,100,134) = ${rgb(23,100,134)}`);

/*
6
Создайте функцию avg() , 
которая будет находить среднее значение по всем своим аргументам 
(аргументы величины числовые)
*/

function avg(...args) {
    let result = 0;
    if(args.length > 0) {
        args.forEach(function(item, index, arr) {
            result += item;
        });
        return result/args.length;
    } 
    return result;
}

let avgResult = avg(1, 2, 3, 6);

console.log(`avgResult = ${avgResult}`);

/**
 7.
 Создайте функцию m(a,b) оболочку для mul(). 
 m() должна принимать два аргумента а возвращать результат работы mul() 
 с этими двумя аргументами После выполнения задания поэкспериментируйте, 
 создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.
 */

 function m(a, b) {
    return function mul() {
        return a + b;
    }
 }

var sum = m(5, 6);
console.log(`m(5, 6) = ${sum()}`);
console.log(`m(6, 8) = ${sum()}`);



