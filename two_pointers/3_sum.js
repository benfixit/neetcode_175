/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const currentNum = nums[i];

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = currentNum + nums[left] + nums[right];

      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        result.push([currentNum, nums[left], nums[right]]);

        left += 1;
        right -= 1;

        // Keep moving the left pointer forward to skip over duplicate numbers
        while (left < right && nums[left] === nums[left - 1]) {
          left += 1;
        }

        // Keep moving the right pointer backward to skip over duplicate numbers
        while (left < right && nums[right] === nums[right + 1]) {
          right -= 1;
        }
      }
    }
  }

  return result;
};

const input = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

console.log(threeSum(input));
