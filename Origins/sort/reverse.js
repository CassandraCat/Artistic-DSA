function inversions(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  const result = [];
  process(arr, 0, arr.length - 1, result);
  return result;
}

function process(arr, left, right, result) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    process(arr, left, mid, result);
    process(arr, mid + 1, right, result);
    merge(arr, left, mid, right, result);
  }
}

function merge(arr, left, mid, right, result) {
  const help = [];
  let i = 0,
    p1 = left,
    p2 = mid + 1;

  while (p1 <= mid && p2 <= right) {
    if (arr[p1] > arr[p2]) {
      for (let k = p1; k <= mid; k++) {
        result.push([arr[k], arr[p2]]);
      }
    }
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }

  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= right) {
    help[i++] = arr[p2++];
  }

  for (let i = 0; i < help.length; i++) {
    arr[left + i] = help[i];
  }
}

// Test
// Give me a inversions array
const arr = [4, 2, 1, 3];
const inversionsArray = inversions(arr);
console.log(inversionsArray);
