//MAP
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums= mynumbers.map((num) => { return num * 2 });

console.log(newnums)

//CHAINING
const newnums2 = mynumbers.map((num) => {return num * 2}).map((num) => num+1);

console.log(newnums2)