/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i % 3 === 0 ? (i % 5 === 0 ? 'FizzBuzz' : 'Fizz') : (i % 5 === 0 ? 'Buzz' : i.toString()));
  }
  return res;
};
// @lc code=end
