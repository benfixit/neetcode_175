// Q: 9 - https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let origNum = x;
    
    if (origNum < 0) {
        return false;
    }
    
    let reversedNum = 0;
    
    while(origNum > 0){
        reversedNum = (reversedNum * 10) + (origNum % 10);
        
        origNum = Math.floor(origNum / 10)
    }
        
    return reversedNum === x
};