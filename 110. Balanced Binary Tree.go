/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int

 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type HeightBalance struct {
	isOk   bool
	height int
}

func isBalanced(root *TreeNode) bool {
	isOk := dfs(root).isOk
	return isOk
}
func dfs(currNode *TreeNode) HeightBalance {
	if currNode == nil {
		return HeightBalance{true, 0}
	}

	left := dfs(currNode.Left)
	right := dfs(currNode.Right)
	isOk := (left.isOk && right.isOk && int(math.Abs(float64(left.height)-float64(right.height))) <= 1)

	return HeightBalance{isOk, 1 + max(left.height, right.height)}
}

func max(val1, val2 int) int {
	if val1 > val2 {
		return val1
	} else {
		return val2
	}
}

