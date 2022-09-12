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