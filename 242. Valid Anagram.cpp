class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;
        int count[26] ={0};
        // vector<int> count(26);
        for(char c1: s) {
            count[c1 - 'a']++;
        }
        for(char c1: t) {
            count[c1 - 'a']--; // {c1- 'a'} returns the position of c1 in alphabate 
            if(count[c1 - 'a'] < 0) {
                return false;
            }
        }
        return true;
    };
};

/*
 Solution using hash set
  unordered_map<string, int> primaryWord, primaryWord2;

        if(s.length() != t.length()) return false;
        for (char s1: s){
            cout << s1 << " is "<<  s1 - 'a' << endl;
            if(primaryWord.find({s1}) != primaryWord.end()) {
            primaryWord[{s1}] += 1;
            } else {
            primaryWord[{s1}] = 1;

            }
        }

        for (char t1: t){
            if(primaryWord2.find({t1}) != primaryWord2.end()) {
            primaryWord2[{t1}] += 1;
            } else {
            primaryWord2[{t1}] = 1;

            }
        }
        unordered_map<string, int>:: iterator itr;
        bool flag = true;
        for (itr = primaryWord.begin(); itr != primaryWord.end(); itr++){
           
            if(!primaryWord2[itr->first] || itr->second != primaryWord2[itr->first]) {
                flag = false;
                break;
            }

        }
        */
        