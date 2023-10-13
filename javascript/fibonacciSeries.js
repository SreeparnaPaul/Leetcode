function generateFibonacciSeries(n) {
    const series = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextValue = series[i - 1] + series[i - 2];
      series.push(nextValue);
    }
  
    return series;
  }
  
  // Example usage:
  const n = 20; // Change this to the number of Fibonacci numbers you want to generate
  const fibonacciSeries = generateFibonacciSeries(n);
  console.log(fibonacciSeries);