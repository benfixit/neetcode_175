// Q:22 - https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const dfs = (open, close, currentStr) => {
        if (open >= n && close >= n){
            result.push(currentStr)
            return;
        }

        if (open < n){
            dfs(open + 1, close, currentStr + "(")
        }

        if (close < open){
            dfs(open, close + 1, currentStr + ")")
        }

        
    }

    dfs(0, 0, "")

    return result;
};

console.log(generateParenthesis(3))