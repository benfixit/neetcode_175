# Q:841: https://leetcode.com/problems/keys-and-rooms/

from typing import List

class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = [False] * len(rooms)

        def dfs(room):
            visited[room] = True
            keys = rooms[room]

            for key in keys:
                if not visited[key]:
                    dfs(key)
        
        dfs(0)

        return all(visited)




c = Solution()

rooms1 = [[1],[2],[3],[]]
print(c.canVisitAllRooms(rooms1))

rooms2 = [[1,3],[3,0,1],[2],[0]]
print(c.canVisitAllRooms(rooms2))