// Q: 136 - https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let result = 0;
    
    for (let num of nums){
        result ^= num;
    }
    
    return result;
};