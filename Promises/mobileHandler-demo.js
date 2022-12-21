//1. We have to GET all the mobiles with their names and Id => 1 Get call to get all the records
//2. GET mobile Information for each mobile by their Ids => mobiles.length
//3. Format the output.

// 1. Callbacks => request
// 2. Promises => axios
// 3. Asycn/Await => shortend notation of Promises => axios

//To-do we should know how to make an REST API call to a server

//Various tools available: request, axios, others

let request = require('request');

let options = {
    url: "http://127.0.0.1:3000/getMobiles",
    method: 'GET'
}

request(options, function(error, response){
    let result = {};
    if(error){
        console.log(error);
    } else {
        let mobiles = JSON.parse(response.body).records
        for(mobileIndex = 0; mobileIndex < mobiles.length; mobileIndex++){
            options.url = "http://127.0.0.1:3000/getMobileInfo/" + mobiles[mobileIndex].id
            request(options, function(error, response) {
                if(error){
                    console.log("Error getting mobile info for the id " + mobileIndex + error.message)
                } else {
                    let mobileInfo = JSON.parse(response.body).mobileInfo;
                    // mobileInfo = {
                    //     "name": "Apple iPhone X",
                    //     "price": 700,
                    //     "rating": 4,
                    //     "id": 1
                    //   }
                    result[mobileInfo.id] = mobileInfo; 
                    delete result[mobileInfo.id].id
                    console.log(result);

                    if(Object.keys(result).length == 4) {
                        options.url = "http://127.0.0.1:3000/getMobiles";
                        request(options, function(error, response)  {
                            console.log("Done", response.body, result);
                        })
                    }
                }
            })
        }

    }
})




