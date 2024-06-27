function lowestString(strs) {
    if (strs === null || strs.length === 0) {
        return "";
    }

    strs = strs.sort((a, b) => a + b <= b + a);
    let result = "";
    for (let i = 0; i < strs.length; i++) {
        result += strs[i];
    }

    return result;
}
