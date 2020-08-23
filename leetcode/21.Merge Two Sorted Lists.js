/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表 Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let pre = dummyHead;
  while (l1 != null & l2 != null) {
    if (l1.val < l2.val) {
      pre.next = l1;
      l1 = l1.next;
    }
    else {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }
  pre.next = l1 === null ? l2 : l1;
  return dummyHead.next;
};

/*
Iteration
Time: O(m+n)
Space: O(1)
 */

// @lc code=end
