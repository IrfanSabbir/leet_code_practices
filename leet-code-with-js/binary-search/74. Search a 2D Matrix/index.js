// https://leetcode.com/problems/search-a-2d-matrix/description/

/**
 * 
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let isExist = false;

 let rowS = 0, rowE = matrix.length;
 let colS= 0, colE = matrix[0].length;
 
 let searchRow = 0;

 if(matrix.length === 1) {
   searchRow = 0
 } else {
   while(rowS < rowE) {
     let rowMid = Math.floor((rowS + rowE)/2);
     if(matrix[rowMid][0] <= target && matrix[rowMid][colE-1] >= target) {
       console.log(matrix[rowMid][0], matrix[rowMid][colE-1])
       searchRow = rowMid;
       break;
     }
     else if (matrix[rowMid][0] > target) {
       rowE = rowMid;
     } else {
       rowS = rowMid+1;
     }
   }
 }

 while (colS < colE) {
   let colMid = Math.floor((colS + colE)/2);
   if(matrix[searchRow][colMid] === target) {
     isExist = true;
     break;
   } else if(target < matrix[searchRow][colMid]) {
     colE = colMid;
   } else {
     colS =  colMid + 1
   }
 }

 return isExist;
};


// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 15))
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
console.log(searchMatrix([[1],[3]], 4))