// Q: 77 https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const candidates = Array.from({ length: n }, (_, k) => k + 1);
    
    const result = [];
    
    const dfs = (index, currentList) => {
        if (currentList.length === k){
            result.push([...currentList]);
            return;
        }
        
        for (let i = index; i < candidates.length; i++){
            currentList.push(candidates[i]);
            
            dfs(i + 1, currentList)
            
            currentList.pop();
        }
    }
    
    dfs(0, [])
    
    return result;
};

console.log(combine(1, 1))