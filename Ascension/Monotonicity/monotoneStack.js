function monotoneStack(arr) {
    const stack = [];
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            const index = stack.pop();
            res[index] = arr[i];
        }
        stack.push(i);
    }

    while (stack.length) {
        const index = stack.pop();
        res[index] = -1;
    }
    return res;
}

// Test
const arr = [2, 1, 2, 4, 3];
console.log(monotoneStack(arr)); // [4, 2, 4, -1, -1]
