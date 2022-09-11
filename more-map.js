const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 80000},
    {id: 1, name: 'Watch', price: 45000},
    {id: 1, name: 'Tablet', price: 35000},
    {id: 1, name: 'Laptop', price: 23000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
// console.log(items);
console.log(prices);