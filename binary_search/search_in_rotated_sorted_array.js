// Q:33 - https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
