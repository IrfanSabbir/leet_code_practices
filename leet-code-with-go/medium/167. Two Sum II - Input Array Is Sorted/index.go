// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

package main

import "fmt"

func twoSum(numbers []int, target int) []int {
	i := 0
	j := len(numbers) - 1

	for i < j {
		sum := numbers[i] + numbers[j]

		if sum == target {
			return []int{i + 1, j + 1}
		}

		if sum > target {
			j--
		} else {
			i++
		}

	}
	return []int{0, 0}
}

func main() {
	// numbers := []int{2, 7, 11, 15}
	// target := 9

	// numbers := []int{2, 3, 4}
	// target := 6

	numbers := []int{-1, 0}
	target := -1

	fmt.Println("result ", twoSum(numbers, target))
}
