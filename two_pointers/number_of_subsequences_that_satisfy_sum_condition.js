//Q:1498 - https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const sortedNums = nums.sort((a, b) => a - b);
    let result = 0;

    let r = sortedNums.length - 1;

    for (let i = 0; i < sortedNums.length; i++){
        while (sortedNums[i] + sortedNums[r] > target && i <= r){
            r -= 1;
        }

        if (i <= r){
            result += Math.pow(2, r - i);
        }
    }

    return result % (Math.pow(10, 9) + 7);
};