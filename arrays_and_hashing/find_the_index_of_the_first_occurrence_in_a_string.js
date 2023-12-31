/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length){
        return -1;
    }

    for (let i = 0; i < haystack.length; i++){
        const ch = haystack[i];
        if (ch === needle[0]){
            console.log("we got here", i, haystack.slice(i,  needle.length), needle)
            if (haystack.slice(i, i + needle.length) === needle){
                return i;
            }
        }
    }

    return -1;
};

// console.log(strStr("mississippi", "issipi"));

console.log(strStr("hello", "ll"));