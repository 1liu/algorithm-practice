/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function leftest(node) {
    while (node && node.left) node = node.left;
    return node;
  }
  function rightest(node) {
    while (node && node.right) node = node.right;
    return node;
  }

  if (root === null) return true;
  const left = rightest(root.left);
  const right = leftest(root.right);
  if (left && left.val >= root.val) return false;
  if (right && right.val <= root.val) return false;
  return isValidBST(root.left) && isValidBST(root.right);
};
// @lc code=end
