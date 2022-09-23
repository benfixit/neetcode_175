//Q:13 - https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    
    let result = 0;

    for (let i = 0; i < s.length; i++){
        const current = map.get(s[i]);
        const next = map.get(s[i + 1]);

        if ((i + 1 < s.length) && current < next) {
            result -= current
        } else {
            result += current;
        }
    }

    return result
};

 var romanToInt2 = function(s) {
    const map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    
    let result = 0;
    let i = 0;
    let previous = 0;
    
    while (i < s.length){
        let next = s[i + 1] ? map.get(s[i + 1]) : 0;
        let current = map.get(s[i]);
      
        if (current >= next) {
            result += (current - previous);
            previous = 0;
        } else {
            previous = current
        }
                    
        i++;
    }
    
    return result;
};

console.log(romanToInt("III"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("MCMXCVI"))