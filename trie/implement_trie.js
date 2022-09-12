// Q:208 https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode {
    constructor(){
        this.children = new Map() 
        this.endWord = false;
    }
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;
    
    for (let ch of word){
        if (!current.children.has(ch)) {
            current.children.set(ch, new TrieNode())
        }
        current = current.children.get(ch)
    }
    
    current.endWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root;
    
    for (let ch of word){
        if (!current.children.has(ch)){
            return false;
        }
        
        current = current.children.get(ch)
    }
    
    return current.endWord;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root;
    
    for (let ch of prefix) {
        if (!current.children.has(ch)){
            return false;
        }
        
        current = current.children.get(ch);
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */