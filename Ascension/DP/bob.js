function bobAliveWithRecursion(N, M, i, j, k) {
    if (i < 0 || i === N || j < 0 || j === M) return 0;

    if (k === 0) return 1;

    return (
        bobAliveWithRecursion(N, M, i + 1, j, k - 1) +
        bobAliveWithRecursion(N, M, i - 1, j, k - 1) +
        bobAliveWithRecursion(N, M, i, j + 1, k - 1) +
        bobAliveWithRecursion(N, M, i, j - 1, k - 1)
    );
}

function bobAlive(N, M, i, j, k) {
    let alive = bobAliveWithRecursion(N, M, i, j, k);
    let all = Math.pow(4, k);
    let divisor = gcd(all, alive);
    return `${alive / divisor}/${all / divisor}`;
}

function gcd(m, n) {
    return n === 0 ? m : gcd(n, m % n);
}

function bobAliveWithDP(N, M, i, j, k) {
    let dp = new Array(N)
        .fill(0)
        .map(() => new Array(M).fill(0).map(() => new Array(k + 1).fill(0)));

    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            dp[x][y][0] = 1;
        }
    }
    for (let rest = 1; rest <= k; rest++) {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < M; col++) {
                dp[row][col][rest] = pick(dp, N, M, row - 1, col, rest - 1);
                dp[row][col][rest] += pick(dp, N, M, row + 1, col, rest - 1);
                dp[row][col][rest] += pick(dp, N, M, row, col - 1, rest - 1);
                dp[row][col][rest] += pick(dp, N, M, row, col + 1, rest - 1);
            }
        }
    }

    let all = Math.pow(4, k);
    let alive = dp[i][j][k];
    let divisor = gcd(all, alive);
    return `${alive / divisor}/${all / divisor}`;
}

function pick(dp, N, M, i, j, k) {
    if (i < 0 || i === N || j < 0 || j === M) return 0;
    return dp[i][j][k];
}

// Test Cases
console.log(bobAlive(2, 2, 1, 1, 2)); // 4/16
console.log(bobAliveWithDP(2, 2, 1, 1, 2)); // 4/16
