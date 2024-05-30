// https://leetcode.com/problems/3sum/description/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {

	sort.Ints(nums)
	result := [][]int{}

	for i := 0; i < len(nums)-2; i++ {

		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		left := i + 1
		right := len(nums) - 1
		for left < right {
			sum := nums[i] + nums[left] + nums[right]

			if sum > 0 {
				right--
				continue
			} else if sum < 0 {
				left++
				continue
			}

			if sum == 0 {
				result = append(result, []int{nums[i], nums[left], nums[right]})
				left++
				for nums[left] == nums[left-1] && left < right {
					left++
				}
			}
		}
	}

	return result
}

func main() {
	// numbers := []int{-1, 0, 1, 2, -1, -4}
	// numbers := []int{0, 1, 1}
	numbers := []int{0, 0, 0}

	fmt.Println("result ", threeSum(numbers))
}
