//Q:1004 - https://leetcode.com/problems/max-consecutive-ones-iii
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // Keep counting until num of 0's === k, then measure window;
    // When num of 0's > k, keep moving start until num of 0's === k, the measure again

    let start = 0, end = 0;
    let numOfZeros = 0;
    let max = 0;

    while(end < nums.length){
        if (nums[end] === 0){
            numOfZeros += 1;
        }

        // shrink the window
        while (numOfZeros > k){
            if (nums[start] === 0){
                numOfZeros -= 1;
            }

            start += 1;
        }

        console.log(start, end)

        max = Math.max(max, end - start + 1);

        end += 1;
    }

    return max;
};