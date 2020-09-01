/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表 Linked List Cycle
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
 * @return {boolean}
 */
/* var hasCycle = function (head) {
  if (head == null || head.next == null) return false;

  let x = head.next;
  let y = head;

  while (x != y) {
    if (x == null || x.next == null) return false;
    x = x.next.next;
    y = y.next;
  }
  return true;
}; */
/*
Time: O(n)
Space: O(1)
 */
var hasCycle = function (head) {
  if (head == null || head.next == null) return false;

  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
};


/*
time: O(n)
space: O(n)
 */

// @lc code=end
