function factorial(n) {
  if (n === 0) {
    return 1; // Base case: faktorial dari 0 adalah 1
  }
  return n * factorial(n - 1); // Rekursi: n * faktorial(n - 1)
}

export default factorial;
