//Q:1984 - https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    const sortedNums = nums.sort((a, b) => a - b);
    let i = 0, j = i + k - 1;
    let minimumDiff = sortedNums[j] - sortedNums[i];

    while (i < sortedNums.length && j < sortedNums.length){
        const diff = sortedNums[j] - sortedNums[i];
        if (diff < minimumDiff){
            minimumDiff = diff
        }

        i += 1;
        j = i + k - 1;
    }

    return minimumDiff;
};