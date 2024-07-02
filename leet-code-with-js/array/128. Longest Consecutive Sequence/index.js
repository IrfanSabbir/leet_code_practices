// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 */

/**
 * @param {number[]} nums
 * @return {number}
 */


// console.log(longestConsecutive([0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999]))

// This solution has time limit for avobe test case

// var longestConsecutive = function(nums) {
//   if(nums.length <= 1) return nums.length
//   const map = new Map();
//   let min = Infinity, max = -Infinity;

//   for (num of nums) {
//     map.set(num, true)
//     if(num > max) {
//       max = num;
//     }
//     if(num < min) {
//       min = num
//     }
//   }

//   let maxSeQ = 0, curMax = 0
  
//   while (min <= max) {
//     if(map.has(min) && map.has(min+1)) {
//       curMax++;
//     } else {
//       maxSeQ = Math.max(curMax+1, maxSeQ);
//       curMax = 0;
//     }
//     min++;
//     while(!map.has(min)) {
//       min++;
//     }
//   }

//   return maxSeQ
// };




const longestConsecutive = (nums) => {
  const set = new Set(nums)
  let maxSeQ = 0;

  for (let val of set ) {
    if(!set.has(val-1)) {
      let curMax = 1;
      let tempValue = val;
      while(set.has(tempValue+1)) {
        tempValue++;
        curMax++;
      }
      maxSeQ =  Math.max(curMax, maxSeQ)
    }
  }
  return maxSeQ
}
// console.log(setTest([100,4,200,1,3,2]))

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
console.log(longestConsecutive([0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999]))
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]))


