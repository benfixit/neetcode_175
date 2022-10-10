// Q: 703 - https://leetcode.com/problems/kth-largest-element-in-a-stream/

/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.heap = new MinPriorityQueue();
    this.k = k;
    
    nums.forEach((num) => this.heap.enqueue(num))
        
    while(this.heap.size() > this.k){
        this.heap.dequeue();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.enqueue(val);
    
    if(this.heap.size() > this.k){
        this.heap.dequeue();
    }
    
    const topItem = this.heap.front()
    
    return topItem.element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */