# Q:981 - https://leetcode.com/problems/time-based-key-value-store/

class TimeMap:

    def __init__(self):
        self.store = {}
        pass
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = []
        self.store[key].append((value, timestamp))


    def get(self, key: str, timestamp: int) -> str:
        result = ""
        values = self.store.get(key, [])
        left, right = 0, len(values) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if values[mid][1] > timestamp:
                right = mid - 1
            elif values[mid][1] < timestamp:
                result = values[mid][0]
                left = mid + 1
            else:
                result = values[mid][0]
                break            
        
        return result


c = TimeMap()

c.set("foo", "bar", 1)
print(c.get("foo", 1))
print(c.get("foo", 3))

c.set("foo", "bar2", 4)
print(c.get("foo", 4))
print(c.get("foo", 5))



"""
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]
"""

