const user= {
    username: 'john_doe',
    price : 100,

    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}! Your price is ${this.price}.`);
    }
}

user.welcomeMessage() // Output: Welcome, john_doe! Your price is 100.

console.log(this) // Output: Window object (in a browser environment) or global object (in Node.js)


function regularFunction() {
    console.log(this) // Output: Window object (in a browser environment) or global object (in Node.js)

    let username = 'john_doe';
    console.log(`Welcome, ${this.username}!`) // Output: Welcome, undefined! (because 'this' refers to the global object, which does not have a 'username' property)
}
// regularFunction()


// Arrow function does not have its own 'this' context, it inherits 'this' from the surrounding scope
const chai = () => { // Arrow function
    const username = 'john_doe';
    console.log(this); // Output: john_doe
}; 
chai();


//syntax of arrow function
const addTwo = (num1, num2)=> {
    return num1 + num2; 
}

console.log(addTwo(5, 10)) // Output: 15

// implicit return in arrow function
const addTwoImplicit = (num1, num2) => num1 + num2; // Implicit return
console.log(addTwoImplicit(5, 10)) // Output: 15

//to return an object from an arrow function, we need to wrap the object in parentheses
const createUser = (username, price) => ({ username, price, car:"BMW" }); // Returning an object
console.log(createUser('john_doe', 100)) // Output: { username: 'john_doe', price: 100, car: 'BMW'f }

