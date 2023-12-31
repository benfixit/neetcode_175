// const perfectSquare = (n) => {

// }

const numSquares = (n) => {
    const dp = Array(n + 1).fill(0);
    console.log("dp start: ", dp)

    dp[0] = 0;

    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            const square = j * j;
            console.log("square: ", square, n - square, i - square)

            if (i - square < 0){
                break;
            }

            console.log("dp: ", dp[i])

            dp[i] = Math.min(dp[i], 1 + dp[i - square]);
        }
    }

    console.log("dp: ", dp);
    return dp[dp.length - 1];
}

console.log(numSquares(12));