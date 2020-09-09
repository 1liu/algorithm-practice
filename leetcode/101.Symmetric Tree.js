/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  const check = (left, right) => {
    if (!left && !right) return true;
    else if (left && right) return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
    else return false;
  }

  if (root === null) return true;
  else return check(root.left, root.right);
};

/*
Time: O(n)
Space: O(n)
*/
// @lc code=end
