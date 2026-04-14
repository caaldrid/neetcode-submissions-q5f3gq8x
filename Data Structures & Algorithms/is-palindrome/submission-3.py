class Solution:
    def isPalindrome(self, s: str) -> bool:
        s_lower = ''.join(ch for ch in s if ch.isalnum()).lower()
        if s_lower == "":
            return True

        result: bool = True
        i, j = 0, len(s_lower) - 1

        while(i != j and i < len(s_lower) and j > 0 ):
            if not (s_lower[i].isalnum()):
                i += 1
            
            if not (s_lower[j].isalnum()):
                j -= 1

            if s_lower[i] == s_lower[j]:
                i += 1
                j -= 1
            else:
                return False

        return result
        