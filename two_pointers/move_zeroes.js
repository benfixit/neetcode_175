// Q:283 - https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let lastSeenZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            const temp = nums[lastSeenZeroIndex]
            nums[lastSeenZeroIndex] = nums[i];
            nums[i] = temp;
            lastSeenZeroIndex += 1;
        }
    }
    
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
// 1,0
console.log(moveZeroes([2, 1]))