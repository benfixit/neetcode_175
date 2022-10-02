// removes a word from the trie.
this.remove = function (word) {
    let root = this.root;

    if(!word) return;

    // recursively finds and removes a word
    const removeWord = (node, word) => {

        // check if current node contains the word
        if (node.end && node.getWord() === word) {

            // check and see if node has children
            let hasChildren = Object.keys(node.children).length > 0;

            // if has children we only want to un-flag the end node that marks the end of a word.
            // this way we do not remove words that contain/include supplied word
            if (hasChildren) {
                node.end = false;
            } else {
                // remove word by getting parent and setting children to empty dictionary
                node.parent.children = {};
            }

            return true;
        }

        // recursively remove word from all children
        for (let key in node.children) {
            removeWord(node.children[key], word)
        }

        return false
    };

    // call remove word on root node
    removeWord(root, word);
};


WordDictionary.prototype.search = function(word) {
    const dfs = (node, targetWord, index) => {
        const ch = targetWord[index];

        if (ch === "."){
            for (let child of node.children.values()){
                if (index === targetWord.length - 1 && child.endWord) {
                    return true
                }

                if (dfs(child, targetWord, index + 1)){
                    return true;
                }
            }

        } else {
            node = node.children.get(ch);

            if (node) {
                if (index === targetWord.length - 1 && node.endWord){
                    return true;
                }

                return dfs(node, targetWord, index + 1)
            }

        }

        return false
    }

    return dfs(this.root, word, 0)
};

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