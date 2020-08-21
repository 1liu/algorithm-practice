/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表 Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let nextTemp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nextTemp;
  }
  return pre;
};

/*
Time: O(n)
Space: O(1)
 */
// @lc code=end
