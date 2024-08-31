/**
 * Orderly array, looking for a specific value
 * If the target is not in the array, return -1
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// test
let arr = [1, 2, 3, 4, 5];
let target = 3;
let res = binarySearch(arr, target);
console.log(res); // 2

/**
 * Orderly array, to find the target in the left margin of the array
 * If the target is not in the array, return -1
 */

function binarySearchLeft(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (arr[mid] === target) {
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (left >= arr.length || arr[left] !== target) {
        return -1;
    }

    return left;
}

// test
let arr2 = [1, 2, 3, 3, 3, 4, 5];
let target2 = 3;
let res2 = binarySearchLeft(arr2, target2);
console.log(res2); // 2

/**
 * Unordered array, two adjacent numbers are not equal, find local minimum
 * Local minimum definition: a number is less than its neighbors
 */

function findLocalMinimum(arr) {
    if (arr == null || arr.length === 0) {
        return -1;
    }

    if (arr.length === 1 || arr[0] < arr[1]) {
        return 0;
    }

    if (arr[arr.length - 1] < arr[arr.length - 2]) {
        return arr.length - 1;
    }

    let left = 1;
    let right = arr.length - 2;
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (arr[mid] > arr[mid - 1]) {
            right = mid - 1;
        } else if (arr[mid] > arr[mid + 1]) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return left;
}

// test
let arr3 = [3, 2, 1, 4, 5];
let res3 = findLocalMinimum(arr3);
console.log(res3); // 2
