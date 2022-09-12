/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const dfs = (target, memo = {}) => {
        if (target in memo){
            return memo[target];
        }

        if (target === ""){
            memo[target] = "";
            return true;
        }

        for (let word of wordDict) {
            if (target.startsWith(word)){
                const newStr = target.slice(word.length);
                
                if (dfs(newStr, memo)){
                    return true;
                }
            }
        }
        
        memo[target] = false;
        return false;
    }

    return dfs(s, {})
};

const s = "leetcode"
const wordDict = ["leet","code"]

const s2 = "leetcode"
const wordDict2 = ["neet","code"]

const s3 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
const wordDict3 = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

console.log(wordBreak(s, wordDict))
console.log(wordBreak(s2, wordDict2))
console.log(wordBreak(s3, wordDict3))