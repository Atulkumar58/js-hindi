//for of loop 

const arr = [1, 2 , 3, 4, 5];

for(const num of arr){
    console.log(num) // Output: 1, 2, 3, 4, 5
}


const str = "Hello";
for(const char of str){
    console.log(char) // Output: H, e, l, l, o
}

//MAPS IN JAVASCRIPT
const myMap = new Map();
myMap.set('In', 'India');
myMap.set('Us', 'United States');
myMap.set('Uk', 'United Kingdom');
myMap.set('In', 'P'); //DUPLICATE KEY  it will overwrite the previous value of 'In' key

for(const [key, value] of myMap){
    console.log(`${key} : ${value}`) // Output: In : India, Us : United States, Uk : United Kingdom, IN : pakistan
}

//objects are not iterable in JavaScript, so we cannot use for of loop directly on objects. However, we can use Object.entries() to convert the object into an array of key-value pairs and then iterate over it using for of loop.