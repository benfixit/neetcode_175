// Q: 2119 - https://leetcode.com/problems/a-number-after-a-double-reversal/

/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {  
    const reverse = (digits) => {
        let negative = false;
        let reversedNum = 0;
        
        if (digits < 0){
            negative = true;
            digits *= -1;
        }
        
        while (digits > 0){
            reversedNum = (reversedNum * 10) + (digits % 10);
            
            digits = Math.floor(digits / 10);
        }
        
        return negative ? -reversedNum : reversedNum;
    }
        
    return reverse(reverse(num)) === num
};