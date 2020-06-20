var plusOne = function (digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) {
      return digits;
    }
  }
  return [1, ...digits];
}

let digits = [9,9,9,9];
let digits2 = [1,2,3,4];
console.log(plusOne(digits))
console.log(plusOne(digits2))
/*
Array
Time: O(n)
Space: O(n)
 */
