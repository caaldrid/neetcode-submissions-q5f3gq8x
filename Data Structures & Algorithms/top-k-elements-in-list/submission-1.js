class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map()
        const freq = Array.from({length: nums.length + 1}, () => [])

        nums.forEach(num => {
            if (!count.has(num)) {
                count.set(num, 0)
            }

            count.set(num, count.get(num) + 1)
        })

        for(let [key, val] of count) {
            freq[val].push(key)
        }

        return freq.reverse().flat().slice(0,k)
    }
}
