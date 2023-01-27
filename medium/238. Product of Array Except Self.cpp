
// Previous accepted solution  TIME 0(N), space is high
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int inputSize = nums.size();
        int prefex[inputSize], postfix[inputSize];
        vector<int> output;
        for (int i = 0; i < inputSize; i++ ) {
             prefex[i] = i == 0 ? nums[i] : (nums[i] * prefex[i-1]);
             postfix[inputSize-i-1] = inputSize -i == inputSize ? nums[inputSize-1] :(postfix[inputSize-i] *  nums[inputSize-i-1]);

        }
       
        for(int i=0; i < inputSize; i++) {
            if(i == 0) {
                output.push_back(postfix[i+1]);
            } else if(i+1 == inputSize) {
                output.push_back(prefex[i-1]);
            } else {
                 output.push_back(prefex[i-1] * postfix[i+1]);
            }
        }
     
        return output;
    }
};