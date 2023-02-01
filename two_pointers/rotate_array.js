//Q:189 - https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // This helps handle edge cases where k is greater than the array length
    let offset = k % nums.length;

    function reverse(arr, left, right) {
        while(left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }
    }

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the array from index 0 to index of the offset
    reverse(nums, 0, offset - 1);

    // Reverse the array from index of the offset to the end
    reverse(nums, offset, nums.length - 1);

    return nums
};
