/*
 * It is known that there is an array in which only one number appears an odd number of times
 * the rest of the numbers appear an even number of times.
 * Find this odd number
 */

function findOddNumber(arr) {
    let eor = 0;
    for (let i = 0; i < arr.length; i++) {
        eor ^= arr[i];
    }

    return eor;
}

// test
let arr = [1, 2, 3, 2, 3, 1, 3];
let res = findOddNumber(arr); // 3
console.log(res);

/*
 * There are two numbers in the array that appear an odd number of times
 * the remaining numbers appear an even number of times.
 * Find these two numbers
 */

function findOddNumber2(arr) {
    let eor = 0;
    for (let i = 0; i < arr.length; i++) {
        eor ^= arr[i];
    }

    // get the rightmost bit 1
    let rightOne = eor & -eor;

    let onlyOne = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] & rightOne) !== 0) {
            onlyOne ^= arr[i];
        }
    }

    return [onlyOne, eor ^ onlyOne];
}

// test
let arr2 = [1, 2, 3, 2, 3, 1, 4, 5];
let res2 = findOddNumber2(arr2); // [4, 5]
console.log(res2);
