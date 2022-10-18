// Q: 1636 - https://leetcode.com/problems/sort-array-by-increasing-frequency/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * {todo} Just sort the map
 */
 var frequencySort = function(nums) {
    const map = new Map();
    let bucket = [], result = [];
    
    for(let num of nums){
        const count = map.get(num) || 0;
        map.set(num, count + 1);
    }
    
    for(let [key, value] of map.entries()){
         if (!bucket[value]){
             bucket[value] = [];
         }
        
        bucket[value].push(key);
    }
    
    let index = 0;
    
    for (let i = 0; i < bucket.length; i++){
        if (bucket[i]){
            if (bucket[i].length > 1){
                bucket[i].sort((a, b) => b - a)
            }
            
            for (let j = 0; j < bucket[i].length; j++){
                let k = 0;
                while (k < i){
                    result[index] = bucket[i][j];
                    index += 1;
                    k += 1;
                }
            }
        }
    }
        
    return result;
};