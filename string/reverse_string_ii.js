// Q: 541 - https://leetcode.com/problems/reverse-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let times = 0, kStart = 0;
    const strArr = s.split("");
    
    while (kStart < strArr.length){
        const newStart = 2 * k * times
        
        if (kStart === newStart){
            let left = kStart;
            let right = kStart + k - 1;
            
            while (left < right) {
                const temp = strArr[left];
                strArr[left] = strArr[right];
                strArr[right] = temp
                
                left += 1;
                right -= 1;
            }
            
            times += 1
        }
        
        kStart += k;
    }
    
    return strArr.join("");
};