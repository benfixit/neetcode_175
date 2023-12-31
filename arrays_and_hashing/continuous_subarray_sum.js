/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        if (i > 0 && sum % k === 0){
            return true;
        }
    }

    let zerosCount = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            zerosCount += 1;
            if (zerosCount > 1){
                console.log("we got here")
                return true;
            }
        } else {
            zerosCount = 0;
        }
    }

    return false;
};


// console.log(checkSubarraySum([23,2,4,6,7], 6));
// console.log(checkSubarraySum([23,2,6,4,7], 6));
// console.log(checkSubarraySum([23,2,6,4,7], 13))
// console.log(checkSubarraySum([1, 0], 2));
// console.log(checkSubarraySum([5, 0, 0, 0], 3));
// console.log(checkSubarraySum([5, 0], 3));
console.log(checkSubarraySum([0,1,0,3,0,4,0,4,0], 5))