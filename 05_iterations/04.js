const object ={
    js : "JavaScript",
    cpp : "C++",
    java : "Java",
    rb : "Ruby",
    py : "Python"
}

// for in loop is used to iterate over the properties of an object
for(const key in object){
    console.log(`${key} : ${object[key]}`) // Output: js : JavaScript, cpp : C++, java : Java, rb : Ruby, py : Python
}

const arr = [1, 2 , 3, 4, 5];
for(const index in arr){
    console.log(`${index} : ${arr[index]}`) // Output: 0 : 1, 1 : 2, 2 : 3, 3 : 4, 4 : 5
}