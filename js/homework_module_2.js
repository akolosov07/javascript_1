//http://htmllab.ru/zadachi-po-javascript-conditional/ 2 модуль

/**
 * 1.
 Напишите оператор if, такой,
  чтобы в качестве выражения в скобках у него были значения true, false 
  (Например, if( true ) или if( false )). 
  Посмотрите как работает этот оператор, 
  поместив какую-нибудь команду после круглых скобок (Например, console.log(1)). 
  Примечание: это задание очень простое. Если вы читая его, поняли суть, не выполняйте его 
 */
  console.log("--1--");
  if( true ) console.log(`1`);
  if( false ) console.log(`2`);

/**
 2.
 Создайте переменные m и n. 
 В m поместите произвольное числовое значение. 
 Напишите оператор ветвления if так, чтобы если m было больше 50, 
 то в переменную n помещалось слово «большое», иначе — слово «маленькое».
 */
 console.log("--2--");
 let m, n;
 m = 101;
 if(m > 50) {
    n = `большое`;
 } else {
    n = `маленькое`;
 }
 console.log(`n = ${n}`);

 /**
  3. Определите сколько раз выполнится цикл while? 
  Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.
  */
  
  console.log("--3--");
  /*
  var i = 2;
  while( i < 9 ){ // infinite loop
 console.log( i++ );
}*/

/**
 4.
 Напишите скрипт, который используя оператор 
 while выведет все числа от 45 до 67.
 */
 console.log("--4--");
let startInt = 45;
let endInt = 67;
let iteratorBuilder = startInt + " ";

while (startInt < endInt) {
    startInt++;
    iteratorBuilder += startInt + " ";
}

console.log(`iteratorBuilder = ${iteratorBuilder}`);

/**
 5.
 Напишите скрипт, который используя оператор 
 while выведет все числа от 45 до 670, кратные 10.
 */
 console.log("--5--");
 let startInt2 = 45;
 let endInt2 = 670;
 let iteratorBuilder2 = "";

 while(startInt2 < endInt2) {
    startInt2++;
    if(startInt2 % 10 == 0) {
        iteratorBuilder2 += startInt2 + " ";
    } 
 }
 console.log(`iteratorBuilder2 = ${iteratorBuilder2}`);

 /**
  6.
 Напишите скрипт, который используя оператор for выполнит два предыдущих задания.
  */
  console.log("--6--");

  // 4
  startInt = 45;
  endInt = 67;
  iteratorBuilder = startInt + " ";

  for(let i = startInt; i < endInt; i++) {
	startInt++;
    iteratorBuilder += startInt + " ";
}
console.log(`iteratorBuilder = ${iteratorBuilder}`);
  

  // 5
  startInt2 = 45;
  endInt2 = 670;
  iteratorBuilder2 = "";

  for(let i = startInt2; i < endInt2; i++) {
	startInt2++;
    if(startInt2 % 10 == 0) {
        iteratorBuilder2 += startInt2 + " ";
    }
}
 console.log(`iteratorBuilder2 = ${iteratorBuilder2}`);

/**
 7.
 Переменная n хранит целое число от 0 до 9. 
 Используя оператор switch, написать скрипт, 
 который в зависимости от числа будет выводить слово 
 (Например, если n равно 3, то будет выводиться слово «три»)
 */

 console.log("--7--");


 var n1 = 5;
 var message;

 switch(n1) {
    case(1):
        message ="Один";
        break;
    case(2):
        message = "Два";
        break;
    case(3):
        message = "Три";
        break;
    case(4):
        message = "Четыре";
        break;
    case(5):
        message = "Пять";
        break;
 }

 console.log(message);

 /**
  8. Используя document.write() и любую из циклических конструкций выведите  
  десять одинаковых изображений (надо выводить <img src="..." alt="..." />)
  */
  console.log("--8--");
for(let i = 0; i< 10; i++) {
    document.write("<img src=\"...\" alt=\"...\" />");
}

/**
 9.
 В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно. 
 Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) 
 и 1килобайт равен 1024 байта, найти количество байт в size.
 */
 console.log("--9--");
 let size = 120;
 let bytes = size;
 let unit = "Кб";

 switch(unit) {
    case('Гб'):
        bytes *= 1024;
    case('Мб'):
        bytes *= 1024;
    case('Кб'):
        bytes *= 1024;
        break;
 }

 console.log(`size = ${size}, bytes = ${bytes}, unit = ${unit}`);

 /**
  10.
  Постройте при помощи циклов JavaScript скрипт для календаря на HTML. 
  Примечание: выполнить задание для одного месяца, используя HTML-элемент table
  */
 
  console.log("--10--");

  let stringBuilder = "<table>";
  stringBuilder += 
  "<tr>"
  + "<td>Пн</td><td>Вт</td><td>Ср</td><td>Чт</td><td>Пт</td><td>Сб</td><td>Вс</td>"
  + "</tr>";
  
  let totalDays = 31;
  let startMonthDay = 5; // суббота

  let currentWeekDay = 0;
  
  // отрисовка начала первой строки
  if(startMonthDay != 0) {
    stringBuilder += "<tr>";
    for(let i = 0; i < startMonthDay; i++) {
        currentWeekDay++;
        stringBuilder += `<td></td>`;
    }
  }

  for(let i = 0; i < totalDays; i++) {
    
    if(currentWeekDay == 0) stringBuilder += "<tr>";

    stringBuilder += `<td>${(i + 1)}</td>`;

    if(currentWeekDay == 6) {
        stringBuilder += "</tr>";
    }
    if(currentWeekDay == 6) {
        currentWeekDay = 0;
    } else {
        currentWeekDay++;
    }
  }

  // отрисовка последней строки
  if(currentWeekDay > 0) {
    for(let i = (currentWeekDay - 1); i < 6; i++) {
        stringBuilder += `<td></td>`;
    }
    stringBuilder += "</tr>";
  }

  stringBuilder += "</table>";

  document.write(stringBuilder);











