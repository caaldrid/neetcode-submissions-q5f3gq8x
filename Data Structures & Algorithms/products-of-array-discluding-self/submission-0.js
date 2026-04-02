class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let left = []
        let prod = 1
        for (let i = 0; i < nums.length; i ++) {
            left.push(prod)
            prod = prod * nums[i]
        }


        prod = 1
        let right = []
        for (let i = nums.length - 1; i >= 0; i --) {
            right.unshift(prod)
            prod = prod * nums[i]
            
        }

        let result = []
        for (let j = 0; j < nums.length; j++){
            result.push(left[j] * right[j])
        }

        return result
    }
}
