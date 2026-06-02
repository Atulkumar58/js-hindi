const coding = ["JavaScript", "C++", "Java", "Ruby", "Python"];

const values= coding.forEach((item, index) => {
    console.log (item)
}) // Output: JavaScript, C++, Java, Ruby, Python

console.log(values) // Output: undefined
// forEach method does not return any value, it returns undefined. It is used to execute a provided function once for each array element.

const myNums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];

const newNums= myNums.filter((num) => { return num > 4 })
console.log(newNums) // Output: [5, 6, 7, 8, 9, 10]

//by foreACH LOOp

const newNums2 = [];
myNums.forEach((num) => {
    if(num > 4){
        newNums2.push(num)
    }
})

console.log(newNums2) // Output: [5, 6, 7, 8, 9, 10]


// PRACTICE FILTER AND ITS CONDITIONS
// coonditional joints are same as c++

