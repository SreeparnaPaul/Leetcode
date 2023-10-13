function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      // Flag to optimize by avoiding unnecessary passes if the array is already sorted
      let swapped = false;
  
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
  
      // If no two elements were swapped in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // [11, 12, 22, 25, 34, 64, 90]
  