


class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>>umap;
        for(int i=0; i < strs.size(); i++) {
            string key = getKey(strs[i]);
            umap[key].push_back(strs[i]);
        }
        vector<vector<string>> result ={};
        for (auto it = umap.begin(); it != umap.end(); it++) {
            result.push_back(it->second);
        }
        return result;
    }
private:
    string getKey(string str) {

        vector<int> count(26);
        for (int j = 0; j < str.size(); j++) {
            count[str[j] - 'a']++;
        }
        
        string key = "";
        for (int i = 0; i < 26; i++) {
            key.append(to_string(count[i] + 'a'));
        }
        return key;
    }
};



// Close solution tired


// class Solution {
    
// public:
//     bool groupAnagramsChecker(string s, string t) { 
//      int count[26] = {0};
//      for(auto c: s) {
//         count[c - 'a']++;
//      }
//      for(auto c: t) {
//          count[c- 'a']--;
//          if(count[c- 'a'] < 0) {
//             return false;
//          }
//      }
//      return true;
//     }
//     vector<vector<string>> groupAnagrams(vector<string>& strs) {

//         vector<vector<string>> outputs = {{}};
//         // unordered_map<string, int> umapString;
//         int array[strs.size()];

//         if (strs.size() == 1) {
//             outputs[0].push_back(strs[0]);
//         } else {
//             int i=0;
//             int uniqueItemCount = 1;
//             unordered_map<string, int> umapString;
//             umapString[strs[0]] = 0;
//             outputs[0].push_back(strs[0]);
            
//             for(auto st: strs ) {
//                 bool matched = false;
//                 string current = st;
//                 // umapString[strs[i]] = i;
//                 for(auto umapStr: umapString) {
//                     matched = groupAnagramsChecker(umapStr.first, current);
//                     if(matched) {
//                         outputs[umapStr.second].push_back(current);
//                         break;
//                     }
//                 }

//                 if(!matched) {

//                     cout << "I AM HERE too" << endl;
//                     cout << i << ". "<< current.length() << " no matched " << current << endl;
//                     // umapString[st] = 1;
//                     // umapString[1] = strs[i];
//                     // outputs[uniqueItemCount].push_back(strs[i]);
//                     // uniqueItemCount++;
//                 }
//                 i++;
//             }
//         }
//         return outputs;
//     }
// };