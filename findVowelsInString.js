function vowelsInWord(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = {};
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
        for(let stringIndex = 0; stringIndex < string.length; stringIndex++){
            if(vowels[vowelIndex] == string[stringIndex]){
                result[vowels[vowelIndex]] = true;
            }
        }
    }

    return Object.keys(result).length;
}

console.log(vowelsInWord("aaaaae"));