// Q:448 - https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    let start = 0;

    for (let i = 0; i < nums.length; i++){
        const curr = nums[i];

        const temp = nums[curr - 1];
        nums[curr - 1] = curr;
        nums[i] = temp;
    }

    console.log('numssss::: ', nums)

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== start + 1){
            result.push(i + 1);
        }

        start += 1;
    }

    return result;

};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))