/**
 * * Bubble sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * Train of thought: Compare adjacent elements and swap them if they are in the wrong order
 */

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
