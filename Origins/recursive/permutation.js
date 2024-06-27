function process(charArr, index, res) {
    if (index === charArr.length) {
        console.log(res);
        return;
    }

    let visit = new Array(26).fill(false);

    for (let j = index; j < charArr.length; j++) {
        if (!visit[charArr[j].charCodeAt(0) - "a".charCodeAt(0)]) {
            visit[charArr[j].charCodeAt(0) - "a".charCodeAt(0)] = true;
            swap(charArr, index, j);
            process(charArr, index + 1, res + charArr[index]);
            swap(charArr, index, j);
        }
    }
}

function swap(charArr, i, j) {
    const temp = charArr[i];
    charArr[i] = charArr[j];
    charArr[j] = temp;
}

function permutation(str) {
    if (!str) {
        return;
    }

    const charArr = str.split("");
    process(charArr, 0, "");
}

// Test
permutation("abc");
