/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/
function allLongestStrings(inputArray) {
  const lenArray = inputArray.map(arr => arr.length);
  const maxLen = Math.max(...lenArray);
  let output = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLen) {
      output.push(inputArray[i])
    }
  }
  return output;
}
