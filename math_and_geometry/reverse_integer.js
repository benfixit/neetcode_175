// Q: 7 - https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let negative = false;
    let reversedNum = 0;
    
    if (x < 0){
        negative = true;
        x *= -1
    }
    
    while (x > 0){
        const num = x % 10;
        
        reversedNum = (reversedNum  * 10) + num
        
        x = Math.floor(x / 10)
        
    }
    
    reversedNum = negative ? -reversedNum : reversedNum
    
    const positiveMax = Math.pow(2, 31) - 1;
    const negativeMax = -Math.pow(2, 31)
    
    return reversedNum <= positiveMax && reversedNum >= negativeMax ? reversedNum : 0;
};