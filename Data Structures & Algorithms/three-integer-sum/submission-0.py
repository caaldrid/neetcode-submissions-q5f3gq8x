class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        result = []

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # Skip duplicate values
            if nums[i] > 0:
                break
            
            l, r = i + 1, len(nums) - 1

            while l < r:
                curSum = nums[i] + nums[l] + nums[r]

                if curSum  > 0 :
                    r -= 1
                elif curSum < 0:
                    l += 1
                else:
                    result.append([nums[i], nums[l], nums[r]])
                    r -= 1
                    l += 1
                    # Skip duplicate values on the left
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1

        return result
