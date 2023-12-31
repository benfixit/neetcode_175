/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let countOfB = 0;
    let start = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let end = 0; end < blocks.length; end++){
        const curr = blocks[end];

        if (curr === "B"){
            countOfB += 1
        }

        if (end - start + 1 >= k){
            min = Math.min(min, k - countOfB);

            if (blocks[start] === "B"){
                countOfB -= 1;
            }

            start += 1;
        }
    }

    return min;
};

const blocks = "WBWW"

console.log(minimumRecolors(blocks, 2));
console.log(minimumRecolors("WBBWWBBWBW", 7));
console.log(minimumRecolors("WBWBBBW", 2));