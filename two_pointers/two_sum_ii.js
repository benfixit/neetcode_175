// Q:167 - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum > target) {
            right -= 1;
        } else if (sum < target) {
            left += 1
        } else {
            return [left + 1, right + 1]
        }
    }

};