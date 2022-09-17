/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    nums.sort();
    const result = [];
    
    const dfs = (choices, currentList) => {
        if (currentList.length === nums.length){
            result.push([...currentList])
            return;
        }
        
        let previous = undefined;
        
        for (let i = 0; i < choices.length; i++){
            const candidate = choices[i];

            if (candidate === previous){
                continue;
            }
            
            const newChoices = choices.filter((_, index) => index !== i);
            
            currentList.push(candidate);
            
            dfs(newChoices, currentList)
            
            currentList.pop();
            
            previous = candidate;
        }
    }
    
    dfs(nums, [])
    
    return result;
};

console.log(permuteUnique([1, 1, 2]))