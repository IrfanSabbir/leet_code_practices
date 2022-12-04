class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map <int, int> previousMap;
        vector<int> indexArr;
        for(int i=0; i< nums.size(); i++) {
            if(previousMap.find(target- nums[i]) == previousMap.end()) {
                previousMap[nums[i]] = i;
            } else {
                indexArr.push_back(previousMap[target- nums[i]]);
                indexArr.push_back(i);
                break;
            }
        }
        return indexArr;
    }
};