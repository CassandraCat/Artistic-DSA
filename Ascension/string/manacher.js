function manaCherString(str) {
    if (str === null || str.length === 0) return "";
    let res = new Array(str.length * 2 + 1);
    let index = 0;
    for (let i = 0; i < res.length; i++) {
        res[i] = i % 2 === 0 ? "#" : str[index++];
    }
    return res.join("");
}

function manaCher(str) {
    if (str === null || str.length === 0) return 0;
    str = manaCherString(str);
    let res = 0;
    let pArr = new Array(str.length);
    let C = -1;
    let R = -1;
    for (let i = 0; i < str.length; i++) {
        pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1;
        while (
            i + pArr[i] < str.length &&
            i - pArr[i] > -1 &&
            str[i + pArr[i]] === str[i - pArr[i]]
        ) {
            pArr[i]++;
        }
        if (i + pArr[i] > R) {
            R = i + pArr[i];
            C = i;
        }
        res = Math.max(res, pArr[i]);
    }
    return res - 1;
}

// Test
const str = "abc1234321ab";
console.log(manaCher(str)); // 7
