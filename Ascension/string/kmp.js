function getNextArray(str) {
    if (str.length === 1) return [-1];

    let next = new Array(str.length);
    next[0] = -1;
    next[1] = 0;
    let cn = 0;
    let i = 2;
    while (i < next.length) {
        if (str[i - 1] === str[cn]) {
            next[i++] = ++cn;
        } else if (cn > 0) {
            cn = next[cn];
        } else {
            next[i++] = 0;
        }
    }

    return next;
}

function kmp(str1, str2) {
    if (
        str1 === null ||
        str2 === null ||
        str1.length < str2.length ||
        str2.length < 1
    )
        return -1;

    let i = 0;
    let j = 0;
    let next = getNextArray(str2);
    console.log(next);
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else if (next[j] === -1) {
            i++;
        } else {
            j = next[j];
        }
    }

    console.log(i, j);

    return j === str2.length ? i - j : -1;
}

// Test
const str1 = "abcabcababaccc";
const str2 = "ababa";
console.log(kmp(str1, str2)); // 6
