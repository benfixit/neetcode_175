// Q:40 - https://leetcode.com/problems/combination-sum-ii/


var permutations = function(nums) {
    const result = [];

    const dfs = (choices, currentList) => {
        if (currentList.length === nums.length){
            result.push([...currentList]);
            return;
        }

        for (let i = 0; i < choices.length; i++){
            const candidate = choices[i];
            const newChoices = choices.filter(item => item !== candidate);

            currentList.push(candidate);

            dfs(newChoices, currentList);

            currentList.pop();
        }
    }

    dfs(nums, []);

    return result;
};

// console.log(permutations([1, 2, 3]))
console.log(permutations([1, 1, 1, 2]))