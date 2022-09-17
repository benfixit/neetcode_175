// Q:17 https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    const result = [];

    if (!digits){
        return result
    }

    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    const dfs = (index, currentStr = "") => {
        if (index === digits.length){
            result.push(currentStr)
            return;
        }

        const ch = map[digits[index]];

        for (let i = 0; i < ch.length; i++){
            dfs(index + 1, currentStr + ch[i]);
        }
    }


    dfs(0, "");

    return result;
};