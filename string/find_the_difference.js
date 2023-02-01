//Q:389 - https://leetcode.com/problems/find-the-difference
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

var findTheDifference2 = function(s, t) {
    const str = s + t;
    let diff = 0;

    for(let ch of str){
        diff ^= ch.charCodeAt(0);
    }
    
    return String.fromCharCode(diff);
};

var findTheDifference3 = function(s, t) {
    let sSum = 0, tSum = 0;

    for(let ch of s){
        sSum += ch.charCodeAt(0);
    }

    for(let ch of t){
        tSum += ch.charCodeAt(0);
    }

    const diff = Math.abs(sSum - tSum);
    
    return String.fromCharCode(diff);
};