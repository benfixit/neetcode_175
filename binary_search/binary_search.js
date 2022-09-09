// Q:704 - https://leetcode.com/problems/binary-search/

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

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

// const nums1 = [-1, 0, 3, 5, 9, 12];
// const target1 = 9;

// const nums2 = [-1, 0, 3, 5, 9, 12];
// const target2 = 2;

// console.log(search(nums1, target1));
// console.log(search(nums2, target2));

console.log(search([5], 5));
