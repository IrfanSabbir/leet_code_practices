// 1512. Number of Good Pairs

class Solution
{
public:
  int numIdenticalPairs(vector<int> &nums)
  {
    int count = 0;

    int y = 0;
    int z = 1;
    while (true)
    {
      if (y == nums.size() - 1)
        break;

      if (z < nums.size())
      {
        if (nums[y] == nums[z])
        {
          count++;
          cout << count;
        }
        z++;
      }

      else
      {
        y++;
        z = y + 1;
      }
    }

    return count;
  }
};