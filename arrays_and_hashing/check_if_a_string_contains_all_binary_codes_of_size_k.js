//Q:1461 - https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const max = Math.pow(2, k);
    const uniqueSubStrs = new Set();

    let i = 0;
    while (i + k <= s.length) {
        const curr = s.slice(i, i + k);
        uniqueSubStrs.add(curr);

        i += 1;
    }

    return uniqueSubStrs.size === max;
};

var hasAllCodes2 = function(s, k) {
    const max = Math.pow(2, k) - 1;
    const numsSet = new Set();

    for (let i = 0; i <= max; i++){
        let binary = i.toString(2);
        numsSet.add(binary.padStart(k, '0'));
    }

    let i = 0;
    while (i + k <= s.length) {
        const curr = s.slice(i, i + k);
        if (numsSet.has(curr)){
            numsSet.delete(curr);
        }

        i += 1;
    }

    return numsSet.size === 0;
};

console.log(hasAllCodes('00110', 2));