

function findVowelInstancesInWordV2(word){
    // Access all the Global Scope variables  + variables defined in this fn findVowelInstancesInWordV2
    let result = {}
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    word.split('').forEach((wordChar, wordIndex) => {
        //callback funtion for word
        vowels.forEach((vowelChar, vowelIndex) => {
            //Its' own foreach scope
            //Outside foreach scope
            //Scope of findVowelInstancesInWordV2
            //scope of Global Scope
            if(vowelChar == wordChar){
                if(result[vowelChar] == undefined){
                    result[vowelChar] = 1;
                } else {
                    result[vowelChar]++;
                }
            }
        })
    });
    return result;
}

let sampleInput = 'animal';
console.log(findVowelInstancesInWordV2(sampleInput));