/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转 7. Reverse Integer

 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let old = Math.abs(x), newNum = 0;
  while (old > 0) {
    newNum = newNum * 10 + old % 10;
    old = Math.floor(old / 10);
  }
  if (x < 0) return newNum <= 2**31 - 1 ? -newNum : 0;
  else return newNum <= 2**31 ? newNum : 0;
};
// @lc code=end
/* need to check the boundary
 */
