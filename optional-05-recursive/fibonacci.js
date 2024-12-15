function fibonacci(n) {
  if (n === 0) {
    return [0]; // Base case: deret Fibonacci untuk n = 0 adalah [0]
  }
  if (n === 1) {
    return [0, 1]; // Base case: deret Fibonacci untuk n = 1 adalah [0, 1]
  }
  const fib = fibonacci(n - 1); // Rekursi untuk deret Fibonacci n - 1
  fib.push(fib[n - 1] + fib[n - 2]); // Menambahkan elemen berikutnya
  return fib; // Mengembalikan deret Fibonacci hingga n
}

export default fibonacci;
