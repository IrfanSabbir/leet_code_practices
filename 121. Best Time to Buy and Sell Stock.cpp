class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int buyPrice = INT_MAX;
        int masxProfitGot = 0;
        for(int i=0; i < prices.size(); i++) {
            buyPrice = min(buyPrice, prices[i]);
            masxProfitGot = max(masxProfitGot, prices[i]-buyPrice);
        } 
        return masxProfitGot;
    }
};