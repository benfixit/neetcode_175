// Q:88 - https://leetcode.com/problems/merge-sorted-array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1;
    let endIndex = m + n - 1;

    while (i >= 0 && j >= 0){
        if (nums1[i] > nums2[j]){
            nums1[endIndex] = nums1[i];
            i -= 1;
        } else {
            nums1[endIndex] = nums2[j];
            j -= 1;
        }
        
        endIndex -= 1;
    }

    if (j >  -1){
        while (j >= 0){
            nums1[endIndex] = nums2[j];
            j -= 1;
            endIndex -= 1;
        }
    }

    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))

console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))


// 1, 2, 2, 3