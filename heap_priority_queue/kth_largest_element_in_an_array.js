// Q: 215 - https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const heap = new MinPriorityQueue();
    
    nums.forEach(num => heap.enqueue(num));
    
    while(heap.size() > k){
        heap.dequeue();
    }
    
    return heap.front().element;
};