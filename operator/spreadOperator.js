// Example 1: Combining objects
const person = { firstName: 'Abdullahi', lastName: 'Sani' };
const details = { age: 22, occupation: 'Software Engineer' };

const combined = { ...person, ...details };
console.log(combined);
// Output: { firstName: 'Abdullahi', lastName: 'Sani', age: 22, occupation: 'Software Engineer' }

// Example 2: Copying and modifying objects
const original = { a: 1, b: 2, c: 3 };
const modified = { ...original, b: 99 };
console.log(modified);
// Output: { a: 1, b: 99, c: 3 }

// Example 3: Extracting properties
const data = { name: 'Khadijah', age: 25, city: 'Wonderland' };
const { age, ...rest } = data;
console.log(age);   // Output: 25
console.log(rest);  // Output: { name: 'Khadijah', city: 'Wonderland' }
