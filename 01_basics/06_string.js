const name ="John Doe ";
const repocount =50

console.log(name + repocount);

console.log(`My name is ${name} and I have ${repocount} repositories`);

const game= new String("Chess");

console.log(game[0])
console.log(game.length)
console.log(game.toUpperCase())
console.log(game.toLowerCase())
console.log(game.charAt(2))
console.log(game.indexOf("s"))


const news= game.substring(1, 4);
console.log(news)


const new_string_1 = "   Hello World!   ";
console.log(new_string_1.trim())


const url = "https://www.example.com/atul%20singh";
console.log(url.replace("%20", " "))

console.log(url.includes('atul'))