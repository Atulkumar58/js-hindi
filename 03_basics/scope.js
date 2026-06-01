var c=300
if(true){
    var c=30
}
console.log(c) //var should not be used 
    //we should use let and constt instead

function addone(number){
    return number + 1;
}
console.log(addone(5)) // Output: 6


const addTwo = function(number){
    return number + 2;
}
console.log(addTwo(5)) // Output: 7
                        //we cannot access addTwo before its declaration because of hoisting
                        //but we can access addone before its declaration because of hoisting