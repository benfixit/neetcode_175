/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;

    if (target < nums[start]){
        return start;
    }

    if (target > nums[end]){
        return end + 1;
    }

    while (start <= end){
        const mid = start + Math.floor((end - start) / 2);

        if (nums[mid] > target){
            end = mid - 1;
        } else if (nums[mid] < target){
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return start;
};