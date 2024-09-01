function maxSumMinProduct(arr) {
    if (arr === null || arr.length === 0) return 0;

    const n = arr.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(n - 1);

    const stack = [];
    for (let i = 0; i < n; ++i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            right[stack.pop()] = i - 1;
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1] + 1;
        }
        stack.push(i);
    }

    const pre = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        pre[i] = pre[i - 1] + arr[i - 1];
    }

    let best = 0;
    for (let i = 0; i < n; ++i) {
        best = Math.max(best, (pre[right[i] + 1] - pre[left[i]]) * arr[i]);
    }

    return best % 1000000007;
}

// Test
const arr = [1, 2, 3, 2];
console.log(maxSumMinProduct(arr)); // 14
