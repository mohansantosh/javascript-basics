let request = require("request");

function getAllMobileRecords(){
    return new Promise((resolve, reject) => {
        let options = {
            url: "http://127.0.0.1:3000/getMobiles",
            method: 'GET'
        }
        request(options, function(error, response) {
            if(error){
                reject(error);
            } else {
                resolve(JSON.parse(response.body).records);
            }
        })
    })
}

function getMobileInfoById(id){
    let options = {
        url: "http://127.0.0.1:3000/getMobileInfo/" + id,
        method: 'GET'
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response) => {
            if(error) {
                reject(error);
            } else {
                // response.body = {
                //     "mobileInfo": {
                //       "name": "Apple iPhone X",
                //       "price": 700,
                //       "rating": 4,
                //       "id": 1
                //     }
                //   }
                resolve(JSON.parse(response.body).mobileInfo)
            }
        })
    })
}


getAllMobileRecords()
.then((mobiles) => {
    let requestsByPromise = [];
    //we are creating 'pending' promises for all the GET requests 
    for(let mobileIndex = 0; mobileIndex < mobiles.length; mobileIndex++){
        requestsByPromise.push(getMobileInfoById(mobiles[mobileIndex].id))
    }

    return Promise.all(requestsByPromise)
        .then((mobilesInfo) => {
            let result = {};
            if(mobilesInfo.length > 0) {
                for(let mobileIndex = 0; mobileIndex < mobilesInfo.length; mobileIndex++){
                    result[mobilesInfo[mobileIndex].id] = mobilesInfo[mobileIndex];
                    delete result[mobilesInfo[mobileIndex].id].id
                }
                return result;
            }
        })
        .catch((error) => {
            console.log("error from the server", error);
        });
})
.then((finalResult) => {
    console.log("finalResult", finalResult);
})
.catch((error) => {
    console.log(error);
})

// Promise.all
// Promise.reject
// Promise.resolve
// Promise.allSettled