// Q:11 - https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let max = 0;

  while (left < right) {
    const [leftHeight, rightHeight, difference] = [
      height[left],
      height[right],
      right - left,
    ];

    const area = Math.min(leftHeight, rightHeight) * difference;

    max = Math.max(area, max);

    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
