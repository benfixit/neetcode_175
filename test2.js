const simpleSort = (nums) => {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[i]){
                const temp = nums[i];
                nums[i] = nums[j];

                nums[j] = temp;
            }
        }
    }

    return nums;
}

const selectionSort = (nums) => {
    for (let i = 0; i < nums.length; i++){
        let iMin = i;
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[iMin]){
                iMin = j;
            }
        }

        const temp = nums[i];
        nums[i] = nums[iMin];
        nums[iMin] = temp;
    }

    return nums;
}

console.log(simpleSort([2, 3, 1, 5]))
console.log(selectionSort([2, 3, 1, 5]))

const map = new Map([[0, 2], [1, 3], [2, 4]]);

for (let val of map.entries()){
    console.log(val)
}

// console.log(map.values())