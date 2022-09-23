// Q: 485 - https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    
    let currentCount = 0;
    for (let i = 0; i < nums.length; i++){
        const currentNum = nums[i];
        
        if (currentNum === 1){
            currentCount += 1;
        } else {
            currentCount = 0;
        }
        
        if (currentCount > maxCount){
            maxCount = currentCount;
        }
    }
    
    return maxCount;
};