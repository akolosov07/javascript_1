let obj1 = {
    firstName: 'John',
    profession: 'frontender',
    head: {
        hair: 'blue',
        turn: function() {
            console.log(this);
            return this.hair;
        }
    },
    say: function(){
        return `Я ${this.firstName}, 
        работаю ${this.profession}`
    }
};
obj1['salary'] = 100000;
console.log(obj1);
console.log(obj1.firstName);
console.log(obj1["firstName"]);
console.log(obj1.head.hair);
console.log(obj1["head"]["hair"]);
console.log(obj1.say());
console.log(obj1.head.turn());

console.clear();

var petya = {
    firstName: "Петя",
    age: 32,
    boom: function() {
        console.log("Бьет " +this.firstName);
    }
}

var olya = {
    firstName: "Ольга",
    age: 32,
    boom: petya.boom
}

olya.boom();

console.log('brain' in obj1);
console.log('salary' in obj1);

for(let prop in obj1){
    if(typeof obj1[prop] != 'function')
    console.log(prop + '=' + obj1[prop]);
}

let o1 =  {name: 'q'};
let o2 =  {name: 'q', age: 23};
console.log(o1==o2);

o1.toString = function(){
    return 'Разраб ' + this.name;
}

console.log(o1.toString());

let o3 = {name: 'o3', age: 23};

function addYear(delta) {
    this.age += delta;
}

window.addYear();
addYear.apply(o3, [5]);
addYear.call(o3, 5);

console.log(o3);

console.clear();

let arr = [8, 4, 5, 7, 1];

arr[3] = 700;
console.log(arr[3]);
console.log(arr.length);
console.log(arr);
console.log(arr.toString());
console.log(arr.join('-'));