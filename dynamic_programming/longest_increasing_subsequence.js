/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//     const dp = Array(nums.length + 1).fill(0);

//     dp[0] = 0;
//     dp[1] = 1;

//     for (let i = 1; i < nums.length; i++){
//         dp[i + 1] = nums[i] > nums[i - 1] ? dp[i] + 1 : dp[i];
//     }

//     return dp[dp.length - 1];
// };

 var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(0);

    dp[dp.length - 1] = 1;
    let maxSoFar = 1

    for (let i = dp.length - 2; i >= 0; i--){
        const currentLongest = 1;
        if (nums[i] < nums[i + 1]){
            dp[i] = 1 + dp[i + 1]
        }

        dp[i] = Math.max(currentLongest, dp[i])
    }

    console.log("dp == ", dp)

    // return result;
};

console.log(lengthOfLIS([4,10,4,3,8,9])); // 3
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))

// var lengthOfLIS = function(nums) {
//     const dfs = (nums, index, n, previous) => {

//         // Base case: if nothing is remaining
//         if (index == n){
//             return 0;
//         }

//         // case 1: exclude the current element and process the
//         // remaining elements
//         let exclude = dfs(nums, index + 1, n, previous);

//         // case 2: include the current element if it is greater
//         // than previous element in LIS
//         let include = 0;
//         if (nums[index] > previous)
//             include = 1 + dfs(nums, index + 1, n, nums[index]);

//         // return maximum of above two choices
//         return Math.max(include, exclude);

//     }

//     return dfs(nums, 0, nums.length, Number.MIN_SAFE_INTEGER);
// };

// var lengthOfLIS = function(nums) {
//     const result = [];

//     const dfs = (numsList, currentNums) => {
//         if (currentNums.length === 0 || currentNums[currentNums.length - 1] < currentNums[currentNums.length - 2]) {
//             result.push([...numsList])
//             return;
//         }

//         for (let i = 0; i < currentNums.length; i++){
//             if (!numsList.length || currentNums[i] > numsList[numsList.length - 1]){
//                 numsList.push(currentNums[i]);
//                 dfs(numsList, currentNums)
//             }

//             numsList.pop();
//         }
//     }

//     dfs([], nums)

//     return result;
// };

// 1, 2, 4, 3

// console.log(lengthOfLIS([1, 2, 4, 3]))
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))

// console.log(lengthOfLIS([7,7,7,7,7,7,7]))




// // 1, 2, 4, 3

// // console.log(lengthOfLIS([1, 2, 4, 3]))

// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))