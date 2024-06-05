// https://leetcode.com/problems/longest-repeating-character-replacement/description/

/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

  Return the length of the longest substring containing the same letter you can get after performing the above operations.

  Example 1:

  Input: s = "ABAB", k = 2
  Output: 4
  Explanation: Replace the two 'A's with two 'B's or vice versa.
 * 
 */

  /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
  var characterReplacement = function(s, k) {
    let max= 0;
         let currMax = 0
         let left =0, right =0;
         let countArr = {}
         let windowSize = 0;
         let isRightShrink = false;
         
         while (right < s.length) {
           if(!isRightShrink) {
             countArr[s[right]] = countArr[s[right]] ? countArr[s[right]] + 1 : 1;
             windowSize++;
           }
           Object.keys(countArr).forEach(countKey => {
             if(countArr[countKey] > currMax) {
               currMax = countArr[countKey]
             }
           })
   
           if(windowSize -currMax <= k){
             max = Math.max(max, windowSize);
             isRightShrink =false
             right++;
           } else {
             windowSize--;
             countArr[s[left]]--;
             isRightShrink =true
             left++;
           }
         }
   
         return max
   };
  
// console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))
// console.log(characterReplacement("ABAA", 0))
// console.log(characterReplacement("ABBB", 2))


