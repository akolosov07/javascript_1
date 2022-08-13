// https://htmllab.ru/zadachi-po-javascript-object/

/*
1. 
Создайте объект city1 (var city1 = {}), 
укажите у него свойства name (название города, строка) 
со значением «ГородN» и population (населенность города, число) со значением 10 млн.
*/

var city = {};
city.name = "ГородN";
city.population = 10e6;

console.log(city);

/*
2. 
Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}
*/

var city2 = {
    name: "ГородN",
    population: 1e6
};
console.log(city2);

/*
3.
Создайте у объектов city1 и city2 методы getName(), 
которые вернут соответствующие названия городов
*/ 

city.getName = function() {
    return this.name;
}

city2.getName = function() {
    return this.name;
}

console.log(city.getName());

/**
 4.
 Создайте методы exportStr() у каждого из объектов. 
 Этот метод должен возвращать информацию о городе в формате 
 «name=ГородN\npopulation=10000000\n». 
 Для второго города будет строка со своими значениями. 
 Примечание: можно обращаться к каждому свойству через цикл for/in, 
 но методы объекта возвращать не нужно
 */

 let exportStr = function() {
    return `name=${this.name}\npopulation=${this.population}\n`;
 }

 city.exportStr = exportStr;
 city2.exportStr = exportStr;
 console.log(city.exportStr());
 console.log(city2.exportStr());

 /**
  5.
  Создайте глобальную функцию getObj(), которая возвращает this. 
  А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj. 
  Проверьте работу метода. 
  Примечание: к объекту вызова можно обратиться через this.
  */

  var getObj = function() {
    return this;
  }

  var getCity = function() {
    let ref = getObj();
    return `name=${ref.name}`;
  } 

  city.getCity = getCity;
  console.log(city.getCity());

  city2.getCity = getCity;
  console.log(city2.getCity());

  /**
   * 6.
   Создать объект obj, с методами method1(),method2() и method3(). 
   В методе method3() должна возвращаться строка «метод3». 
   Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
   */

   let obj = 
   {
    method1: function() {
        return this;
    },
    method2: function() {
        return this;
    },
    method3: function() {
        return `method3`;
    }
   };

   console.log(`obj.method1().method2().method3() = ${obj.method1().method2().method3()}`);

/*
7.
Создайте массив d1 с числовыми величинами 45,78,10,3.  
Добавьте в массив d1 еще одно число ( d1[7] = 100). 
Выведите в консоль весь массив и его элементы с индексами 6 и 7.
*/

let d1 = [45,78,10,3];
d1[7] = 100;

d1.forEach(function(item, index, arr) {
    console.log(`index = ${index}, item = ${item}`);
})

console.log(`d1[6] = ${d1[6]}`);
console.log(`d1[7] = ${d1[7]}`);

/*
8. 
Создайте массив d2 с числовыми величинами 45,78,10,3. 
Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for .
*/

let d2 = [45,78,10,3];

let sum2 = 0;

d2.forEach(function(item, index, arr) {
    sum2 += item;
});

console.log(`sum2 = ${sum2}`);

/**
 9.
 Создайте массив d3 с числовыми величинами 45,78,10,3. 
 Добавьте в массив d3 еще одно число (например, d[7] = 100) 
 Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
 */

 d3 = [45,78,10,3];
 d3[7] = 100;

 let sum3 = 0;

 for(let d3item in d3) {
    sum3 += d3[d3item];
 }
 console.log(`sum3 = ${sum3}`);

 /*
 10.
 
 Создайте массив d4 с числовыми величинами 45,78,10,3. 
 Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
 отсортирует элементы массива по убыванию чисел. 
 Вызовите d4.sort(my)
 */
 
 let d4 = [45,78,10,3];
 let my = function(a, b) { 
    if (a > b) return -1;
    return 1;
 };
 d4.sort(my);

 console.log(d4);

 /*
 11. 
 Создайте двумерный массив d5 размером n=3 элементов в каждом из которых будет m=4 элементов 
 из целых чисел (в каждый элемент поместить цифру 5). 
 Примечание: при создании двумерного массива используйте циклы. 
 Во внешнем цикле должна появиться конструкция d5[i] = [];
 */
console.log('--11--');
 let d5 = new Array(3);
 console.log(d5);
 for(let i = 0; i < d5.length; i++) {
    d5[i] = [];
    for(let j = 0; j < 4; j++) {
        d5[i][j] = 5;
    }
 }

 console.log(`d5 = ${d5}`);