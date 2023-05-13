/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	lCount := maxDepth(root.Left)
	rCount := maxDepth(root.Right)
	return int(math.Max(float64(lCount), float64(rCount)) + 1.00)
}