// Q:448 - https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++){
        const index = Math.abs(nums[i]) - 1;

        nums[index] = -1 * Math.abs(nums[index]);
    }

    nums.forEach((num, index) => {
        if (num > 0){
            result.push(index + 1);
        }
    })

    return result;
};

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([2, 1, 4, 4]));



// [-2, -1, 4, -4]

// [-1, ]