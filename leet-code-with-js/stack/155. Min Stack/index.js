// https://leetcode.com/problems/min-stack/description/

/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
 */


var MinStack = function() {
  this.stack = []
  this.minVal = []
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  if(this.minVal.length !== 0) {
      val = Math.min(this.minVal[this.minVal.length -1], val)
  }
  this.minVal.push(val)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minVal.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length -1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minVal[this.minVal.length -1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
