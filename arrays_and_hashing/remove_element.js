// Q:27 - https://leetcode.com/problems/remove-element/

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let firstDiffNum = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            continue;
        }
        
        nums[firstDiffNum] = nums[i];
        firstDiffNum += 1;
        
    }
    
    return firstDiffNum;
};