let score= "3abc"

console.log(typeof score); // number
console.log(typeof Number(score + "")); // string
console.log (Number(score));

//typecasting
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

//type casting
//"33" => 33
//"33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN