//Q: 50 - https://leetcode.com/problems/powx-n/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const helper = (x, n) => {
        if (x === 0){
            return 0;
        }

        if (n === 0){
            return 1;
        }

        const value = helper(x, Math.floor(n / 2));
        const result = value * value;

        return n % 2 === 1 ? x * result : result;
    }

    const result = helper(x, Math.abs(n));

    return n < 0 ? 1 / result : result;
};