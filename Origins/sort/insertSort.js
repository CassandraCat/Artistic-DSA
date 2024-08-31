/**
 * * Insertion Sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * Train of thought: Insert an element from the unsorted part of the array into the sorted part of the array
 */

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// test
let arr = [5, 3, 4, 1, 2];
insertSort(arr);
console.log(arr); // [1, 2, 3, 4, 5]
