class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {")": "(", "]": "[", "}": "{"}
        
        for char in s:
            if char in mapping:  # Closing bracket
                # Check if stack is empty or top doesn't match
                if not stack or stack[-1] != mapping[char]:
                    return False
                stack.pop()
            else:  # Opening bracket
                stack.append(char)
        
        return not stack

        