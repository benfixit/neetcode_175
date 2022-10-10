// Q: 205 - https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const map = new Map();
    const usedSet = new Set();
    
    for(let i = 0; i < t.length; i++){
        const tCh = t[i];
        const sCh = s[i];
        
        if (!map.has(sCh) && !usedSet.has(tCh)){
            map.set(sCh, tCh)
            usedSet.add(tCh)
        } else {
            if(map.get(sCh) !== tCh){
                return false;
            }
        }
    }
    
    return true;
};

console.log(isIsomorphic("add", "egg"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))
console.log(isIsomorphic("badc", "baba"))