//Q: 1909 - https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    const stackFromLeft = [], stackFromRight = [];
    let removedElementsFromLeft = 0, removedElementsFromRight = 0;

    for (let i = 0; i < nums.length; i++){
        while (stackFromLeft.length && stackFromLeft[stackFromLeft.length - 1] >= nums[i]){
            stackFromLeft.pop();
            removedElementsFromLeft += 1;
        }

        stackFromLeft.push(nums[i]);
    }

    for (let i = nums.length - 1; i >= 0; i--){
        while (stackFromRight.length && stackFromRight[stackFromRight.length - 1] <= nums[i]){
            stackFromRight.pop();
            removedElementsFromRight += 1;
        }

        stackFromRight.push(nums[i]);
    }


    return removedElementsFromLeft <= 1 || removedElementsFromRight <= 1;
};