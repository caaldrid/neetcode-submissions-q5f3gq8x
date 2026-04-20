class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            if c in "([{":
                stack.append(c)
            else:
                # Check if stack is empty before popping
                if not stack:
                    return False

                last_open_parentheses = stack.pop(-1)

                if last_open_parentheses == '(' and c == ')':
                    continue
                if last_open_parentheses == '[' and c == ']':
                    continue
                if last_open_parentheses == '{' and c == '}':
                    continue
                return False
        
        return not stack

        