const CarBuilder = require('./index');

const bmw = new CarBuilder('bmw', 'x6', 2020).addInStock().build();
const audi = new CarBuilder('audi', 'a8', 2021).notForSale().build();
const mercedes = new CarBuilder('mercedes-benz', 'c-class', 2019).build();

console.log(bmw)
console.log(audi)
console.log(mercedes)
