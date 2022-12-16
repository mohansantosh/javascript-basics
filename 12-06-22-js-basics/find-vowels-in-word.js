function findVowelsInWord(word){
    //stores the vowels occurance in a word
    //word = "animal"
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = {}
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        for(let wordIndex = 0; wordIndex < word.length; wordIndex++){
            if(vowels[vowelIndex] == word[wordIndex]) {
                result[vowels[vowelIndex]] = true;
            }
        }
    }
    //key same as property in object
    return Object.keys(result).length;
}

console.log(findVowelsInWord(sampleInput));