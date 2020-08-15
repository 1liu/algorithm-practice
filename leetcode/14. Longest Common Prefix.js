/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀 14. Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length===0||strs===undefined) return  "";
  if(strs.length===1) return strs[0];

  let current = strs[0];
  for (let i =1; i<strs.length; i++){
    let j = 0;
    for (; j<strs[i].length&&current.length;j++){
      if(current[j]!==strs[i][j]) break;
    }
    current = current.substring(0, j);
    if(current==='') return '';
  }
  return current;
};
// @lc code=end
