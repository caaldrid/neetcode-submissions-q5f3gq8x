class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sums = {}
        for (let i = 0; i < nums.length; i++){
            let num = nums[i]

            if (num in sums){
                return [Math.min(sums[num], i), Math.max(sums[num], i)]
            }

            let diff = target - num
            sums[diff] = i
        }
    }
}
