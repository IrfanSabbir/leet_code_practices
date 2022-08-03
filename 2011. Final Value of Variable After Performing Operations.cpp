//  2011. Final Value of Variable After Performing Operations

class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int X =0;
        for(int n = 0; n < operations.size(); n++) {
            
            if(operations[n][0] == '+' || operations[n][2] == '+') {
                X += 1;
            } else {
                X -= 1;
            }
        }
        
        return X;
    }
};