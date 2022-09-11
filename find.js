const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 1, name: 'Mobile', price: 80000 },
    { id: 1, name: 'Watch', price: 45000 },
    { id: 1, name: 'Tablet', price: 35000 },
    { id: 1, name: 'Laptop', price: 23000 },
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);