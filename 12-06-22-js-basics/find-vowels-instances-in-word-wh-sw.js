//Write a program that return vowels and their occurances in a word using 'while' and 'switch' statements

function findVowelInstancesInWordWhSw(word){
    let result = {};
    //'animal'.length = return number of characters in a string; length = 6
    //vowels = ['a', 'e', 'i', 'o', 'u'] []
    //word = 'animal'
    let wordLength = word.length;
    let wordIndex = 0;

    while(wordIndex < wordLength){
        switch(word[wordIndex]) {
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


let sampleInput = "animal";

console.log(findVowelInstancesInWordWhSw(sampleInput));