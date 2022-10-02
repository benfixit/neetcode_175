// Q:211 - https://leetcode.com/problems/design-add-and-search-words-data-structure/

var WordNode = function(){
    this.children = new Map();
    this.endWord = false;
}

var WordDictionary = function() {
    this.root = new WordNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root;
    
    for (let ch of word){
        if (!current.children.has(ch)){
            current.children.set(ch, new WordNode())
        }
        
        current = current.children.get(ch)
    }
    
    current.endWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
 WordDictionary.prototype.search = function(word) {
    const dfs = (index, current) => {
        //let current = root;

        for (let i = index; i < word.length; i++){
            const ch = word[i];

            if (ch === "."){
                for(let child of current.children.values()){
                    if (dfs(i + 1, child)){
                        return true
                    }
                }
                return false;
            } else {
                if(!current.children.has(ch)){
                    return false;
                }
    
                current = current.children.get(ch)
            }
        }

        return current.endWord;
    }

    return dfs(0, this.root)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * ["WordDictionary","addWord","addWord","addWord","addWord","search","search","addWord","search","search","search","search","search","search"]
[[],["at"],["and"],["an"],["add"],
["a"],[".at"],
["bat"],
[".at"],["an."],["a.d."],["b."],["a.d"],["."]]


[null,null,null,null,null,false,false,null,true,true,false,false,true,false]
 */

const dict = new WordDictionary();
dict.addWord("at")
dict.addWord("and")
dict.addWord("an")
dict.addWord("add")

console.log("a == ", dict.search("a")) //false
console.log(".at == ", dict.search(".at")) //false

dict.addWord("bat")

console.log(".at == ", dict.search(".at")) // true
console.log("an. == ", dict.search("an.")) // true
console.log("a.d. == ", dict.search("a.d.")) // false
console.log("b. == ", dict.search("b.")) // false
console.log("a.d == ", dict.search("a.d")) // true
console.log(". == ", dict.search(".")) // false
