// Q:191 - https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let bits = 0, mask = 1;
        
    for (let i = 0; i < 32; i++){
        const hasBit = (n & mask) !== 0;
        
        if (hasBit) {
            bits += 1;
        }
        
        mask <<= 1;
    }
    
    return bits;
};