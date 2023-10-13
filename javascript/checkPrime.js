function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    if (num <= 3) {
      return true;
    }
  
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPrime(3));  // true
  console.log(isPrime(15));  // false

  function findPrimesInRange(start, end) {
    const primeNumbers = [];
    for (let number = start; number <= end; number++) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
    }
    return primeNumbers;
  }

  console.log(findPrimesInRange(0,100));
  