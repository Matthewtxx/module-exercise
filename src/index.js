const fruits = require('./foods');
const { choice, remove } = require('./helpers');

const randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');

remove(fruits, randomFruit); // Remove the selected fruit

console.log(`I'm sorry, we're all out. We have ${fruits.length} ${
  fruits.length === 1 ? 'fruit' : 'fruits'
} left.`);