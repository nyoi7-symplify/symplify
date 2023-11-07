function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
}

// Example usage:
const n = 10; // Calculate the first 10 Fibonacci numbers
const result = fibonacci(n);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
