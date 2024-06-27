function getMax(arr) {
    if (!arr || arr.length === 0) {
        return -1;
    }
    return process(arr, 0, arr.length - 1);
}

function process(arr, left, right) {
    if (left === right) {
        return arr[left];
    }
    let mid = Math.floor(((right - left) >> 1) + left);
    let leftMax = process(arr, left, mid);
    let rightMax = process(arr, mid + 1, right);
    return Math.max(leftMax, rightMax);
}

// Test
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(getMax(arr)); // 15
