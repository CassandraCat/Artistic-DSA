function process(index, start, end, other) {
  if (index === 1) {
    console.log(`Move ${index} from ${start} to ${end}`);
  } else {
    process(index - 1, start, other, end);
    console.log(`Move ${index} from ${start} to ${end}`);
    process(index - 1, other, end, start);
  }
}

function hanoi(n) {
  if (n < 1) {
    return;
  }

  process(n, "A", "C", "B");
}

// Test
hanoi(3);
