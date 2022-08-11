# Q:150 - https://leetcode.com/problems/evaluate-reverse-polish-notation/

from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = list()
        operatorSet = set(("+", "-", "*", "/"))

        for item in tokens:
            if item in operatorSet:
                firstOperand = stack.pop()
                secondOperand = stack.pop()

                result = 0

                if item == "+":
                    result = secondOperand + firstOperand
                elif item == "-":
                    result = secondOperand - firstOperand
                elif item == "*":
                    result = secondOperand * firstOperand
                else:
                    result = int(secondOperand / firstOperand)
                
                stack.append(result)
            else:
                stack.append(int(item))



        return stack[0]

c = Solution()

tokens1 = ["4","13","5","/","+"]

tokens2 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

# print(c.evalRPN(tokens1))
print(c.evalRPN(tokens2))