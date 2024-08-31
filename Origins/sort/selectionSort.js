/**
 * * Selection Sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * Train of thought: Find the minimum value in the array and swap it with the first element
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}

// test
let arr = [5, 3, 4, 1, 2];
selectionSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]
