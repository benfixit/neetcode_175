//Q:2180 - https://leetcode.com/problems/count-integers-with-even-digit-sum
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let result = 0;

    const calculateDigitSum = (num) => {
        let sum = 0;

        while (num !== 0){
            const digit = num % 10;
            num = Math.floor(num / 10);

            sum += digit;
        }

        return sum % 2 === 0;
    }

    while (num >= 2){
        const value = calculateDigitSum(num);

        if (value){
            result += 1;
        }

        num -= 1;
    }

    return result;
};