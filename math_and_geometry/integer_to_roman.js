//Q:12 - https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let romanValue = "";
    
    const map = new Map([
        [1, "I"],
        [4, "IV"],
        [5, "V"],
        [9, "IX"],
        [10, "X"],
        [40, "XL"],
        [50, "L"],
        [90, "XC"],
        [100, "C"],
        [400, "CD"],
        [500, "D"],
        [900, "CM"],
        [1000, "M"]
    ]);
    
    for (let [numKey, romanEquivalent] of Array.from(map.entries()).reverse()) {
        const dividend = Math.floor(num / numKey);
        
        if (dividend > 0){
            const strs = Array.from({ length: dividend }, (_, k) => romanEquivalent).join("");
            romanValue += strs
        }
        
        num = num % numKey;
    }
    
    return romanValue;
};