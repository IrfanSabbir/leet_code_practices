/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
var maxLen int

func diameterOfBinaryTree(root *TreeNode) int {
	maxLen = 0
	dfs(root)
	return maxLen
}

func dfs(currentNode *TreeNode) int {
	if currentNode == nil {
		return 0
	}
	fmt.Println(currentNode.Val)
	left := dfs(currentNode.Left)
	right := dfs(currentNode.Right)
	maxLen = max(maxLen, left+right)
	return max(left, right) + 1
}

func max(val1, val2 int) int {
	if val1 > val2 {
		return val1
	} else {
		return val2
	}
}