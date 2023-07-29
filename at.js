const fruits = ['apple', 'banana', 'cherry', 'orange'];

console.log(fruits.at(2)); // Output: "cherry"
console.log(fruits.at(-1)); // Output: "orange"
console.log(fruits.at(5)); // Output: undefined (as the index is out of range)

//Also works on string

const str = 'JavaScript';

console.log(str.at(0)); // Output: "J"
console.log(str.at(-2)); // Output: "p"
console.log(str.at(10)); // Output: "" (Empty string, as the index is out of range)
