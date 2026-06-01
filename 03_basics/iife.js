//iife = immidiately invoked function expression

function greet(){
    console.log("Hello");
}
greet(); // Output: Hello


//iife
(function chai(){
    console.log("Hello from IIFE");
})(); // Output: Hello from IIFE 
//iife removes from global scope and executes immediately after its definition
// semicolon is used before iife to prevent any issues with automatic semicolon insertion (ASI) in JavaScript.


//iife with arrow function
(() => {
    console.log("Hello from IIFE with semicolon");
})();