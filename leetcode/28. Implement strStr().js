/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()28. Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/* Time: O(n)
Space: O(n)
check if needle is empty string and directly return 0 if empty
iterate over the haystack string
extract the same length substring and compare it with needle
if they are the same return the current index
return -1 at the end no finding
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0
  let n = haystack.length;
  let m = needle.length;
  for (let i =0 ; i< n; i++){
    if (haystack.slice(i,i+m)===needle){
      return i;
    }
  }
  return -1;
};
// @lc code=end
