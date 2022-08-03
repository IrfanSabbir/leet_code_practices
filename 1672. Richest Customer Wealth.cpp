
//  1672. Richest Customer Wealth

class Solution {
public:
    int maximumWealth(vector<vector<int>>& accounts) {
        int a_l =  accounts.size();
        int c_l =  accounts[0].size();
        int max = 0;        
        int sum = 0;

        for(int r=0,c = 0; r < a_l;) {
            if (c < c_l) {
                sum += accounts[r][c];
                c++;
            } 
            else 
            {
                if(max <= sum) 
                {
                    max =sum;
                }
                r++;
                c = 0;
                sum = 0;
            }
        }
        
        return max;
    }
};