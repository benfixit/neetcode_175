// Q: 58 - https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastIndex = s.length - 1;
    let wordLen = 0;

    while (lastIndex >= 0){
        if(s[lastIndex] === " "){
            lastIndex -= 1
        } else {
            while(lastIndex >= 0){
                if(s[lastIndex] !== " "){
                    lastIndex -= 1;
                    wordLen += 1
                } else {
                    return wordLen
                }
            }
        }
    }

    return wordLen
};

 var lengthOfLastWord1 = function(s) {
    const arr = s.trim().split(" ");
    
    return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("a"))