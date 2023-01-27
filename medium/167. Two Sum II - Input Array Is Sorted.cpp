class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> result;
        int left =0, right = numbers.size() -1;
        while(left < right) {
            if(numbers[left] + numbers[right] == target)  break;
            else if(numbers[left] + numbers[right] > target)  right--;
            else if(numbers[left] + numbers[right] < target)  left++;
        }
        
        return vector<int> {left+1, right+1};
    }
};