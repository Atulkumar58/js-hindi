const myNums= [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

const myTotal= myNums.reduce(function (acc, num){
    console.log(`Accumulator: ${acc}, Number: ${num}`)
    return acc + num;
}, 0);
console.log(myTotal)


//REDUCE WITH ARROW FUNCTION
const myTotal2= myNums.reduce((acc, num) => {
    console.log(`Accumulator: ${acc}, Number: ${num}`)
    return acc + num;
}, 0);
console.log(`The Total is: ${myTotal2}`);

let totalsum=0;
for(let i=0; i<myNums.length; i++){
    totalsum += myNums[i];
}
console.log(`The Total is: ${totalsum}`);


const courses = [
    {name: 'JavaScript', price: 100},
    {name: 'Python', price: 150},
    {name: 'Java', price: 120},
    {name: 'C++', price: 130}
]

const totalPrice = courses.reduce((acc, c) => {
    if(c.price > 120){
    return acc+c.price;
    } else {
        return acc;
    }
 }, 0);
console.log(`Total Price: ${totalPrice}`)
