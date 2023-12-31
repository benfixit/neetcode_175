/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
    const result1 = [];
    const result2 = [];
    const result = [];
    const prefixMap = new Map();
    const suffixMap = new Map();

    for (let i = 0; i < arr.length; i++){
        const curr = arr[i];

        if (prefixMap.has(curr)){
            const [lastIndex, lastDiff] = prefixMap.get(curr);

            if (lastDiff > 0){
                const val = Math.abs(((lastDiff) + (i - lastIndex)) + (i - lastIndex));

                // console.log("has: ", i, arr[i], [i, val], prefixMap.get(curr))
    
                result1.push(val);
                prefixMap.set(curr, [i, val]);
            } else {
                result1.push(i - lastIndex);
                prefixMap.set(curr, [i, i - lastIndex]);
            }

        } else {
            result1.push(0);
            prefixMap.set(curr, [i, 0]);
        }
    }

    arr.reverse();

    // console.log("arr: ", arr)

    for (let i = 0; i < arr.length; i++){
        const curr = arr[i];

        if (suffixMap.has(curr)){
            const [lastIndex, lastDiff] = suffixMap.get(curr);

            if (lastDiff > 0){
                const val = Math.abs(((lastDiff) + (i - lastIndex)) + (i - lastIndex));

                // console.log("has: ", i, arr[i], [i, val], suffixMap.get(curr))
    
                result2.push(val);
                suffixMap.set(curr, [i, val]);
            } else {
                result2.push(i - lastIndex);
                suffixMap.set(curr, [i, i - lastIndex]);
            }

        } else {
            result2.push(0);
            suffixMap.set(curr, [i, 0]);
        }
    }

    // console.log("result: ", result1, result2);

    result2.reverse();

    for (let i = 0; i < result1.length; i++){
        result[i] = result1[i] + result2[i]
    }

    // console.log("final result: ", result3);

    return result;
};

console.log(getDistances([2,1,3,1,2,3,3]));
console.log(getDistances([10,5,10,10]))