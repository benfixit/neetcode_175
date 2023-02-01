// Q:179 - https://leetcode.com/problems/largest-number/
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const allZeros = nums.every(num => num === 0);

    if (allZeros){
        return '0';
    }

    const numsToStr = nums.map(num => `${num}`).sort((a, b) => {
        if (a + b > b + a){
            return -1;
        } else {
            return 1;
        }
    });

    const result = numsToStr.reduce((acc, num) => acc += num, "");

    return result;
};

console.log(largestNumber([0,0,0]))