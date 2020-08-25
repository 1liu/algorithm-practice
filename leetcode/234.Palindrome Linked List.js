/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表 Palindrome Linked List
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
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  let mid = head;
  let pre = null;
  let reversed = null;

  while (head !== null && head.next !== null) {
    pre = mid;
    mid = mid.next;
    head = head.next.next;

    pre.next = reversed;
    reversed = pre;
  }
  if (head) mid = mid.next;
  while(mid){
    if(mid.val!==reversed.val) return false;
    mid = mid.next;
    reversed = reversed.next;
  }
  return true;

};

/*
Time: O(n)
Space: O(1)
*/
// @lc code=end
