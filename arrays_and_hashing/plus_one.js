//Q:66 - https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;

    console.log(i)

    while (true){
        if (i >= 0){
            if (digits[i] === 9){
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + 1;
                break;
            }
        } else {
            digits.unshift(1);
            break;
        }

        i -= 1;
    }


    return digits;
};

console.log(plusOne([9]))
// console.log(plusOne([9, 8 , 9]))

// console.log(plusOne([9, 9]));
// console.log(plusOne([899, 9]));
// console.log(plusOne([9]));
// console.log(plusOne([8, 9, 9, 9, 9]));
// console.log(plusOne([999]));
// console.log(plusOne([1234]));