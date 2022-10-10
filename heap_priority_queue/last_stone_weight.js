// Q: 1046 - https://leetcode.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    const heap = new MaxPriorityQueue();
    
    stones.forEach(stone => heap.enqueue(stone));
    
    while (heap.size() > 1){
        const heaviest = heap.dequeue();
        const secondHeaviest = heap.dequeue();
    
        const diff = heaviest.element - secondHeaviest.element
        
        if (diff > 0){
            heap.enqueue(diff);
        }
    }
    
    return heap.front()?.element || 0;
};