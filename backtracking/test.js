var subsets = function(nums) {
    const result = [];
    for (let k = 0; k <= nums.length; k++) {
        backtrack(0, k, nums, [], result);
    }
    return result;
};

function backtrack(first, k, nums, array, result) {
    // check your base case
    if (array.length === k) {
        result.push([...array])
        return
    }
    
    // choose your options and recurse and backtrack for each option
    for (let i = first; i < nums.length; i++) {
        array.push(nums[i]);
        backtrack(i + 1, k, nums, array, result);
        array.pop();
    }
}

console.log(subsets([1, 2, 3]))