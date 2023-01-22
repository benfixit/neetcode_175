// Q:841: https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {  
    // initialize the queue with keys in room zero
    const queue = [0];
    const visitedRooms = new Set([0]);
  
    while(queue.length){
        const current = queue.shift();
        
  
        const keysInRoom = rooms[current];
  
        for (let key of keysInRoom){
            if (!visitedRooms.has(key)){
                queue.push(key);
                visitedRooms.add(key);
            }
        }

    }
  
    return visitedRooms.size === rooms.length;
 };