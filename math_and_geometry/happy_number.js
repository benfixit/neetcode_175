//Q: 202 - https://leetcode.com/problems/happy-number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    let happy = true;

    while (n !== 1){
        if (seen.has(n)){
            happy = false;
            break;
        }

        seen.add(n);

        let sumOfSquares = 0;

        while (n !== 0){
            digit = n % 10;
            n = Math.floor(n / 10)
            
            sumOfSquares += Math.pow(digit, 2)
          }

        n = sumOfSquares;
    }

    return happy;
};