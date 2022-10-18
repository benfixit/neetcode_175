// Q: 389 - https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    const sMap = new Map(), tMap = new Map();
    let diff = "";
    
    for(let ch of s){
        sMap.set(ch, (sMap.get(ch) || 0) + 1)
    }
    
    for(let ch of t){
        tMap.set(ch, (tMap.get(ch) || 0) + 1)
    }
    
    for(let [key, value] of tMap.entries()){
        if (!sMap.has(key) || value !== sMap.get(key)){
            diff = key;
            break;
        }
    }
    
    return diff;
};