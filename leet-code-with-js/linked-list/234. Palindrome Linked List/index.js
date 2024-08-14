// https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head, fast =head;

  while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }

  let prev =null, curr = slow;
  while(curr) {
      let next = curr.next;
      curr.next = prev;

      prev = curr;
      curr =next

  }

  while(prev) {
      console.log(prev.val, head.val)
      if(prev.val !== head.val) {
          return false;
      }
      prev = prev.next
      head = head.next

  }

  return true
};