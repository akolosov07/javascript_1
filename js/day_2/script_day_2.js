/*function sum(a, b) {
    console.log(a + b);
}

console.log(Math.random());
sum(2, 5);*/

/*
function square(width, height) {
    return width * height;
}

console.log(square(10, 20) == 200);
console.log(square(0, 234) == 0);
*/
//const sign = (t) => t > 0 ? 1 : t < 0 ? -1 : 0;

/*function sign(t){
    if(t > 0) {
        return 1;
    }
    if(t < 0) {
        return -1;
    }
    return 0;
}

console.log(sign(-23) == -1);
console.log(sign(56) == 1);
console.log(sign(0) == 0);

const rand = function(n, m) {
    return Math.round(Math.random()*(m-n) + n);
}*/

//Замыкание
/**
 const counter = (function (i = 0) {
    return function () {
        return i++;
    }
})()
 */


const counter = (i => () => i++)(0);
console.log(typeof counter);
console.log(counter());
console.log(counter());
console.log(counter());

console.clear();

/*function summa() {
    console.log(arguments.length)
    console.log(arguments[0]);
    console.log(arguments[1]);

    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}*/

function summa( ...args) {
    console.log(args.length)
    console.log(args[0]);
    console.log(args[1]);

    let result = 0;
    for(let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}




summa(100, 200);

console.log(summa(100, 200, 300, 400));