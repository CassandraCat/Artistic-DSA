function robotWalkWithRecursion(N, E, rest, current) {
    if (rest === 0) {
        return current === E ? 1 : 0;
    }

    if (current === 1) {
        return robotWalkWithRecursion(N, E, rest - 1, 2);
    }

    if (current === N) {
        return robotWalkWithRecursion(N, E, rest - 1, N - 1);
    }

    return (
        robotWalkWithRecursion(N, E, rest - 1, current - 1) +
        robotWalkWithRecursion(N, E, rest - 1, current + 1)
    );
}

function robotWalkWithTriangle(N, E, rest, current, dp) {
    if (dp[rest][current] !== -1) {
        return dp[rest][current];
    }
    if (rest === 0) {
        dp[rest][current] = current === E ? 1 : 0;
        return dp[rest][current];
    }

    if (current === 1) {
        dp[rest][current] = robotWalkWithTriangle(N, E, rest - 1, 2, dp);
    } else if (current === N) {
        dp[rest][current] = robotWalkWithTriangle(N, E, rest - 1, N - 1, dp);
    } else {
        dp[rest][current] =
            robotWalkWithTriangle(N, E, rest - 1, current - 1, dp) +
            robotWalkWithTriangle(N, E, rest - 1, current + 1, dp);
    }

    return dp[rest][current];
}

function robotWalkWithDP(N, E, rest, current) {
    let dp = new Array(rest + 1)
        .fill(0)
        .map((_, i) => [i === 0 ? -1 : -1, ...new Array(N).fill(0)]);

    dp[0][E] = 1;

    for (let i = 1; i <= rest; i++) {
        for (let j = 1; j <= N; j++) {
            if (j === 1) {
                dp[i][1] = dp[i - 1][2];
            } else if (j === N) {
                dp[i][N] = dp[i - 1][N - 1];
            } else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
            }
        }
    }

    return dp[rest][current];
}

// Test1
console.log(robotWalkWithRecursion(5, 2, 3, 3)); // 3
console.log(
    robotWalkWithTriangle(
        5,
        2,
        3,
        3,
        new Array(4).fill(0).map(() => new Array(6).fill(-1))
    )
); // 3
console.log(robotWalkWithDP(5, 2, 3, 3)); // 3

// Test2
console.log(robotWalkWithRecursion(5, 2, 3, 1)); // 2
console.log(
    robotWalkWithTriangle(
        5,
        2,
        3,
        1,
        new Array(4).fill(0).map(() => new Array(6).fill(-1))
    )
); // 2
console.log(robotWalkWithDP(5, 2, 3, 1)); // 2
