/* Given a binary array, find the maximum number of consecutive 1s in this array.

  Example 1:
Input: [1, 1, 0, 1, 1, 1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10, 000 */
const findMaxConsecutiveOnes = function (nums) {
  return nums.reduce((acc, cur) => {
    cur ? acc[0]++ : acc[0] = 0;
    acc[1] = Math.max(acc[0], acc[1])
    return acc;
  }, [0, 0])[1]
};


let nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums))
