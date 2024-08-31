/**
 * * Merge Sort
 * Time complexity: O(N*logN)
 * Space complexity: O(N)
 * Train of thought: Divide the array into two halves, sort the two halves, and merge them
 */

function mergeSort(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    if (arr.length === 1) {
        return arr;
    }

    const mid = Math.floor(arr.length >> 1);
    const leftSort = mergeSort(arr.slice(0, mid));
    const rightSort = mergeSort(arr.slice(mid));
    return merge(leftSort, rightSort);
}

function merge(left, right) {
    const res = [];
    let i = 0,
        j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }

    return res.concat(left.slice(i)).concat(right.slice(j));
}

// Test
// Give me a random array
let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(arr);
console.log(mergeSort(arr));
