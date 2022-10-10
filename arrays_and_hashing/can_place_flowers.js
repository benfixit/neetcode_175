// Q: 605 - https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++){
        const previous = i > 0 ? flowerbed[i - 1] : 0
        const current = flowerbed[i];
        const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1]
        
        if(previous === 0 && current === 0 && next === 0){
            n -= 1;
            flowerbed[i] = 1;
            
            if (n === 0){
                return true;
            }
        }
    }
    
    return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1))