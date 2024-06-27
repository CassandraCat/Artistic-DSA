function nQueen(n) {
    if (n < 1 || n > 32) {
        return 0;
    }

    const limit = n === 32 ? -1 : (1 << n) - 1;
    return process(limit, 0, 0, 0);
}

function process(limit, colLimit, leftDiaLimit, rightDisLimit) {
    if (colLimit === limit) {
        return 1;
    }

    let res = 0;

    let pos = limit & ~(colLimit | leftDiaLimit | rightDisLimit);

    while (pos) {
        const mostRightOne = pos & -pos;
        pos = pos - mostRightOne;
        res += process(
            limit,
            colLimit | mostRightOne,
            (leftDiaLimit | mostRightOne) << 1,
            (rightDisLimit | mostRightOne) >> 1
        );
    }

    return res;
}

// Test
console.log(nQueen(8)); // 92
