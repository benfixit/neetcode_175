const threeSum = (nums) => {
    const result = [];
    const absSet = new Set();
    const output = [];

    for (let i = 0; i < nums.length - 2; i++){
        for (let j = i + 1; j < nums.length - 1; j++){
            for (let k = j + 1; k < nums.length; k++){
                const sum = nums[i] + nums[j] + nums[k];
                 if (sum === 0){
                    const tempMap = {};
                    tempMap[nums[i]] = 1;
                    tempMap[nums[j]] = (tempMap[nums[j]] || 0) + 1;
                    tempMap[nums[k]] = (tempMap[nums[k]] || 0) + 1;

                    result.push(tempMap)
                 }
            }
        }
    }

    // console.log('result: ', result)

    for (let i = 0; i < result.length; i++){
        const str = Array.from(Object.keys(result[i])).join(',');

        if (!absSet.has(str)){
            const arr = [];

            for (let key in result[i]){
                arr.push(...Array.from({ length: result[i][key]}, () => key));
            }


            output.push(arr.map(item => Number(item)));

            absSet.add(str);
        }
    }

    return output;
}

// [-1,0,1,2,-1,-4]
// [0, 2, 0]

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,-1,1]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
console.log(threeSum([-2,0,1,1,2]))

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));