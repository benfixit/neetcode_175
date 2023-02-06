//Q:658 - https://leetcode.com/problems/find-k-closest-elements/
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let start = 0, end = 0;

    while (end < arr.length){
        const gap = end - start;
        
        if (gap >= k){
            const diffStart = Math.abs(arr[start] - x);
            const diffEnd = Math.abs(arr[end] - x);

            if (diffStart <= diffEnd && arr[start] < arr[end]){
                break;
            } else {
                start += 1;
            }

        }
        end += 1;
    }

    return arr.slice(start, end);
};

// console.log(findClosestElements([1,2,3,4,5], 4, 5)) //2,3,4,5

// console.log(findClosestElements([1,2,3,4,5], 4, 3)) //1,2,3,4

console.log(findClosestElements([-4, -3, -1,2,3,4,5], 2, -5)) //1,2,3,4