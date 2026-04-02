class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""

        strs.forEach(str => result += `${str.length}#${str}`)

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return []
        
        let result = []
        let i = 0
        while (i < str.length) {
            let j = str.indexOf("#", i)

            const len = parseInt(str.substring(i,j));
            result.push(str.substring(j+1, j + 1 + len))
            i = j + 1 + len;
        }

        return result
    }
}
