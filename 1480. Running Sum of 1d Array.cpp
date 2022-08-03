// 1480. Running Sum of 1d Array

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int l = nums.size();
        int res[l];
        for( int i =1; i<l; i++) {
            nums [i] += nums[i-1];
        }
        
        return nums;
    }
};