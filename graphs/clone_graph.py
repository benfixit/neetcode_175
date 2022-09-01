# Q:200: https://leetcode.com/problems/number-of-islands/

from index import Node

class Solution:
    def cloneGraph(self, node: Node) -> Node:
        if not node:
            return None

        oldToNew = {}

        def dfs(currNode: Node):
            if currNode in oldToNew:
                return oldToNew[currNode]

            copyNode = Node(currNode.val)
            oldToNew[currNode] = copyNode

            neighbors = currNode.neighbors

            for neighbor in neighbors:
                copyNode.neighbors.append(dfs(neighbor))

            return copyNode
        
        return dfs(node)
        

c = Solution()

# first test case
adjList1 = [[2,4],[1,3],[2,4],[1,3]]

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)

one.neighbors = [two, four]
two.neighbors = [one, three]
three.neighbors = [two, four]
four.neighbors = [one, three]

output = c.cloneGraph(one)


# second test case
adjList2 = [[]]
one = Node(1)

output = c.cloneGraph(one)


# third test case
adjList2 = []

output = c.cloneGraph(None)

print(output)