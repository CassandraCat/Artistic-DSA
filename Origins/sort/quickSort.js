/**
 * * Quick Sort
 * Time complexity: O(N*logN)
 * Space complexity: O(logN)
 * Train of thought: Choose a pivot, partition the array into two halves, and sort the two halves
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[(Math.random() * arr.length) | 0];
    const left = [];
    const mid = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] === pivot) {
            mid.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), ...mid, ...quickSort(right)];
}

// Example usage:
const array = [5, 2, 9, 1, 1, 7, 6, 3, 2, 5, 6, 3];
const sortedArray = quickSort(array);
console.log(sortedArray);
