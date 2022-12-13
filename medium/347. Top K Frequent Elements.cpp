class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        map<string, int> numsCount;
        multimap<int, string> numsCountRev;

        if(nums.size() == 1) return nums;
        vector<int> output;
        for(auto n: nums) {
            numsCount[to_string(n)]++;
        }
        
        for(auto itr=  numsCount.begin(); itr != numsCount.end(); itr++ ) {
            numsCountRev.insert(make_pair(itr->second, itr->first));
        }
        int i=0;
        for(auto itr=  numsCountRev.rbegin(); itr != numsCountRev.rend(); itr++ ) {
            output.push_back(stoi(itr->second));
            i++;
            if(i== k) break;
        }

        return output;
    }
};