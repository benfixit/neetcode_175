// Q:18 - https://leetcode.com/problems/4sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    const result = [];
    
    for (let i = 0; i < nums.length; i++){
        if (i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        
        const initialJ = i + 1;
        
        for (let j = initialJ; j < nums.length - 2; j++){
            if (j > initialJ && nums[j] === nums[j - 1]){
                continue;
            }
            
            let left = j + 1, right = nums.length - 1;
                                    
            while (left < right) {
                const currentSum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (currentSum > target) {
                    right -= 1;
                } else if(currentSum < target) {
                    left += 1
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    left += 1;
                    right -= 1;
                    
                    while (left < right && nums[left] === nums[left - 1]){
                        left += 1;
                    }
                    
                    while (left < right && nums[right] === nums[right + 1]){
                        right -= 1;
                    }
                }
            }
        }
    }
    
    return result;
    
};