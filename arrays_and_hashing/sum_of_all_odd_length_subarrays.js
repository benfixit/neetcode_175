//Q:1588 - https://leetcode.com/problems/sum-of-all-odd-length-subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++){
        const left = i - 0 + 1;
        const right = arr.length - i;
        const mul = right * left;

        const numOfSubsForCurr = mul % 2 === 1 ? Math.floor(mul / 2) + 1 :  Math.floor(mul / 2);

        result += (numOfSubsForCurr * arr[i]);
    }

    return result;
};