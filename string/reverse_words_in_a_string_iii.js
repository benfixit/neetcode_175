// Q: 557 - https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let result = "";
    const strArr = s.split(" ")
    for (let word of strArr){
        const wordArr = word.split("");
        
        //reverse word
        for (let i = 0; i < wordArr.length/2; i++){
            const temp = wordArr[i];
            wordArr[i] = wordArr[wordArr.length - 1 - i];
            wordArr[wordArr.length - 1 - i] = temp;
        }
        
        result += `${wordArr.join("")} `;
        
    }
    
    return result.trim();
};