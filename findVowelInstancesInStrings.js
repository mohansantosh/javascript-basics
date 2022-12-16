function vowelsInstancesInString(string){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = {};
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
        for(let stringIndex = 0; stringIndex < string.length; stringIndex++){
            if(vowels[vowelIndex] == string[stringIndex]){
                if(result[vowels[vowelIndex]] == undefined) {
                    result[vowels[vowelIndex]] = 1;
                }
                else {
                    result[vowels[vowelIndex]]++;
                } 
            }
        }
    }
    return result;
}

function vowelsInstancesInStringV2(string){
    let result = {};
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    string.split('').forEach((stringValue) => {
        vowels.forEach((vowelValue) => {
            if(stringValue == vowelValue){
                if(result[stringValue] == undefined){
                    result[stringValue] = 1;
                } else {
                    result[stringValue]++;
                }
            }
        })
    });
    return result;
}


console.log(vowelsInstancesInStringV2("aeioua"))