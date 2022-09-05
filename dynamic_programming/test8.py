from typing import List

def canConstruct(target: str, wordBank: List[str]):
    def dfs(currentTarget: str, wordList: List[str], memo = {}):
        if currentTarget in memo:
            return memo[currentTarget]

        if currentTarget == "":
            return True
    
        for word in wordBank:
            if currentTarget.startswith(word):
                newWord = currentTarget[len(word):]
                wordList.append(word)

                if dfs(newWord, wordList) == True:
                    memo[newWord] = True
                    return True
                
                wordList.pop()

        memo[currentTarget] = False
        return False

    return dfs(target, [])

print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) #true
# print(canConstruct("", ["cat", "dog", "mouse"])) #true
# print(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) #false
# print(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) #true
# print(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])) #false


