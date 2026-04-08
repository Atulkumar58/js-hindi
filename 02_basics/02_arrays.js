const marvel_heroes = ["spiderman", "ironman", "hulk", "thor", "captain america"];
const dc_heroes = ["superman", "batman", "flash", "wonder woman", "aquaman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes); //it concatenates the two arrays and returns a new array, but it does not change the original array
console.log(allHeroes);

//spread operator
const allHeroes2 = [...marvel_heroes, ...dc_heroes]; //it also concatenates the two arrays and returns a new array, but it does not change the original array
console.log(allHeroes2);