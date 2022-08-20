https://htmllab.ru/zadachi-po-javascript-oop/
/**
 1.
 Создайте конструктор function Card(from, to){...}, 
 создающий объекты карточки со свойствами from, to и методом show(), 
 возвращающим  свойства отдельного объекта в виде строки «from,to», 
 где на месте названий свойств будут их значения. 
 Создайте переменную c1 с городами Екатеринбург и Москва
 */

 function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function() {
        console.log(`from=${this.from}, to=${this.to}`);
        
    }
 }

let c1 = new Card('Екатеринбург', 'Москва');
c1.show();

/**
 2.
 Опишите класс Human:  для создания объектов со свойствами name, 
 age и height конструктор класса должен принимать одноимённые аргументы . 
 Создайте массив humans из десяти объектов:
«Коля», 23, 180,
«Даша», 19, 170,
«Ваня», 18, 192,
«Петя», 45, 178,
«Вася», 34, 197,
«Джони», 40, 168,
«Катя», 37, 160,
«Петя», 29, 200,
«Соня», 21, 172,
«Женя», 25, 175
Укажите классу метод getInfo (он должен возвращать строки вида «Коля, 23, 180»), метод геттер firstname ( он должен возвращать свойство name объекта)
 */

class Human {
    #_firstname;
    constructor(name, age, height){
        this.#_firstname = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.#_firstname}, ${this.age} ${this.height}`;
    }
    get firstname(){
        return this.#_firstname;
    }
}

let humans = [];
humans.push(new Human('Коля', 23, 180));
humans.push(new Human('Даша', 19, 170));
humans.push(new Human('Ваня', 18, 192));
humans.push(new Human('Петя', 45, 178));
humans.push(new Human('Вася', 34, 197));
humans.push(new Human('Джони', 40, 168));
humans.push(new Human('Катя', 37, 160));
humans.push(new Human('Петя', 29, 200));
humans.push(new Human('Соня', 21, 172));
humans.push(new Human('Женя', 25, 175));

humans.forEach(item => console.log(item.getInfo()));

humans.forEach(item => console.log(item.firstname));

/**
 * 3.
 (*) Напишите функции сортировки sortByName и sortByHeight, 
 которые смогут отсортировать массив по именам (в алфавитном порядке) 
 или росту (по убыванию роста). Вызовите только функцию сортировки по росту.
 */
console.clear();
 function sortByName(a, b) {
    if(a.firstname < b.firstname) {
        return -1;
    }
    if(a.firstname > b.firstname) {
        return 1;
    }
    return 0;
 }
 humans.sort(sortByName);
 humans.forEach(item => console.log(item.firstname));

 console.clear();

 function sortByHeight(a, b) {
    let left = a.getInfo().split(' ')[2];
    let right = b.getInfo().split(' ')[2];
    if(left < right) {
        return -1;
    }
    if(left > right) {
        return 1;
    }
    return 0;
 }

 humans.sort(sortByHeight);
 humans.forEach(item => console.log(item.getInfo()));

 /*
 4.
 Получите в переменную dt1  дату соответствующую 0:00, 1 января 2045 года, при помощи конструктора Date()
 */

 let dt = new Date(2045, 00, 01, 00, 00, 00);
 console.log(dt);

 /**
  5.
  В переменную dt2 найдите кол-во секунд, которое прошло с 1 января 1970 года по текущий момент.
  */
let dt1970 = new Date(1970, 00, 01, 00, 00, 00);
let dtNow = new Date();

let millidif = dtNow.getTime() - dt1970.getTime();
let dif = millidif/1000;
console.log(`dif = ${dif}`);

/*
6. Напишите функцию getDays, которая принимает год и месяц 
(пусть январь будет — 1, февраль — 2 и т.д.), 
а возвращает количество дней в месяце
*/
console.clear();

function getDays(year, month){
    let daysInMonth = new Date(year, month, 0).getDate();
    return daysInMonth; 
}

console.log(getDays(2022, 08));

/**
 7. 
 Напишите функцию calendar(year,month), 
 которая принимает два параметра — номер месяца и год, 
 а возвращает разметку календаря HTML на указанный месяц.
 */

 function calendar(year, month) {
    month--;

    // последний день текущего месяца
    let dt = new Date(year, month, 0);

    // текущий месяц
    month--;

    let days = dt.getDate();

    dt.setDate(1);

    //индекс дня недели для первого числа месяца
    // для недели 
    let index = (dt.getDay() + 6) % 7;


    // количество строк для календаря на месяц
    let rows = Math.ceil((index +days) / 7);

    console.log(index);

    let table = '<table border=1>';
    table += `<caption>${month} ${year}</caption>`
    
    let k = 1 - index;
    for(let i = 0; i < rows; i ++){
        table += `<tr>`;
        for(let j = 0; j < 7;j++){
            table += `<td>`;
            if(k > 0 && k <= days) {
                table += k;
            }
            k++;
        }
    }

    table += '</table>';

    return table;
}

document.write(calendar(2022, 08));

/*
8.
Через прототип расширьте встроенный объект Number методом isOdd(), 
который возвращает true, если число нечетное.
*/

class Number {

}

Number.prototype.isOdd = function(number) {
    return number % 2 != 0;
}

let n = new Number();
console.log(n.isOdd(2));

/**
 9.
  Создайте конструктор , который поддерживает на своих методах цепочечный синтаксис.
 */

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', ' + this.model;
    }
  }