//Q:1945 - https://leetcode.com/problems/sum-of-digits-of-string-after-convert
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let sToIntStr = "";
    const base = "a".charCodeAt(0) - 1;

    for (let ch of s){
        sToIntStr += ch.charCodeAt(0) - base;
    }

    let sumOfDigits = 0;

    // Using string addition to avoid integer overflow with javascript
    for (let i = 0; i < k; i++) {
        sumOfDigits = 0;

        for (let ch of sToIntStr){
            sumOfDigits += Number(ch);
        }

        sToIntStr = sumOfDigits.toString();
    }

    return sToIntStr;
};