// Q:217 - https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};

  for (let num of nums) {
    if (num in map) {
      return true;
    }

    map[num] = true;
  }

  return false;
};
