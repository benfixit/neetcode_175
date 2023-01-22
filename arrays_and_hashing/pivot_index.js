// Q:724 - https://leetcode.com/problems/find-pivot-index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0, rightSum = 0;
    let index = -1; 

    for (let num of nums){
        rightSum += num;
    }

    for(let i = 0; i < nums.length; i++){
        rightSum -= nums[i];

        if (i > 0) {
            leftSum += nums[i - 1];
        }

        if (leftSum === rightSum){
            index = i;
            break;
        }
    }

    return index;
};