/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi) 8. String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
// var myAtoi = function (str) {
//   const number = parseInt(str, 10);

//   if (isNaN(number)) {
//     return 0;
//   } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
//     return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
//   } else {
//     return number;
//   }
// };

let myAtoi = (str) => {
  let res = str.trim().match(/^(\-|\+)?\d+/i)
  return res ? Math.max(Math.min(Number(res[0]), 2 ** 31 - 1), -(2 ** 31)) : 0
};


// @lc code=end
