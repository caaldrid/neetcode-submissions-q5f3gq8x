class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counts = new Set()

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]

            if (counts.has(num)){
                return true
            }

            counts.add(num)
        }

        return false
    } 
}
