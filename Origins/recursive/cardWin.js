function win(arr) {
    if (!arr || !arr.length) return 0;
    return Math.max(f(arr, 0, arr.length - 1), s(arr, 0, arr.length - 1));
}

function f(arr, i, j) {
    if (i === j) return arr[i];
    return Math.max(arr[i] + s(arr, i + 1, j), arr[j] + s(arr, i, j - 1));
}

function s(arr, i, j) {
    if (i === j) return 0;
    return Math.min(f(arr, i + 1, j), f(arr, i, j - 1));
}

// Test
console.log(win([1, 2, 100, 4])); // 101
