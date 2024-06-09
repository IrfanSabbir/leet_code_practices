// https://leetcode.com/problems/merge-sorted-array/description/

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

  Merge nums1 and nums2 into a single array sorted in non-decreasing order.

  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

  Example 1:

  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  Output: [1,2,2,3,5,6]
  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */



  /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  let left =  m-1;
  let right = m +n -1;
  let rightNum2 = n-1;
  

  while (rightNum2 >= 0) {
    if(left < 0) {
      nums1[rightNum2] = nums2[rightNum2]
      rightNum2--;
    }
    else if(nums2[rightNum2] > nums1[left]) {
      nums1[right] = nums2[rightNum2];
      right--;
      rightNum2--;
    } else {
      nums1[right] = nums1[left];
      left--;
      right--;
    }
  }
  return nums1;
};

var mergeWithSOrt = function(nums1, m, nums2, n) {
  for(i = m, j = 0; i < m+n ; i++, j++) {
    nums1[i]= nums2[j]
  }
  nums1.sort((a, b) => a -b)
  return nums1;
};

console.log(mergeWithSOrt([1,2,3,0,0,0],3, [2,5,6], 3))
console.log(mergeWithSOrt([1],1, [], 0))
console.log(mergeWithSOrt([0],0, [1], 1))


