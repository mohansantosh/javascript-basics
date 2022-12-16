function calculateSumOfArray(arrayOfIntegers){
    let totalSum = 0;
    for(let index = 0; index < arrayOfIntegers.length; index++){
        totalSum = totalSum + arrayOfIntegers[index];
    }
    return totalSum;
}

let sampleInput = [1, 2, 3, -1]

console.log(calculateSumOfArray(sampleInput));



