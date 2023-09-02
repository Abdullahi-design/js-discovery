// Example 1: Using .some() with an Array of Numbers
const numbers = [1, 2, 3, 4, 5];

// Check if there is at least one even number in the array
const hasEvenNumber = numbers.some((number) => number % 2 === 0);

if (hasEvenNumber) {
  console.log('The array contains at least one even number.');
} else {
  console.log('The array does not contain any even numbers.');
}

// Example 2: Using .some() with an Array of Strings
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Check if there is at least one fruit that starts with 'b' in the array
const startsWithB = fruits.some((fruit) => fruit.startsWith('b'));

if (startsWithB) {
  console.log('The array contains at least one fruit that starts with "b".');
} else {
  console.log('The array does not contain any fruits that start with "b".');
}
