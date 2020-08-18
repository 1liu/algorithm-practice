/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点 19. Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  var dummyNode = new ListNode(0);
  dummyNode.next = head;

  var length = 0;
  var first = head;
  while (first !== null) {
    first = first.next;
    length++;
  }

  length -= n;
  first = dummyNode;
  while (length > 0) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;

  return dummyNode.next;

};
// @lc code=end
