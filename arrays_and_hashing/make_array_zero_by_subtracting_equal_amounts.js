/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let numOfOperations = 0;
    let minimum = 0;

    minimum = sortedNums.find((num) => num !== 0);

    if (!minimum){
        return 0;
    }


    while(true){
        const allZeros = sortedNums.every((num) => num === 0);
        if (allZeros) {
            break;
        }

        minimum = sortedNums.find((num) => num !== 0);

        sortedNums = sortedNums.map((num) => {
            const diff = num - minimum;

            return diff > 0 ? diff : 0;
        });

        numOfOperations += 1;
    }

    return numOfOperations
};

console.log(minimumOperations([1,5,0,3,5]));