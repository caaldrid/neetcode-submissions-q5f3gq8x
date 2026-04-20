class MinStack:

    def __init__(self):
        self.st = []
        self.minEle = None
        

    def push(self, val: int) -> None:
        if not self.st:
            self.minEle = val
            self.st.append(val)
        elif val < self.minEle:
            self.st.append(2 * val - self.minEle)
            self.minEle = val
        else:
            self.st.append(val)

    def pop(self) -> None:
        top = self.st.pop()
        if top < self.minEle:
            self.minEle = 2 * self.minEle - top

    def top(self) -> int:
        top = self.st[-1]
        return self.minEle if self.minEle > top else top

    def getMin(self) -> int:
        return self.minEle
