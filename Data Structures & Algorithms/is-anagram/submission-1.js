class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const m = s.length
        const n = t.length

        if (m != n) {
            return false
        }

        const sChars = {}
        const tChars = {}

        for (let i = 0; i < m; i++){
            sChars[s[i]] = (sChars[s[i]] || 0) + 1
            tChars[t[i]] = (tChars[t[i]] || 0) + 1
        }

        return Object.keys(sChars).every((sc) => sc in tChars && sChars[sc] == tChars[sc])
    }
}
