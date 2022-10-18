// Q: 268 - https://leetcode.com/problems/missing-number/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let result = nums.length;
    
    for (let i = 0; i < nums.length; i++){
        result = (result - nums[i]) + i;
    }
    
    return result;
};

 var missingNumber2 = function(nums) {
    const n = nums.length;
    let fullList = 0;
    let input = 0;
    
    for (let i = 0; i <= n; i++){
        fullList += i;
    }
    
    for (let i = 0; i < n; i++){
        input += nums[i];
    }
    
    return fullList - input;
};

 var missingNumber3 = function(nums) {
    const n = nums.length;
    let fullList = 0;
    let input = 0;
    
    for (let i = 0; i <= n; i++){
        fullList ^= i;
    }
    
    for (let i = 0; i < n; i++){
        input ^= nums[i];
    }
    
    return fullList ^ input;
};