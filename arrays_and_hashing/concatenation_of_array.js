//Q:1929 - https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const result = nums.concat(nums);

    return result;
};

var getConcatenation = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++){
        result[i] = nums[i];
        result[i + nums.length] = nums[i];
    }

    return result;
};

var getConcatenation = function(nums) {
    const result = [];
    const double = nums.length * 2;

    for (let i = 0; i < double; i++){
        if (i > nums.length - 1){
            result.push(nums[i - nums.length])
        } else {
            result.push(nums[i]);
        }
    }

    return result;
};