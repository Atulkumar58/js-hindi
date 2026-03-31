//declaration and initialization of an array
const arr= [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);

//other ways
const arr2 = new Array(6,7,8,9,10);
console.log(arr2);

//string array
const strArr = ['apple', 'banana', 'cherry'];
console.log(strArr);
//mixed array
const mixedArr = [1, 'hello', true, null, undefined, {name: 'John'}, [1,2,3]];
console.log(mixedArr);


//array methods
console.log(arr.length); // gives the length of the array
console.log(arr.push(6)); // adds an element to the end of the array and returns the new length
arr.pop();

arr.unshift(0); // adds an element to the beginning of the array and returns the new length
console.log(arr);
arr.shift(); // removes the first element of the array and returns it
console.log(arr);


console.log(arr.includes(3));
console.log(arr.indexOf(3)); // gives the index of the first occurrence of the element in the array, returns -1 if not found

const newArr = arr.join(', '); // concatenates all elements of the array into a string, separated by the specified separator
console.log(newArr); //strin format

//slice and splice
