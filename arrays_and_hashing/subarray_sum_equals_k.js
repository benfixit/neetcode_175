/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0, start = 0, count = 0;

    for (let i = 0; i < nums.length; i++){
        sum += nums[i];

        while (sum >= k){
            if (sum === k){
                count += 1;
            }

            sum -= nums[start];
            start += 1;
        }
    }

    let sum2 = 0, start2 = nums.length - 1, count2 = 0;

    for (let i = nums.length - 1; i >= 0; i--){
        sum2 += nums[i];

        while (sum2 >= k){
            if (sum2 === k){
                count2 += 1;
            }

            sum2 -= nums[start2];
            start2 -= 1;
        }
    }

    return Math.max(count, count2);
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([2, 0, 0], 2))
console.log(subarraySum([1], 0))