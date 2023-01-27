class MinStack {
private:
    stack<int> stk;
    stack<int> minStack;
public:

    void push(int val) {
        stk.push(val);
        if(minStack.empty() || val <= getMin()) {
            minStack.push(val);
        }
        else {
            minStack.push(getMin());
        }
    }
    
    void pop() {
        stk.pop();
        minStack.pop();
    }
    
    int top() {
        return stk.top();
    }
    
    int getMin() {
        return minStack.top();
    }

};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */