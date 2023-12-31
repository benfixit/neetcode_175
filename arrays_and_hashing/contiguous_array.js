const findMaxLength = (nums) => {
    const map = new Map();

    map.set(0, -1);

    let maxlen = 0, count = 0;

    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] == 1 ? 1 : -1);
        console.log("count outside::: ", count)
        if (map.has(count)) {
            console.log("count::: ", count, map)
            maxlen = Math.max(maxlen, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    return maxlen;
}

console.log(findMaxLength([0,1]));
// console.log(findMaxLength([0,1,0]))
// console.log(findMaxLength([0,0,1,0,0,0,1,1]))