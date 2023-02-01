// Q:674 - https://leetcode.com/problems/longest-continuous-increasing-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let count = 1;
    let longest = 1;

    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] < nums[i + 1]){
            count += 1;
            longest = Math.max(longest, count);
        } else {
            count = 1;
        }
    }

    return longest;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS2 = function(nums) {
    let i = 0, j = i + 1;
    let longest = j - i;

    while (i < nums.length && j < nums.length){
        if (nums[j] > nums[j - 1]){
            j += 1;
        } else {
            longest = Math.max(longest, j - i);
            i = j;
            j += 1;
        }
    }

    return Math.max(longest, j - i);
};

let nums = [1,3,5,4,7]
console.log(findLengthOfLCIS(nums));

nums = [2,2,2,2,2]

console.log(findLengthOfLCIS(nums));