function getMaxWindow(arr, w) {
    if (arr === null || arr.length === 0 || w < 1 || arr.length < w) return [];

    let res = [];
    let qmax = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        while (qmax.length > 0 && arr[qmax[qmax.length - 1]] <= arr[i]) {
            qmax.pop();
        }
        qmax.push(i);
        if (qmax[0] === i - w) {
            qmax.shift();
        }
        if (i >= w - 1) {
            res[index++] = arr[qmax[0]];
        }
    }

    return res;
}

// Test
const arr = [4, 3, 5, 4, 3, 3, 6, 7];
const w = 3;
console.log(getMaxWindow(arr, w)); // [5, 5, 5, 4, 6, 7]
