function addnumber(number1, number2){
    return number1 + number2;
}

console.log(addnumber(5, "a")); // Output: 15

function loginUserMessage(username){
    if (!username) {
        return "Please provide a username";
    }   
    return `${username} just logged in`;
}

console.log(loginUserMessage("john")); // Output: john just logged in