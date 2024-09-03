function bankNoteWithRecursion(notes, amount, aim) {
    if (amount === notes.length) {
        return aim === 0 ? 1 : 0;
    }

    let ways = 0;

    for (let sheet = 0; sheet * notes[amount] <= aim; sheet++) {
        ways += bankNoteWithRecursion(
            notes,
            amount + 1,
            aim - sheet * notes[amount]
        );
    }

    return ways;
}

function bankNoteWithTriangle(notes, amount, aim, dp) {
    if (dp[amount][aim] !== -1) {
        return dp[amount][aim];
    }

    if (amount === notes.length) {
        dp[amount][aim] = aim === 0 ? 1 : 0;
        return dp[amount][aim];
    }

    let ways = 0;

    for (let sheet = 0; sheet * notes[amount] <= aim; sheet++) {
        ways += bankNoteWithTriangle(
            notes,
            amount + 1,
            aim - sheet * notes[amount],
            dp
        );
    }

    dp[amount][aim] = ways;
    return dp[amount][aim];
}

function bankNoteWithDP(notes, aim) {
    let N = notes.length;
    let dp = new Array(N + 1).fill(0).map(() => new Array(aim + 1).fill(0));

    dp[N][0] = 1;

    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j <= aim; j++) {
            for (let sheet = 0; sheet * notes[i] <= j; sheet++) {
                dp[i][j] += dp[i + 1][j - sheet * notes[i]];
            }
        }
    }

    return dp[0][aim];
}

function bankNoteWithDP2(notes, aim) {
    let N = notes.length;
    let dp = new Array(N + 1).fill(0).map(() => new Array(aim + 1).fill(0));

    dp[N][0] = 1;

    for (let i = N - 1; i >= 0; i--) {
        for (let j = 0; j <= aim; j++) {
            dp[i][j] = dp[i + 1][j];
            if (j - notes[i] >= 0) {
                dp[i][j] += dp[i][j - notes[i]];
            }
        }
    }

    return dp[0][aim];
}

// Test Cases
console.log(bankNoteWithRecursion([5, 10, 25, 1], 0, 15)); // 6
console.log(
    bankNoteWithTriangle(
        [5, 10, 25, 1],
        0,
        15,
        new Array(5).fill(0).map(() => new Array(16).fill(-1))
    )
); // 6
console.log(bankNoteWithDP([5, 10, 25, 1], 15)); // 6
