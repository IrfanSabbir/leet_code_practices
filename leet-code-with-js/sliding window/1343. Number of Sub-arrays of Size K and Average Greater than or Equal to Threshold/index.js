
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
/**
 * 
 * Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

  Example 1:

  Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
  Output: 3
  Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {

  let count = 0, left =0, right =0, currentSum = 0;
  
  while(right < arr.length) {
    if(right - left >= k) {
      currentSum  -= arr[left] ;
      left++;
    } 
    currentSum += arr[right]

    if (right - left + 1 === k  && currentSum/k >= threshold) {
      count++;
    } 
    right++
    
  }
  return count
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3,  4))
// console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5))

