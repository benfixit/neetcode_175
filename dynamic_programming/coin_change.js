/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = {};
    const dfs = (balance) => {
        if (memo.hasOwnProperty(`${balance}`)){
            return memo[`${balance}`];
        }

        if (balance <= 0) {
            return balance;
        }

        let min = Number.MAX_SAFE_INTEGER;

        for (let coin of coins){
            const val = 1 + dfs(balance - coin);
            if (val > 0) {
                min = Math.min(val, min);
                memo[`${balance}`] = min;
            }
        }

        return min;
    }

    const result = dfs(amount, 0);

    return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};