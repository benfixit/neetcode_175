/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let maximum = 0;

    const oddDiff = [];
    const evenDiff = [];

    for(let i = 1; i < arr.length - 1; i++){
        if (arr[i] > arr[i + 1]){
            oddDiff.push(1)
        } else if(arr[i] < arr[i + 1]) {
            oddDiff.push(-1)
        }
    }

    for(let i = 0; i < arr.length - 1; i++){
        if (arr[i] < arr[i + 1]){
            evenDiff.push(1)
        } else if(arr[i] > arr[i + 1]) {
            evenDiff.push(-1)
        }
    }

    console.log(oddDiff, evenDiff)

    let count = 0;
    for (let i = 0; i < oddDiff.length - 1; i++){
        if (oddDiff[i] !== oddDiff[i + 1]){
            count += 1;

            maximum = Math.max(maximum, count);
        } else {
            count = 0;
        }
    }

    count = 0;
    for (let i = 0; i < evenDiff.length - 1; i++){
        if (evenDiff[i] !== evenDiff[i + 1]){
            count += 1;

            maximum = Math.max(maximum, count);
        } else {
            count = 0;
        }
    }


    return maximum;
};

// console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9])) //5
console.log(maxTurbulenceSize([4,8,12,16])) //2
// console.log(maxTurbulenceSize([100]))//1
// console.log(maxTurbulenceSize([]))//0