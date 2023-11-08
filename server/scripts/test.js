function fibonacci(n, memo = {}) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  if (memo[n]) {
    return memo[n];
  }

  const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;

  return result;
}

const result = fibonacci(10); // Calculate Fibonacci of 10
console.log(result); // Output: 55