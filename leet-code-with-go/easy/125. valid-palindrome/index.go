// https://leetcode.com/problems/valid-palindrome/description/

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome

// Input: s = "A man, a plan, a canal: Panama"

package main

import (
	"fmt"
	"unicode"
)

func isPalindrome(s string) bool {
	i := 0
	j := len(s) - 1
	arr := []rune(s)

	for i < j {
		left := unicode.ToLower(arr[i])
		right := unicode.ToLower(arr[j])

		if !isValidCharOrDigit(left) {
			i++
			continue
		}
		if !isValidCharOrDigit(right) {
			j--
			continue
		}
		if left != right {
			return false
		}
		i++
		j--

	}
	return true
}

func isValidCharOrDigit(s rune) bool {
	return unicode.IsLetter(s) || unicode.IsDigit(s)
}
func main() {
	// s := "A man, a plan, a canal: Panama"
	s := "race a car"
	// s := " "

	fmt.Println(isPalindrome(s))
}
