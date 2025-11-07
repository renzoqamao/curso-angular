import { taxCalculation, type Product } from './06-function-destructuring'
const shoppingCart : Product[] =[
    { description : "nokia" , price : 100},   { description : "nokia2" , price : 50}
];

const [total , tax] = taxCalculation({tax: 0.15, products: shoppingCart});

console.log('total : ' , total);
console.log('tax : ' , tax);