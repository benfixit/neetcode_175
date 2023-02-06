//Q:258 - https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10){

        let sumOfDigits = 0;

        while (num !== 0){
            digit = num % 10;
            num = Math.floor(num / 10);

            sumOfDigits += digit;
        }

        num = sumOfDigits;
    }

    return num;
};