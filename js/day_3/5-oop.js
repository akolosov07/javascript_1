function City(name, population) {
    this.name = name;
    this.population = population;
    this.method = function(){}
}
City.prototype.show = function() {
    for(let i in this)
    console.log(`${i}=${this[i]}`);
}
let c1 = new City("Москва", 1.1e7);
c1.show();

console.clear();

class Goods {
    constructor(
       title, price
    ){
        this.title = title;
        this.price = price;
    }
    show(){
        for(let prop in this){
            console.log(`${prop}=${this[prop]}`);
        }
    }
}

class Phone {
    constructor(title, price){
        super(title, price)
        this.type = 'смартфон';
    }
}


let goods = [];
goods.push(new Goods('Смартфон 1', 45000));
goods.push(new Goods('Смартфон 2', 95000));
goods.push(new Phone('Смартфон 3', 5000));
goods.forEach(item => item.show());

let {title:t1, price:p1} = goods[0]; 
console.log(t1, p1);
let [a, b] = [23, 45];
