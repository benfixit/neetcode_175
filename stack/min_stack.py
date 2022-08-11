# Q:155 - https://leetcode.com/problems/min-stack/

class MinStack:

    def __init__(self):
        self.stack = list()
        

    def push(self, val: int) -> None:
        if not self.stack:
            self.stack.append((val, val))
        else:
            self.stack.append((val, val) if val < self.getMin() else (val, self.getMin()))        

    def pop(self) -> None:
        self.stack.pop()
        
    def top(self) -> int:
        return self.stack[-1][0] if self.stack else None        

    def getMin(self) -> int:
        return self.stack[-1][1] if self.stack else None


c = MinStack()

print(c.push(-2))
print(c.push(0))
print(c.push(-3))

print(c.getMin())

print(c.pop())
print(c.top())
print(c.getMin())


