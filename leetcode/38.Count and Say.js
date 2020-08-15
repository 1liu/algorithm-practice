/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列 Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';

  func = a => {
    let m = 1;
    let res = '';
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
        m++;
      } else {
        res += (m + a[i]);
        m=1;
      }
    }
    n--;
    return n == 1 ? res : func(res);
  }
  return func('1');
};
// @lc code=end
