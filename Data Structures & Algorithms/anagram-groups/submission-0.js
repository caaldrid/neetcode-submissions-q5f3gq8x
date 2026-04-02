class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // .charCodeAt(i) - 'a'

        const groups = new Map()

        strs.forEach(str => {
            // sort the characters in the string to get a canonical key
            let key = ""
            if (str !== ""){
                key = [...str].sort().join('');
            }
            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(str);
        })

        return [...groups.values()]
    }
}
