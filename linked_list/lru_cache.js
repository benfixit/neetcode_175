class Node {
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.left = Node(0, 0)
    this.right = Node(0, 0)

    this.left.next = this.right;
    this.right.previous = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)){
        const node = this.cache.get(key)
        this.remove(node);
        this.insert(node)
        return node.value
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)){
        this.remove(this.cache.get(key))
    }

    const node = new Node(key, value);
    this.cache.set(key, node);
    this.insert(node)

    if (this.cache.size > this.capacity){
        const lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key)
    }
};

LRUCache.prototype.remove = function(node) {
    const previous = node.previous, next = node.next;
    previous.next = next;
    next.previous = previous;
}

LRUCache.prototype.insert = function(node) {
    const previous = this.right.previous, next = this.right;
    previous.next = node;
    node.previous = previous
    node.next = this.right;
    this.right.previous = node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */