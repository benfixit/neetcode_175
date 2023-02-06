//Q:209 - https://leetcode.com/problems/minimum-size-subarray-sum
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minimumSize = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    let start = 0, end = 0;

    while (end < nums.length){
        sum += nums[end];

        while (sum >= target){
            const size = end - start + 1;

            if (size < minimumSize){
                minimumSize = size;
            }

            sum -= nums[start];
            start += 1;
        }

        end += 1;
    }

    return minimumSize === Number.MAX_SAFE_INTEGER ? 0 : minimumSize;
};