// Q:26 - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let firstNonDuplicateIndex = 1;
    
    for (let i = 1; i < nums.length; i++){
        if (nums[i] === nums[i - 1]){
            continue;
        }
                
        nums[firstNonDuplicateIndex] = nums[i];
        firstNonDuplicateIndex += 1;
    }
        
    return firstNonDuplicateIndex;
};