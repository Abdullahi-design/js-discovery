const numbers = [1, 2, 3, 4, 5];

// Check if all elements are greater than 0
const allPositive = numbers.every((number) => number > 0);
console.log(allPositive); // Output: true

// Check if all elements are even numbers
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // Output: false (because 1 and 3 are not even)
