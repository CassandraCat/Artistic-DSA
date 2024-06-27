function smallSum(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    return process(arr, 0, arr.length - 1);
}

function process(arr, left, right) {
    if (left === right) {
        return 0;
    }
    let mid = Math.floor(((right - left) >> 1) + left);
    let leftSum = process(arr, left, mid);
    let rightSum = process(arr, mid + 1, right);
    let mergeSum = merge(arr, left, mid, right);
    return leftSum + rightSum + mergeSum;
}

function merge(arr, left, mid, right) {
    const help = [];
    let i = 0,
        p1 = left,
        p2 = mid + 1;

    let sum = 0;

    while (p1 <= mid && p2 <= right) {
        sum += arr[p1] < arr[p2] ? arr[p1] * (right - p2 + 1) : 0;
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }

    while (p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while (p2 <= right) {
        help[i++] = arr[p2++];
    }

    for (let i = 0; i < help.length; i++) {
        arr[left + i] = help[i];
    }

    return sum;
}

// Test
const arr = [1, 3, 4, 2, 5];
console.log(smallSum(arr)); // 16
