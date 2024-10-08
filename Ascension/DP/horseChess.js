function horseChessBoardWithRecursion(x, y, k) {
    if (k === 0) {
        return x === 0 && y === 0 ? 1 : 0;
    }

    if (x < 0 || x > 9 || y < 0 || y > 8) {
        return 0;
    }

    return (
        horseChessBoardWithRecursion(x - 2, y - 1, k - 1) +
        horseChessBoardWithRecursion(x - 2, y + 1, k - 1) +
        horseChessBoardWithRecursion(x - 1, y - 2, k - 1) +
        horseChessBoardWithRecursion(x - 1, y + 2, k - 1) +
        horseChessBoardWithRecursion(x + 1, y - 2, k - 1) +
        horseChessBoardWithRecursion(x + 1, y + 2, k - 1) +
        horseChessBoardWithRecursion(x + 2, y - 1, k - 1) +
        horseChessBoardWithRecursion(x + 2, y + 1, k - 1)
    );
}

function horseChessBoardWithDP(x, y, k) {
    let dp = new Array(10)
        .fill(0)
        .map(() => new Array(9).fill(0).map(() => new Array(k + 1).fill(0)));
    dp[0][0][0] = 1;

    for (let level = 1; level <= k; level++) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 9; j++) {
                dp[i][j][level] =
                    getValue(dp, i - 2, j - 1, level - 1) +
                    getValue(dp, i - 2, j + 1, level - 1) +
                    getValue(dp, i - 1, j - 2, level - 1) +
                    getValue(dp, i - 1, j + 2, level - 1) +
                    getValue(dp, i + 1, j - 2, level - 1) +
                    getValue(dp, i + 1, j + 2, level - 1) +
                    getValue(dp, i + 2, j - 1, level - 1) +
                    getValue(dp, i + 2, j + 1, level - 1);
            }
        }
    }

    return dp[x][y][k];
}

function getValue(dp, x, y, k) {
    if (x < 0 || x > 9 || y < 0 || y > 8) {
        return 0;
    }
    return dp[x][y][k];
}

// Test Cases
console.log(horseChessBoardWithRecursion(6, 6, 4)); // 1
console.log(horseChessBoardWithDP(6, 6, 4)); // 1
