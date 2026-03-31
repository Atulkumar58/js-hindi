const score = 100;
console.log(score);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // gives the value to 2 decimal places


const otherNum = 151.8966;

console.log(otherNum.toPrecision(3)) // gives the value to 3 significant digits
console.log(otherNum.toPrecision(1)) // gives the value in exponential
//  notation with 2 digits after the decimal point


//+++++++++++++++ MATH ++++++++++++++++++++++++
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.round(4.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));

console.log(Math.max(1, 5, 3, 9, 2));
console.log(Math.min(1, 5, 3, 9, 2));

console.log(Math.random()); // gives a random number between 0 and 1 (1 exclusive)
console.log(Math.random() * 10 +1); // gives a random number between 0 and 10 (10 exclusive)
