/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符 387. First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

 /*   create a map object and assign it to var map
      loop through the string s
      if map has key s[i], assign the value to count;
      if map doesn;t has key s[i], assign zero to count;
      update the map with new key-value set

      loop through the string s again
      check if the value at key s[i] is equal to 1
      if yes return the index i

      return -1 if no return in the previous loop
  */
var firstUniqChar = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let count = map.get(s[i]) || 0;
    map.set(s[i], count + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
