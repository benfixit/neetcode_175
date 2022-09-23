// Q: 14 - https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let shortestWord = strs[0];
    let longestCommonPrefix = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < strs.length; i++){
        if (strs[i].length < shortestWord.length){
            shortestWord = strs[i];
        }
    }
    
    for (let str of strs) {
        let currentCommonPrefix = 0

        for (let i = 0; i < shortestWord.length; i++){
            if (str[i] !== shortestWord[i]){
                break;
            }

            currentCommonPrefix += 1;
        }
        
        if (currentCommonPrefix < longestCommonPrefix) {
            longestCommonPrefix = currentCommonPrefix;
        }
    }
    
    return shortestWord.slice(0, longestCommonPrefix)
};

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    const firstWord = strs[0];
    const remainingWords = strs.slice(1)
    let longestCommonPrefix = "";
    
    for (let i = 0; i < firstWord.length; i++){
        for (let str of remainingWords){
            if (!str[i] || str[i] !== firstWord[i]){
                return longestCommonPrefix;
            }
        }
        
        longestCommonPrefix += firstWord[i];
    }
    
    return longestCommonPrefix;
};