// 1200. Minimum Absolute Difference

class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
        vector<vector<int>> dist;
        sort(arr.begin(), arr.end());
        int size = arr.size();
        int min =-1;
        for(int j=0; j<size-1;j++) {
            int dif = abs(arr[j+1]-arr[j]);
            if(min == -1) min =dif;
            if(dif <min) min =dif;
        };
        for(int j=0; j<size-1; j++) {
            int dif = abs(arr[j+1]-arr[j]);
            if(dif == min) {
                dist.push_back({arr[j], arr[j+1]});
            }
           
        };
        return dist;
    }
};