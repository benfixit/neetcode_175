const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)
                isAlreadySorted = false;
            }
        }
        if (isAlreadySorted){
            break;
        }
    }

    return arr;
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let iMin = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[iMin]) {
                iMin = j;
            }
        }

        swap(arr, i, iMin)
    }

    return arr;
}

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const current = arr[i];
        let j = i - 1;

        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

const mergeSort = (arr) => {
    const result = [];

    if (arr.length === 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid))

    while(left.length && right.length){
        if (left[0] < right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right]
}

const nums = [3, 1, 6, 29, 0, 11];
const nums2 = [1, 2, 3, 4, 5];

console.log(mergeSort(nums));