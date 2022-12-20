
//Asyncrhrous 

// console.log("Hi, I'm waiting for 10 seconds")
// setTimeout(() => {
//     console.log("Wait Done!!");
// }, 10000)
// printMyCurrentState();

// function printMyCurrentState() {
//     console.log("Now, I'm ready to play Cricket")
// }


// Execute the entire code first, move all the async tasks to a queue by
// using Promises and later execute the async codes.

console.log("Hi, I'm waiting for 10secs");

function sleepFor10secs(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name == "Mohan") {
                reject("I'm NOT feeling good");
            }
            else {
                resolve("I'm feeling good");
            }
            console.log("Wait Done!")
        }, 10000)
    })
}
//we use then and catch methods to Promsise which are basically dependent of the return value of the Promise
sleepFor10secs("Mohan")
.then((message) => {
    console.log(message + " Now, I'm ready to play Cricket" );
}).catch((errorMessage) => {
    console.log(errorMessage + " Sorry, I'm not playing Cricket");
})



// function sleepingFor5Secs() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Wait Over!!");
//             resolve();
//         }, 10000);
//     })
// }

// console.log("Hi, I'm waiting for 10 seconds")
// sleepingFor5Secs()
// .then(() => {
//     printMyCurrentState()
// })
