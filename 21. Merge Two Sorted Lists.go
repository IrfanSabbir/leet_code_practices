/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// this code node needed in leed code, for not showing error added
package main

type ListNode struct {
	Val  int
	Next *ListNode
}

// till this block

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	newList := new(ListNode)
	ptr := newList
	if list1 == nil {
		return list2
	} else if list2 == nil {
		return list1
	}

	for list1 != nil && list2 != nil {
		if list1 != nil && list1.Val <= list2.Val {
			ptr.Next = list1
			ptr = ptr.Next
			list1 = list1.Next
		} else if list2 != nil && list2.Val < list1.Val {
			ptr.Next = list2
			ptr = ptr.Next
			list2 = list2.Next
		}
	}
	if list1 != nil {
		ptr.Next = list1
	}
	if list2 != nil {
		ptr.Next = list2
	}
	newList = newList.Next
	return newList
}
