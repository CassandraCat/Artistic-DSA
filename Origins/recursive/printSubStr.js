function printSubString(charArr, index, res) {
    if (index === charArr.length) {
        console.log(res);
        return;
    }

    printSubString(charArr, index + 1, res + charArr[index]);
    printSubString(charArr, index + 1, res);
}

function test() {
    const charArr = ["a", "b", "c"];
    printSubString(charArr, 0, "");
}

test();
