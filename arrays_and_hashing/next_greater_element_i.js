// Q: 496 - https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * O(nums1.length * nums2.length)
 */
 var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    
    for(let i = 0; i < nums1.length; i++){
        
        const currentNum = nums1[i];

        for (let j = 0; j < nums2.length; j++){

            if (nums2[j] === currentNum){
                let k = j + 1;
                while (k < nums2.length){
                    if(nums2[k] > currentNum){
                        result.push(nums2[k]);
                        break;
                    }
                    
                    k += 1;
                }
                
                if (k === nums2.length){
                    result.push(-1)
                }
                
                break;
            }
        }
    }
    
    return result;
    
};