//Q:2165 - https://leetcode.com/problems/smallest-value-of-the-rearranged-number
/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    let sortedNumStr = num.toString().split("").sort().join("");

    if (num > 0){

        if (sortedNumStr[0] === "0"){
            for (let i = 1; i < sortedNumStr.length; i++){
                if (sortedNumStr[i] !== "0"){
                    sortedNumStr = sortedNumStr.slice(i, i + 1) + sortedNumStr.slice(0, i) + sortedNumStr.slice(i + 1);
                    break;
                }
            }
        }
    } else {
        sortedNumStr = Math.abs(num).toString().split("").sort().reverse().join("");
    }
    
    return num >= 0 ? +sortedNumStr : -(+sortedNumStr);
};