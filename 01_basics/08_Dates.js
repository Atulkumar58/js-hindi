let mydate= new Date();
console.log(mydate.toString());     //gives date in string format
console.log(mydate.getDate());  //gives date of the month
console.log(mydate.toISOString());  //gives date in ISO format
console.log(mydate.toLocaleString())    //gives date and time in local format
console.log(mydate.getTime().toString())  //gives time in milliseconds since 1 Jan 1970


let mydate1= new Date("2020-10-20"); //YYYY-MM-DD format
let mydate2= new Date(2023, 1, 1)
let mydate3= new Date(2023, 1, 1, 10, 30, 0) //YYYY-MM-DD HH:MM:SS format
console.log(mydate1.toDateString());     //gives date in string format
console.log(mydate2.toDateString());     //gives date in string format
console.log(mydate3.toLocaleString());     //gives date in string format

