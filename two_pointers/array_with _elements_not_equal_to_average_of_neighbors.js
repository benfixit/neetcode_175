// Q:1968 - https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let l = 0, r = sortedNums.length - 1;
    const result = [];

    while(l < r){
        result.push(sortedNums[l]);
        result.push(sortedNums[r]);

        l += 1;
        r -= 1;
    }

    if (sortedNums.length % 2 === 1){
        result.push(sortedNums[l]);
    }

    return result;
};