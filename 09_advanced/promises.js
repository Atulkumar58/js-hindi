const promiseOne= new Promise(function(resolve, reject){
    //Do async task
    // DB calls, cyptography, network task
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
});

promiseOne.then(function(){
    console.log('Promise consumed');
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log('promise 2 consumed')
})

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username: 'atul', email: 'example.@gmail.com'});
    }, 1000)
})
promiseThree.then(function(user){
    console.log(`the email id for ${user.username} is ${user.email}`)
})


const promiseFour= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false;
        if(!error){
            resolve({username:'atul', pasword:'123'})
        }else{
            reject('REJECT: something went wrong');
        }
    }, 1000)
})
//THEN CHAINING
promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log.username
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('the promise is completed'))


promiseFive =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:'javascript', pasword:'123'})
        }else{
            reject('REJECT: JS went wrong');
        }
    }, 1000)
});

async function consumepromisefive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumepromisefive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log(error)
//     }
// } 
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then()