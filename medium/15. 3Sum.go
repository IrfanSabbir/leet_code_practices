func threeSum(nums []int) [][]int {
	var result [][]int

	var sortedNums = nums
	sort.Ints(sortedNums)

	for i := 0; i < len(sortedNums)-2; i++ {
		if i == 0 || sortedNums[i] != sortedNums[i-1] {
			var left, right int = i + 1, len(sortedNums) - 1
			for left < right {
				currentSum := sortedNums[i] + sortedNums[left] + sortedNums[right]

				if currentSum > 0 {
					right--
				} else if sortedNums[i]+sortedNums[left]+sortedNums[right] < 0 {
					left++
				} else {
					result = append(result, []int{sortedNums[i], sortedNums[left], sortedNums[right]})
					left++
					for sortedNums[left] == sortedNums[left-1] && left < right {
						left++
					}
				}
			}
		}
	}
	return result
}