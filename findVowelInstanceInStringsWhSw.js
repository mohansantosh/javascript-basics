function findVowelInstancesInWordWhSw(word){
    let wordLength = word.length;
    let wordIndex = 0
    let result = {};
    while(wordIndex < wordLength){
        switch(word[wordIndex]){
            case 'a':
                if(result['a'] == undefined){
                    result['a'] = 1; 
                } else {
                    result['a']++;
                }
                break;
            case 'e':
                if(result['e'] == undefined){
                    result['e'] = 1; 
                } else {
                    result['e']++;
                }
                break;
            case 'i':
                if(result['i'] == undefined){
                    result['i'] = 1; 
                } else {
                    result['i']++;
                }
                break;
            case 'o':
                if(result['o'] == undefined){
                    result['o'] = 1; 
                } else {
                    result['o']++;
                }
                break;
            case 'u':
                if(result['u'] == undefined){
                    result['u'] = 1; 
                } else {
                    result['u']++;
                }
                break;
        }
        wordIndex++;
    }
    return result;
}


function transformSentence(sentence){
    function changeWordCase(word){
        let firstLetter = word[0];
        return firstLetter.toUpperCase() + word.split('').splice(1).join('')
     }
    return sentence.split(" ").map(changeWordCase).join(" ");
}


let sampleInput = "i like to eat apples and oranges";

console.log(transformSentence(sampleInput))
// let sampleInput = "animal";
// console.log(findVowelInstancesInWordWhSw(sampleInput));