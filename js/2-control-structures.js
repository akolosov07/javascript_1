

/*let quantity = 15; // кол-во товаров
let word = 'товаров'; //слово

if( quantity % 100 < 5 || quantity % 100 > 20 ){
    if(quantity % 10 == 1) word = 'товар'; 
    if(quantity % 10 > 1 && quantity % 10 < 5) {
        word = 'товара';
    }
}


console.log(`${quantity} ${word}`);
console.log(quantity + ' ' + word);


let num = Math.round(Math.random() * 100);

if(num % 2) {
    console.log(`${num} нечетное`);
} else {
    console.log(`${num} четное`);
}

console.log(num % 2 ? `${num} нечетное` : `${num} четное`);

console.log(2 > 3 ? 4 : 5);

let a = 2 > 3 ? 4 : 5;

let day = 2; // воскресенье
let menu = '';
switch(day) {
    case 0: menu = 'бутерброд с яйцом'; break;
    case 1: menu = 'каша овсянка'; break;
    case 2: menu = 'курица'; break;
    case 3: menu = 'салат'; break;
    case 4: menu = 'фрукты'; break;
    case 5: menu = 'стейк'; break;
    default: menu = 'шашлык рыбный';
}
console.log(day, menu);
*/

let counter = 0;
while(counter < 5) {
    counter++;
    console.log(counter);
}


/*При помощи цикла for построить елочку */
var stars = "*";
for(i = 0; i < 5; i++) {
    console.log(stars);
    stars += "**";
}

let result = '';