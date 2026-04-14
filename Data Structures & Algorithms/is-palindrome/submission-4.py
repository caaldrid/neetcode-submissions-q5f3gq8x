class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Filter and lowercase in one pass
        s_clean = ''.join(ch.lower() for ch in s if ch.isalnum())
        
        # Two-pointer approach
        i, j = 0, len(s_clean) - 1
        while i < j:
            if s_clean[i] != s_clean[j]:
                return False
            i += 1
            j -= 1
        
        return True
        