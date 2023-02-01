//Q:67 - https://leetcode.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let aLen = a.length - 1, bLen = b.length - 1;
    let result = "";

    while (aLen >= 0 || bLen >= 0){
        let aInt = 0;
        let bInt = 0;

        if (aLen >= 0){
            aInt = parseInt(a[aLen]);
        }

        if (bLen >= 0){
            bInt = parseInt(b[bLen]);
        }

        const sum = aInt + bInt + carry;

        const digit = sum % 2;
        carry = Math.floor(sum / 2);

        result = digit + result;

        aLen -= 1;
        bLen -= 1;
    }

    if (carry > 0){
        result = carry + result 
    }

    return result;
};

console.log(addBinary("11", "1"))