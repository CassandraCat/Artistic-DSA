function process(str, index) {
  if (index === str.length) {
    return 1;
  }
  if (str[index] === "0") {
    return 0;
  }

  if (str[index] === "1") {
    let res = process(str, index + 1);
    if (index + 1 < str.length) {
      res += process(str, index + 2);
    }

    return res;
  }

  if (str[index] === "2") {
    let res = process(str, index + 1);
    if (
      index + 1 < str.length &&
      str[index + 1] >= "0" &&
      str[index + 1] <= "6"
    ) {
      res += process(str, index + 2);
    }

    return res;
  }

  return process(str, index + 1);
}

function stringNum(str) {
  if (!str) {
    return 0;
  }

  return process(str, 0);
}

// Test
console.log(stringNum("12")); // 2
console.log(stringNum("226")); // 3
