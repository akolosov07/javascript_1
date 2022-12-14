// https://htmllab.ru/zadachi-po-javascript-regular/

/**
 1.
 Написать регулярное выражение, 
 которые проверят строки на соответствие: «a», «aaaaaa», «a aa a» 
 (т.е. проверяемые строки должны состоять из символа «a»). 
 Примечание: используйте метод test().
 */

 function testReg(check, str) {
    let regexp1 = /^[a]{1}$/; // проверка строки «a»
    let regexp2 = /^[a]{6}$/; // проверка строки «aaaaaa»
    let regexp3 = /^[a]{1}[\s][a]{2}[\s][a]{1}$/; // проверка строки «a aa a»
    switch(check)
    {
        case(1): 
            return regexp1.test(str);
        case(2):
            return regexp2.test(str);
        case(3):
            return regexp3.test(str);
    }
    return false;
 }

 console.log(testReg(1, 'a'));
 console.log(testReg(2, 'aaaaaa'));
 console.log(testReg(3, 'a aa a'));
 console.clear();
 /**
  2. 
  Написать регулярное выражение для атрибута pattern, заставляющее вводить не менее 5 алфавитно
  -цифровых символов:
  <form action="">
  <input type="text" name="text" pattern="..." required />
</form>
  */

let regexp4 = /^[A-Za-z0-9]{5,}$/; 
let ex2Str = '1w45y';
console.log(regexp4.test(ex2Str));

/*
3.
Написать регулярное выражение, которые проверят емейлы простого вида (например, test@test.test).
*/
console.clear();
let regexpemail = /^[A-Za-z0-9]{1,}[@]{1}[A-Za-z0-9]{1,}[.]{1}[A-Za-z0-9]{1,}$/;
let emailStr = 'test@test.test';
console.log(regexpemail.test(emailStr));

/*
4.
Написать скрипт, которые заменяет слово «функция» в тексте на «<mark>функция</mark>». Примечание: текст можно взять ниже
var text = "Тема: «Изоморфный интеграл по ориентированной области — актуальная национальная задача» \n Итак, ясно, что функция выпуклая книзу синхронизирует абсолютно сходящийся ряд. Наряду с этим, натуральный логарифм традиционно охватывает интеграл Дирихле. Ввиду непрерывности функции f ( x ), максимум правомочен. Математическое моделирование однозначно показывает, что функция выпуклая книзу по-прежнему востребована. Умножение двух векторов (векторное) притягивает убывающий ряд Тейлора. \n По сути, предел функции оправдывает анормальный предел функции. Дисперсия усиливает равновероятный постулат. Дисперсия осмысленно отражает график функции многих переменных. Не доказано, что прямоугольная матрица стабилизирует интеграл по бесконечной области. \n Детерминант иррационален. Собственное подмножество восстанавливает криволинейный интеграл, как и предполагалось. Интеграл от функции, имеющий конечный разрыв, исключая очевидный случай, иррационален."
*/
console.clear();
var text = "Тема: «Изоморфный интеграл по ориентированной области — актуальная национальная задача» \n Итак, ясно, что функция выпуклая книзу синхронизирует абсолютно сходящийся ряд. Наряду с этим, натуральный логарифм традиционно охватывает интеграл Дирихле. Ввиду непрерывности функции f ( x ), максимум правомочен. Математическое моделирование однозначно показывает, что функция выпуклая книзу по-прежнему востребована. Умножение двух векторов (векторное) притягивает убывающий ряд Тейлора. \n По сути, предел функции оправдывает анормальный предел функции. Дисперсия усиливает равновероятный постулат. Дисперсия осмысленно отражает график функции многих переменных. Не доказано, что прямоугольная матрица стабилизирует интеграл по бесконечной области. \n Детерминант иррационален. Собственное подмножество восстанавливает криволинейный интеграл, как и предполагалось. Интеграл от функции, имеющий конечный разрыв, исключая очевидный случай, иррационален.";
text = text.replace(/функция/g, '<mark>функция</mark>');
console.log(text);

/*
5.
Написать функцию, которая при помощи регулярных выражений разбивает текст 
на отдельные слова и находит частоту встречаемости отдельных слов.
*/
console.clear();

class WordItem {
    #_word;
    #_count;
    constructor(word, count = 1) {
        this.#_word = word;
        this.#_count = count;
    }

    get word() {
        return this.#_word;
    }
    set word(value) {
        this.#_word = value;
    }
    get counter() {
        return this.#_count;
    }
    incremetCounter() {
        this.#_count++;
    }
}

function countWords(str) {
    const arr = str.split(' ');
    let wordsArray = [];
    for(let i = 0; i < arr.length; i++) {
        let itemExist = false;
        for(let j = 0; j < wordsArray.length; j++) {
            if(wordsArray[j].word == arr[i]) {
                wordsArray[j].incremetCounter();
                itemExist = true;
            }
        }
        if(itemExist == false) {
            var wordItem = new WordItem(arr[i], 1);
            wordsArray.push(wordItem);
        }
    }
    return wordsArray;
  }
  

  let testStr = "One One Two Three Four";
  let wordsArray = countWords(testStr);

  for(let i = 0; i < wordsArray.length; i++) {
    console.log(`Word = ${wordsArray[i].word}, count = ${wordsArray[i].counter}`);
  }
