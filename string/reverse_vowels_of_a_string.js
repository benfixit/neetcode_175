// Q: 345 - https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    const strArr = s.split("");
    
    let left = 0, right = strArr.length - 1;
    
    let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    
    while (left < right) {
        while (left < right && !vowels.has(strArr[left])){
            left += 1;
        }
        
        while (left < right && !vowels.has(strArr[right])){
            right -= 1;
        }
        
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;

        left += 1;
        right -= 1;
    }
    
    return strArr.join("");
};