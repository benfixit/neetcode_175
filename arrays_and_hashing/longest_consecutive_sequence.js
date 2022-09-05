// Q:128 - https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const map = new Map();
  let longestSequence = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }

  for (let num of nums) {
    if (map.has(num - 1)) {
      continue;
    } else {
      let startNum = num,
        currentSequence = 0;

      while (map.has(startNum)) {
        currentSequence += 1;
        startNum += 1;
      }

      longestSequence = Math.max(currentSequence, longestSequence);
    }
  }

  return longestSequence;
};
