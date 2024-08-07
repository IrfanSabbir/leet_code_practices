// https://leetcode.com/problems/brick-wall/description/

/**
 * There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.

Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2
Example 2:

Input: wall = [[1],[1],[1]]
Output: 3

 */

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  console.log(wall.length)
  let map = new Map()
  let max = 0;

  for(let i =0; i<wall.length ; i++) {
    // console.log(wall[i])
    let sum = 0;
    for(let j=0; j<wall[i].length-1; j++){
      sum += wall[i][j];
      map.set(sum, (map.get(sum) ||0 ) + 1)
      if(map.get(sum) > max) {
        max = map.get(sum) 
      }
    }
    // totalBrics = sum;
    console.log(map, max)
  }
  return  wall.length - max
};

// console.log(leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]))
console.log(leastBricks([[1],[1],[1]]))
// console.log(leastBricks([[1,1],[2],[1,1]]))
