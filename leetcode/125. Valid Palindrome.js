/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串 125. Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
<<<<<<< HEAD
 let str = s.replace(/\W/g, '').toLowerCase();
 let left = 0, right = str.length-1;
 while(left<right){
   if(str[left]!==str[right]){
     return false;
   }else{
     left++,right--;
   }
 }
 return true;
};
=======
  let str = s.replace(/\W|_/g, '').toLowerCase();
  let left = 0, right = str.length-1;
  while(left<right){
    if(str[left]!==str[right]){
      return false;
    }
    left++;
    right--;

  }
  return true;
};
/*
use regex to replace all non letter with empty string
set two pointer one at beginning and one at the end
check if the value at two indexes are the same. if not immediately return false
otherwise increment left pointer and decrement right point;
do the same check while left is small than right
 */

>>>>>>> ccad576e1cb7d7635d1e0aaa32b652c3bdcc9ead
// @lc code=end
