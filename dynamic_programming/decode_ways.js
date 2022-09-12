/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    const mapOfChars = new Map();
    for (let i = 1; i < 27; i++){
        mapOfChars.set(`${i}`, true)
    }

    const dfs = (str) => {
        if (str.startsWith("0")){
            return 0;
        }

        if (str.length === 2){
            if (mapOfChars.has(str)){
                return 1 + dfs(str.slice(1))
            } else {
                return dfs(str.slice(1))
            }
        }

        if (str.length === 1 && mapOfChars.has(str)){
            return 1
        }

        return dfs(str.slice(1)) + dfs(str.slice(2))
    }

    return dfs(s)
};

//11106 1, 1, 1, 06, 1, 11, 06 | 1, 1, 10, 6, 11, 10, 6

//021

//1, 

console.log(numDecodings("123123"))
// 1 2 3 1 2 3
// 1 2 3 1 23
// 1 2 3 12 3
// 1 23 12 3
// 1 23 1 23
// 1 23 1 2 3

// 12 3 1 2 3
// 12 3 12 3
// 12 3 1 23

// console.log(numDecodings("11106"))
// console.log(numDecodings("226"))
// console.log(numDecodings("06"))
// console.log("===================")
// console.log(numDecodings("26"))
// console.log(numDecodings("27"))
