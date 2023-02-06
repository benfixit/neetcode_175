//Q:567 - https://leetcode.com/problems/permutation-in-string
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const buildMap = (str) => {
        const strMap = new Map();

        for (let ch of str){
            strMap.set(ch, (strMap.get(ch) || 0) + 1);
        }

        return strMap;
    }

    const s1Map = buildMap(s1);

    let i = 0;

    while (i < s2.length){
        const str = s2.slice(i, i + s1.length);
        const tempMap = buildMap(str);

        let isFound = true;

        for (let [key, value] of s1Map.entries()){
            if (!tempMap.has(key) || value !== tempMap.get(key)){
                isFound = false;
                break;
            }
        }

        if (isFound){
            return true;
        }

        i += 1;
    }

    return false;
};