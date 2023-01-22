// Q:290 - https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const sWords = s.split(" ");
    const patternMap = new Map();
    const usedWords = new Set();
    
    if (pattern.length !== sWords.length){
        return false;
    }
    
    
    for(let i = 0; i < pattern.length; i++){
        const patternCh = pattern[i];
        const word = sWords[i];
        
        if(!patternMap.has(patternCh) && !usedWords.has(word)){
            patternMap.set(patternCh, word);
            usedWords.add(word);
        } else {
            if (patternMap.get(patternCh) !== word) {
                return false;
            }
        }
    }
    
    return true;
};