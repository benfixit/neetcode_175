//Q:1512 - https://leetcode.com/problems/number-of-good-pairs
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs2 = function(nums) {
    const pairsMap = new Map();
    let result = 0;

    for (let num of nums){
        console.log(num)
        if (pairsMap.has(num)){
            result += pairsMap.get(num);
        }

        pairsMap.set(num, (pairsMap.get(num) || 0) + 1);
    }

    return result;
};
function numIdenticalPairs(nums) {
    let i=0
    let j=i+1
    let count=0
    nums.sort()
    while(i<j){
        console.log(i, j)
        if(nums[i]===nums[j]){
            count++;
            j++
        }
        else{
            i++
            j=i+1
            if(nums[j]===undefined)
                {
                    return count
                }
        }
    }
    return count
};
function numIdenticalPairs(nums) {
    let count=0
    nums.sort();
  
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      console.log(i, j)

      if(nums[i]===nums[j]){
        count++;
      } else {
        break;
      }
    }
  }
  
  return count;
};
// // console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs2([1,1,1,1]))
// // console.log(numIdenticalPairs([1,2,3]))