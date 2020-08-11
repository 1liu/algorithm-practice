/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ 680. Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0, right = s.length - 1;

  // helper function using two pointers to check if isPlaindrome
  const isPalindrome = (l, r) => {
    while (l < r) {
      if (s[l++] !== s[r--]) {
        return false;
      }
    }
    return true;
  }

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};
/*
Time: O(n)
Space: O(1)
 */

// @lc code=end
