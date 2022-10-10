// Q: 953 - https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
    const dict = new Map();
    
    for(let i = 0; i < order.length; i++){
        dict.set(order[i], i);
    }
    
    const compareWords = (word1, word2) => {        
        const len = Math.min(word1.length, word2.length);
        
        for(let i = 0; i < len; i++){
            if (dict.get(word1[i]) === dict.get(word2[i])){
                continue;
            } else {
                return dict.get(word1[i]) < dict.get(word2[i])
            }
        }
        
        
        return word1.length <= word2.length;
    }
    
    for(let j = 1; j < words.length; j++){
        const currentWord = words[j];
        const previousWord = words[j - 1];
        
        if(!compareWords(previousWord, currentWord)){
            return false;
        }
    }
    
    return true;
};