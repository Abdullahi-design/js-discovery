const numbers = [1, 2, 3, 4, 5];
const num = 23;

// Calculate the sum of all numbers in the array using reduce
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, num); // num can be replaced with 0 if there isnt another parameter

console.log(sum); // Output: 38
