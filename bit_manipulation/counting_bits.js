// Q:338 - https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let result = [];
    
    for (let i = 0; i <= n; i++){
        let bits = 0, mask = 1;
        
        for (let j = 0; j < 32; j++){
            const hasBit = (i & mask) !== 0;
            
            if (hasBit){
                bits += 1;
            }
            
            mask <<= 1;
        }
        
        result.push(bits);
    }
    
    return result;
};