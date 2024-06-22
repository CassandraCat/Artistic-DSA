function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i - 1)) % 10;
}

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(
      maxDigits,
      Math.floor(Math.log10(Math.abs(nums[i])) + 1)
    );
  }
  return maxDigits;
}

function radixSort(arr, left, right, digit) {
  const radix = 10;
  const buckets = Array.from({ length: right - left + 1 }, () => 0);

  let i = 0,
    j = 0;

  for (let d = 1; d <= digit; d++) {
    const count = Array.from({ length: radix }, () => 0);

    for (i = left; i <= right; i++) {
      count[getDigit(arr[i], d)]++;
    }

    for (i = 1; i < radix; i++) {
      count[i] += count[i - 1];
    }

    for (i = right; i >= left; i--) {
      j = getDigit(arr[i], d);
      buckets[count[j] - 1] = arr[i];
      count[j]--;
    }

    for (i = left, j = 0; i <= right; i++, j++) {
      arr[i] = buckets[j];
    }
  }
}

function bucketSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const maxDigits = getMaxDigits(arr);

  radixSort(arr, 0, arr.length - 1, maxDigits);
  return arr;
}

// Example usage:
const arr = [123, 45, 6, 7, 89, 0, 12, 34, 56, 78, 90];
console.log(bucketSort(arr));
