// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
  Example 1:

  Input: nums = [1,2,3,1], k = 3
  Output: true

 * 
 */

  /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

  // optimizes sliding window
  var containsNearbyDuplicate = function(nums, k) {
    let left = 0, right = 0;
    let numsMAp  = new Map()
    let isExist = false
    while (right < nums.length) {
      if(right - left > k) {
        numsMAp.delete(nums[left]);
        left++
      }
      if(numsMAp.has(nums[right])) {
        isExist = true;
        break
      }
      numsMAp.set(nums[right], right)
      right++;
    }
    return isExist
  }

// This is brute force o (n * k)
var containsNearbyDuplicate2 = function(nums, k) {
  const numsMAp = {}
  let isExist = false
  for(let i =0; i< nums.length; i++) {
    numsMAp[nums[i]] = numsMAp[nums[i]] ? [...numsMAp[nums[i]], i] : [i]
  }

  const numsMApKey = Object.keys(numsMAp);

  for(let numsKey of numsMApKey) {
    if(numsMAp[numsKey].length > 1) {
      for(let l=0, r= 1; r < numsMAp[numsKey].length; l++, r++  ) {
        if(Math.abs(numsMAp[numsKey][l] - numsMAp[numsKey][r]) <= k) {

          isExist = true;
          break;
        }
      }
    }
    if(isExist) break;
  }
  return isExist
};

// console.log(containsNearbyDuplicate([1,2,3,1, -3], 3))
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
console.log(containsNearbyDuplicate([1,0,1,1], 1))

