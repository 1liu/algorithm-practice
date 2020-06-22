/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  function swap(arr, [i,j], [m,n]){
    let temp = arr[i][j];
    arr[i][j] = arr[m][n];
    arr[m][n] = temp;
  }
  let len = matrix.length;
  for (let i = 0; i< len-1; i++){
    for (let j = 0; j< len-i; j++){
      swap(matrix, [i, j], [len-1-j, len-1-i]);
    }
  }
  for (let i = 0; i < len/2; i++) {
    for (let j = 0; j < len; j++) {
      swap(matrix, [i,j], [len - 1 - i, j]);
    }
  }
};
/* two rotation
1. diagonal (0,0) <-> (n,n)
2. x-axis   (0,i) <-> (n-1, i)

Time: O(n^2)
Space: O(1)
 */
// @lc code=end
