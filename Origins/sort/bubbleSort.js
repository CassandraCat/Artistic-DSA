function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// test
let arr = [5, 3, 4, 1, 2];
bubbleSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]
