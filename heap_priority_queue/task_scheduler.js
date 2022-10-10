// Q: 621 - https://leetcode.com/problems/task-scheduler/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    const map = new Map();
    let time = 0;
    
    tasks.forEach(task => {
        const currentCount = map.get(task) || 0
        map.set(task, currentCount + 1);
    })
    
    const heap = new MaxPriorityQueue();
    
    for(let item of map.values()){
        heap.enqueue(item)
    }
    
    const queue = [];
    
    while (heap.size() || queue.length){
        time += 1;

        if (heap.size() > 0){
            const item = heap.dequeue();
            item.element -= 1;
            
            if (item.element > 0){
                queue.push([item.element, time + n])
            }
        }
        
        if (queue.length > 0){
            let item = queue[0];
            if (item[1] === time){
                item = queue.shift();
                heap.enqueue(item[0]);
            }
        }
    }
    
    return time;
};