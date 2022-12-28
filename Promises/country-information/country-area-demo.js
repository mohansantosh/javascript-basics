// Write a program that calculates that total area of a country and it's border countries

const { CountryCodes } = require("validator/lib/isISO31661Alpha2")

// Inputs for the program is country Code
// Example: "IND", "CHN"

// Input is "IND"

// Get API to fetch countries information: https://restcountries.com/v3.1/alpha/

// India's border countries are borders": [
//     "BGD",
//     "BTN",
//     "MMR",
//     "CHN",
//     "NPL",
//     "PAK"
// ]

// Output => India Area + Area of all the border countries [
//     "BGD",
//     "BTN",
//     "MMR",
//     "CHN",
//     "NPL",
//     "PAK"
// ]

// 1. Get all the border countries for a given Country
// 2. Get Country Area 
// 3. Get area of all the border countries.
//       1. Get area of a counry by countryCode
// 4. Sum Country Area  + Area of all the border countries
const axios = require("axios");

async function getCountryBorders(countryCode) {
    try{
        let options = {
            url: "https://restcountries.com/v3.1/alpha/" + countryCode,
            method: "get"
        };
        
        let response = await axios(options);

        if(response) {
            return {
                countryArea: response.data[0]["area"],
                borders: response.data[0]["borders"]
            };
        } else {
            throw new Error("Error getting the country's area and it's borders for " + countryCode);
        }

    } catch(error) {
        throw error;
    }
}


async function getAreaByCountryCode(countryCode) {
    try {
        let options = {
            url: "https://restcountries.com/v3.1/alpha/" + countryCode,
            method: "get"
        };
        let response = await axios(options);

        if(response) {
            return response.data[0]["area"];
        } else {
            throw new Error("Error getting the country's area and it's borders for " + countryCode);
        }

    } catch(error) {
        throw error;
    }
}

async function getAreaOfAllBorders(countryCode) {
    try {
        let countryBordersAndArea = await getCountryBorders(countryCode);
        //Initiating the requests to get area of a country by country code through Promises;
        let allBorderCountriesPromies = countryBordersAndArea.borders.map((countryCode) => getAreaByCountryCode(countryCode));
        let allBorderCountryAreas = await Promise.all(allBorderCountriesPromies);

        return allBorderCountryAreas.reduce((totalArea, countryArea) => {
            return totalArea + countryArea;
        }, countryBordersAndArea.countryArea );
        
    } catch(error) {
        throw error;
    }
}

getAreaOfAllBorders("IND")
.then((totalArea) => {
    console.log(totalArea);
})
.catch((error) => {
    console.log(error);
})





























