// Q:1299 https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let greatestNum = arr[arr.length - 1];
    
    arr[arr.length - 1] = -1;
    
    for (let i = arr.length - 2; i >= 0; i--){
        const temp = arr[i]
        arr[i] = greatestNum;
        
        if(temp > greatestNum) {
            greatestNum = temp;
        }
    }
    
    return arr;
};