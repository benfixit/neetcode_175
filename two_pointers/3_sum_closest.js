// Q:16 - https://leetcode.com/problems/3sum-closest/

/**
 * TC: n^2
 * SC: 1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b) //nlogn
    
    let closestSum = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++){ //n
        const currentNum = nums[i];
        
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) { //n
            const currentSum = currentNum + nums[left] + nums[right];
            
            if (currentSum < target) {
                left += 1;
            } else if (currentSum > target){
                right -= 1;
            } else {
                return currentSum;
            }
            
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)){
                closestSum = currentSum
            }
        }
    }
    
    return closestSum;
};