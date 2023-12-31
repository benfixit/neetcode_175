/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    const sortedIntervals = intervals.sort((a, b) => b[0] - a[0]);

    let covered = 0;
    let endInterval = sortedIntervals[sortedIntervals.length - 1];

    for(let i = sortedIntervals.length - 2; i >= 0; i--){
        if (endInterval[0] <= sortedIntervals[i][0] && endInterval[1] >= sortedIntervals[i][1]){
            covered += 1;
            endInterval = [Math.min(endInterval[0], sortedIntervals[i][0]), Math.max(endInterval[1], sortedIntervals[i][1])]
        } else {
            endInterval = sortedIntervals[i];
        }
    }

    return intervals.length - covered;
};

console.log(removeCoveredIntervals([[1,2],[1,4],[3,4]])) // 1
console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]])) // 2
console.log(removeCoveredIntervals([[1,4],[2,3]])) // 1
console.log(removeCoveredIntervals([[3,10],[4,10],[5,11]])) // 2
console.log(removeCoveredIntervals([[0,10],[5,12]])) // 2

// [[3,4],[1,4],[1,2]]