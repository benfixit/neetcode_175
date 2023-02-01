//Q:1190 - https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let str = s;
    const stack = [];
    let result = "";

    const reverseStr = (str) => {
        return str.split("").reverse().join("");
    }

    for (let i = 0; i < s.length; i++){
        const ch = s[i];

        if (ch === "("){
            stack.push(i);
        } else if (ch === ")") {
            const temp = stack.pop();

            // start from the opening bracket ( index + 1
            const startIndex = temp + 1;
            const endIndex = i;

            const reversed = reverseStr(str.slice(startIndex, endIndex));
            str = str.slice(0, startIndex) + reversed + str.slice(endIndex);
        }
    }

    for (let ch of str){
        if (ch === "(" || ch === ")"){
            continue;
        }

        result += ch;
    }

    return result;
};