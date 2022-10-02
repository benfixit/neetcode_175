// Q: 2396 - https://leetcode.com/problems/strictly-palindromic-number/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isStrictlyPalindromic = function(n) {
    const isPalindrome = (n, base) => {
        let res = [];
        
        while (n > 0){
            const mod = n % base;
            
            res.push(mod);
            
            n = Math.floor(n / base)
        }
        
        return res.toString() === res.reverse().toString();
    }
    
    for (let i = 2; i <= n - 2; i++){
        if (!isPalindrome(n, i)){
            return false;
        }
    }
    
    return true;
};

 var isStrictlyPalindromic2 = function(n) {
    let i = 2;
    
    while (i <= n - 2){
        const baseStr = n.toString(i);
        
        if (baseStr !== baseStr.split("").reverse().join("")) {
            return false;
        }
        
        i++;
    }
    
    return true;
};