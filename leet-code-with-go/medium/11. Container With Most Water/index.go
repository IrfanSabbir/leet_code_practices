// https://leetcode.com/problems/container-with-most-water/description/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container

package main

import "fmt"

func maxArea(height []int) int {

	maxArea := 0
	left := 0
	right := len(height) - 1

	for left < right {
		currentArea := getMin(height[left], height[right]) * (right - left)

		if currentArea > maxArea {
			maxArea = currentArea
		}

		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}

	return maxArea
}

func getMin(num1 int, num2 int) int {
	if num1 < num2 {
		return num1
	}
	return num2
}

func main() {

	// height := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
	height := []int{1, 1}

	fmt.Println("result", maxArea(height))
}
