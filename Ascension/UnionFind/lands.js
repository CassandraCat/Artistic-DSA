function countIsLands(arr) {
    if (arr === null || arr.length === 0) return 0;

    let rows = arr.length;
    let cols = arr[0].length;
    let res = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === "1") {
                res++;
                infect(arr, i, j, rows, cols);
            }
        }
    }

    return res;
}

function infect(arr, i, j, rows, cols) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || arr[i][j] !== "1") return;
    arr[i][j] = "2";
    infect(arr, i + 1, j, rows, cols);
    infect(arr, i - 1, j, rows, cols);
    infect(arr, i, j + 1, rows, cols);
    infect(arr, i, j - 1, rows, cols);
}

// Test
const arr = [
    ["1", "0", "1", "1", "1"],
    ["1", "0", "1", "0", "1"],
    ["1", "1", "1", "0", "1"],
];
console.log(countIsLands(arr)); // 1
