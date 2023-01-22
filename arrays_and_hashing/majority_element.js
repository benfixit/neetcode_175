// Q: 169 - https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let max = nums[0], count = 1;

    for (let num of nums){
        if (num !== max){
            if (count > 1){
                count -= 1;
            } else {
                max = num;
            }
        } else {
            count += 1;
        }
    }

    return max;
};