//Q:225 - https://leetcode.com/problems/implement-stack-using-queues/

// Implementation with two queues
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x);
    this.queue2 = [...this.queue1];
    this.queue2.reverse();
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const value = this.queue2.shift();
    this.queue1 = [...this.queue2];
    this.queue1.reverse();
    return value;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue2[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    console.log(this.queue1, this.queue2)
    return this.queue2.length === 0;
};

// Implementation with one queue
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let queueLen = this.queue.length;

    while (queueLen > 1){
        const value = this.queue.shift();
        this.queue.push(value);

        queueLen -= 1;
    }

    console.log(this.queue);
    
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};

var obj = new MyStack();
obj.push(1);
obj.push(2);

console.log(obj.top());
console.log(obj.pop());
console.log(obj.empty());