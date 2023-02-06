//Q:69 - https://leetcode.com/problems/sqrtx
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    const square = (num) => {
        return num * num;
    }


    let left = 0, right = x;
    

    while(left + 1 < right){
        let mid = left + Math.floor((right - left) / 2);
        const powerOfNum = square(mid);

        if (powerOfNum > x){
            right = mid;
        } else if (powerOfNum < x){
            left = mid;
        } else {
            return mid;
        }
    }

    if (square(right) === x){
        return right;
    }

    return left;
};