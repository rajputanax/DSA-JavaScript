function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper: how many digits in num (0 -> 1)
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper: number of digits in the largest number of the array
function mostDigits(nums) {
  if (!nums || nums.length === 0) return 0;
  let max = 0;
  for (let n of nums) {
    max = Math.max(max, digitCount(n));
  }
  return max;
}

// Radix Sort for non-negative integers
function radixSort(nums) {
  if (!nums || nums.length <= 1) return nums.slice(); // return copy

  const maxDigitCount = mostDigits(nums);
  let result = nums.slice(); // work on a copy

  for (let k = 0; k < maxDigitCount; k++) {
    // 10 buckets (0..9)
    const buckets = Array.from({ length: 10 }, () => []);

    // place numbers into buckets based on k-th digit
    for (let num of result) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    // flatten buckets back into result (stable)
    result = [].concat(...buckets);

    // optional debug:
    console.log(`After sorting by digit ${k + 1}:`, result);
  }

  return result;
}

// Example:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Sorted result:", radixSort(arr));

