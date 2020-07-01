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

// let myAtoi = (str) => {
//   let res = str.trim().match(/^(\-|\+)?\d+/i)
//   return res ? Math.max(Math.min(Number(res[0]), 2 ** 31 - 1), -(2 ** 31)) : 0
// };
 var myAtoi = function (str) {
   const INT_MIN = -Math.pow(2, 31);
   const INT_MAX = Math.pow(2, 31) - 1;

  let res = 0, i = 0, flag = 1;
  while(str[i]===' ') {i++;}
  if(str[i]==='-') flag = -1;
  if(str[i]==='+' || str[i] === '-') i++;

   while (i < str.length && str[i]!==' '&&Number.isInteger(Number(str[i]))){
    let r = Number(str[i]);
     if (res > INT_MAX / 10 || (res === Math.floor(INT_MAX / 10) && r > 7)){
      return flag > 0?INT_MAX:INT_MIN;
    }
    res = res*10 + r;
    i++;
  }
  return flag>0?res:-res;

 }

console.log(myAtoi("2147483648"))
/*
Time: O(n)
Space: O(1)
*/


// @lc code=end
