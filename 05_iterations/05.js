const coding =["JavaScript", "C++", "Java", "Ruby", "Python"];

coding.forEach(function  (item) {
    console.log(item) // Output: JavaScript, C++, Java, Ruby, Python
}) //callback function 
// callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In this case, the anonymous function (function(item) { console.log(item) }) is the callback function that is executed for each item in the coding array.

function print (item){
    console.log(item) // Output: JavaScript, C++, Java, Ruby, Python
}

coding.forEach(print) // Output: JavaScript, C++, Java, Ruby, Python

coding.forEach( (item, index) => {
    console.log(`${index} : ${item}`) // Output: 0 : JavaScript, 1 : C++, 2 : Java, 3 : Ruby, 4 : Python
}
)