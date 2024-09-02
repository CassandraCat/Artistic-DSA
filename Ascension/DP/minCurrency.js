function minCurrencyWithRecursion(coins, amount, rest) {
    if (rest === 0) {
        return 0;
    }

    if (rest < 0) {
        return -1;
    }

    if (amount === coins.length) {
        return -1;
    }

    let selected = minCurrencyWithRecursion(
        coins,
        amount + 1,
        rest - coins[amount]
    );
    let unselect = minCurrencyWithRecursion(coins, amount + 1, rest);

    if (selected === -1 && unselect === -1) {
        return -1;
    } else {
        if (selected === -1) {
            return unselect;
        }

        if (unselect === -1) {
            return selected + 1;
        }

        return Math.min(selected + 1, unselect);
    }
}

function minCurrencyWithTriangle(coins, amount, rest, dp) {
    if (rest < 0) {
        return -1;
    }

    if (dp[amount][rest] !== -2) {
        return dp[amount][rest];
    }

    if (rest === 0) {
        dp[amount][rest] = 0;
        return dp[amount][rest];
    }

    if (amount === coins.length) {
        dp[amount][rest] = -1;
        return dp[amount][rest];
    }

    let selected = minCurrencyWithRecursion(
        coins,
        amount + 1,
        rest - coins[amount]
    );
    let unselect = minCurrencyWithRecursion(coins, amount + 1, rest);

    if (selected === -1 && unselect === -1) {
        dp[amount][rest] = -1;
    } else {
        if (selected === -1) {
            dp[amount][rest] = unselect;
        }

        if (unselect === -1) {
            dp[amount][rest] = selected + 1;
        }

        dp[amount][rest] = Math.min(selected + 1, unselect);
    }

    return dp[amount][rest];
}

function minCurrencyWithDP(coins, rest) {
    let dp = new Array(coins.length + 1)
        .fill(0)
        .map(() => new Array(rest + 1).fill(0));

    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 0;
    }

    for (let i = 1; i <= rest; i++) {
        dp[coins.length][i] = -1;
    }

    for (let i = coins.length - 1; i >= 0; i--) {
        for (let j = 1; j <= rest; j++) {
            let unselect = dp[i + 1][j];
            let selected = -1;
            if (j - coins[i] >= 0) {
                selected = dp[i + 1][j - coins[i]];
            }
            if (unselect === -1 && selected === -1) {
                dp[i][j] = -1;
            } else {
                if (unselect === -1) {
                    dp[i][j] = selected + 1;
                } else if (selected === -1) {
                    dp[i][j] = unselect;
                } else {
                    dp[i][j] = Math.min(selected + 1, unselect);
                }
            }
        }
    }

    return dp[0][rest];
}

// Test case
console.log(minCurrencyWithRecursion([2, 7, 3, 5, 3], 0, 10)); // 2
console.log(
    minCurrencyWithTriangle(
        [2, 7, 3, 5, 3],
        0,
        10,
        new Array(5).fill(0).map(() => new Array(11).fill(-2))
    )
); // 2
console.log(minCurrencyWithDP([2, 7, 3, 5, 3], 10)); // 2
