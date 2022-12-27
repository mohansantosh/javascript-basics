// Write a program that stores countries and their properties in a file.

// Input for the program are
//     1. Array of countries ["india", "korea", "myanmar"]
//     2. Array of properties we should filter out ["flag", "capital", "area"] 




// HINT: Use Async/Await, Promises, Axios, fs module

// API to search a country by Name: https://restcountries.com/v3.1/name/india
// If I give invalid country name  throw an error;
// If I give an invalid property thow an error

// country.json in  sorted order by country Name:
// {

//     "British Indian Ocean Territory": {
//         "capital": [
//             "Diego Garcia"
//         ],
//         "maps": {
//             "googleMaps": "https://goo.gl/maps/bheNucgekVEYozoi6",
//             "openStreetMaps": "https://www.openstreetmap.org/relation/1993867"
//         }
//     },
//     "Republic of India": {
//         "capital": [
//             "New Delhi"
//         ],
//         "maps": {
//             "googleMaps": "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
//             "openStreetMaps": "https://www.openstreetmap.org/relation/304716"
//         }
//     }
// }

//1. Network Call - Promises/async-await
//2. Save the result to a file - async and sync.

const axios = require("axios");
const request = require("request");
const fs = require("fs");


/**
 * 
 * @param {*} countryName: country's name
 */
function getCountryInfoRequestModule(countryName){
    return new Promise((resolve, reject) => {
        let options = {
            url: "https://restcountries.com/v3.1/name/" + countryName,
            method: "get"
        }
        request(options, (response, error) => {
            if(error) {
                reject("Error fetching country information");
            } else {
                resolve(JSON.parse(response.body))
            }
        })
    })
}

async function getCountryInfo(countryName) {
    try {
        let options = {
            url: "https://restcountries.com/v3.1/name/" + countryName,
            method: "get"
        }
        let response = await axios(options);
        if(response){
            return response.data;
        } else {
            let error = new Error("Error fetching Countries data for " + countryName);
            throw error;
        }
    } catch(error){
        if(error.message == "Request failed with status code 404"){
            throw new Error("Error fetching Countries data for country" + countryName);
        }
        throw error;
    }
}

async function getAllCountriesInfo(countryNames, properties){
    try {
        //Creating an array of Requests that returns an Promise
        let allCountriesPromises = countryNames.map((countryName) => getCountryInfo(countryName));
        //Await for the Promise to fullfil, either to reject or resolve.
        let allCountriesData = await Promise.all(allCountriesPromises);
        // [[India, British Indian Territory], Myanmar] convert to [india, British Indian Territory, Myanmar];
        // allCountriesData[0] = Array of India searches = 2
        // allCountriesData[1] = Array of Myanmar = 1
        // [india, British Indian Territory, Myanmar];
        // console.log("before","India " + allCountriesData[0].length,  "Myanmar " + allCountriesData[1].length)
        allCountriesData = allCountriesData.reduce((result, country) => {
            if(!result) {
                result = [];
            }
            result.push(...country);
            return result;
        }, [])
        
        let formattedData = [];
        //Iterate through all the countries that we searched for 'countryNames'
        for(let countryIndex = 0; countryIndex < allCountriesData.length; countryIndex++) {
            let countryOfficalName = allCountriesData[countryIndex]["name"]["official"];
            let countryObj = {};
            //properties = ["flags", "area"]
            //properties[0] = "flags"
            //allCountriesData[countryIndex][properties[0]] is equal to 
            //allCountriesData[countryIndex]["flags"]
            let propertyResult = {};
            //gather all the property information of each country
            for(let propertyIndex = 0; propertyIndex < properties.length; propertyIndex++) {
                let propertyValue = allCountriesData[countryIndex][properties[propertyIndex]];
                if(propertyValue) {
                    propertyResult[properties[propertyIndex]] = propertyValue;
                } else {
                    throw new Error("Country Information related to " + properties[propertyIndex] + " does not exists"  + " for country " + countryOfficalName);
                }
            }
            countryObj[countryOfficalName] = propertyResult;
            formattedData.push(countryObj);
        }
        //Sort the coutries by their offical country names
        formattedData.sort((a, b) => {
            let tmp1 = Object.keys(a)[0];
            let tmp2 = Object.keys(b)[0];
            return (tmp1).localeCompare(tmp2);
        })
    } catch(error) {
        throw error;
    }
}

getAllCountriesInfo(["india", "myanmar"], ["flags", "area"])
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})

getAreaOfCountryBoundry("IND")
.then((totalArea) => {
    totalArea = india Area + Area of all neighbouring countries of India
    console.log(totalArea);
})