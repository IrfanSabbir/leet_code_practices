// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	maxLen := 0
	charSet := make(map[byte]bool)
	l := 0

	for r, _ := range s {

		for charSet[s[r]] {
			delete(charSet, s[l])
			l++
		}
		charSet[s[r]] = true
		maxLen = max(maxLen, r-l+1)

	}

	return maxLen
}

func max(a int, b int) int {
	if a > b {
		return a
	} else {
		return b
	}
}

func main() {
	// s := "abcabcbb"
	// s := "bbbbb"
	s := "pwwkew"

	fmt.Println("result", lengthOfLongestSubstring(s))
}
