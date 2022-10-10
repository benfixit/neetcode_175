// Q: 973 - https://leetcode.com/problems/k-closest-points-to-origin/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    const heap = new MaxPriorityQueue();
    
    points.forEach(point => {
        const [x, y] = point;
        const sqrt = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        
        heap.enqueue(point, sqrt);
    });
    
    while(heap.size() > k){
        heap.dequeue();
    }
    
    return heap.toArray().map(item => item.element);
};