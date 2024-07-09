// https://leetcode.com/problems/subarray-sum-equals-k/description/
/**
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let total = 0;
  let sum = 0;
  const map = new Map()
  map.set(0, 1)
  for(n of nums) {
      sum += n;
      const remains = sum - k;
      if(map.has(remains)) {
          total += map.get(remains);
      }
      map.set(sum, (map.get(sum) || 0) + 1)
  }
  return total;
};

console.log(subarraySum([1,1,1], 2))