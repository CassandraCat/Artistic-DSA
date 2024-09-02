function cardWinWithDP(cards) {
    if (cards.length === 0 || cards === null) return 0;

    let N = cards.length;
    let firstDP = new Array(N).fill(0).map(() => new Array(N).fill(0));
    let lastDP = new Array(N).fill(0).map(() => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        firstDP[i][i] = cards[i];
        lastDP[i][i] = 0;
    }

    for (let i = 1; i < N; i++) {
        let left = 0;
        let right = i;

        while (left < N && right < N) {
            firstDP[left][right] = Math.max(
                cards[left] + lastDP[left + 1][right],
                cards[right] + lastDP[left][right - 1]
            );
            lastDP[left][right] = Math.min(
                firstDP[left + 1][right],
                firstDP[left][right - 1]
            );
            left++;
            right++;
        }
    }

    return Math.max(firstDP[0][N - 1], lastDP[0][N - 1]);
}

// Test Cases
console.log(cardWinWithDP([1, 2, 3, 4])); // 6
console.log(cardWinWithDP([1, 100, 2])); // 100
