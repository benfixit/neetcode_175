// Q:46 https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const result = [];
    const dfs = (inputNums, permutations = []) => {
        if (inputNums.length === 0){
            result.push([...permutations]);
            return
        }
        
        for(let i = 0; i < inputNums.length; i++){
            const choices = inputNums.filter(num => num !== inputNums[i]);
            
            permutations.push(inputNums[i]);
            
            dfs(choices, permutations)
            
            permutations.pop()
        }

    }
    
    dfs(nums, []);
    
    return result;
};

console.log(permute([1, 2, 3]))