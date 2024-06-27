function reverse(stack) {
    if (stack.length === 0) {
        return stack;
    }

    const last = process(stack);
    reverse(stack);
    stack.push(last);
}

function process(stack) {
    const result = stack.pop();
    if (stack.length === 0) {
        return result;
    }

    const last = process(stack);
    stack.push(result);
    return last;
}

// Test
const stack = [1, 2, 3, 4, 5];
reverse(stack);
console.log(stack); // [5, 4, 3, 2, 1]
