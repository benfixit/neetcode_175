// Q:554 - https://leetcode.com/problems/brick-wall/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const bricksMap = new Map();
    let minimum = wall.length;
    let max = 0;

    for (let row of wall){
        let edge = 0;
        for (let brick of row){
            edge += brick;
            bricksMap.set(edge, (bricksMap.get(edge) || 0) + 1);
        }
        max = edge;
    }

    for (let [key, value] of bricksMap.entries()){
        if (key !== max){
            const gap = wall.length - value;

            if (gap < minimum){
                minimum = gap;
            }
        }
    }

    return minimum;
};