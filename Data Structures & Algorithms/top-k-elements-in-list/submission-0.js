class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map()

        nums.forEach(num => {
            if (!frequency.has(num)) {
                frequency.set(num, 0)
            }

            frequency.set(num, frequency.get(num) + 1)
        })

        const SortedFrequency = new Map([...frequency.entries()].sort((a, b) => b[1] - a[1]));

        return [...SortedFrequency.keys()].slice(0, k)
    }
}
