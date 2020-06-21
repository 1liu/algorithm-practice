/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

  var moveZeroes = function (nums) {
    let len = nums.length, index = 0;
    for (let i = 0; i < len; i++) {
      if (nums[i] !== 0) {
        nums[index] = nums[i];
        index++;
      }
    }
    for (let i = index; i < len; i++) {
      nums[i] = 0;
    }
  };

// @lc code=end
