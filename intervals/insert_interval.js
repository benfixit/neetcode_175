// Q:57 https://leetcode.com/problems/insert-interval/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    const [newStart, newEnd] = newInterval;

    if (newEnd < currentStart) {
      result.push(newInterval);
      return [...result, ...intervals.slice(i)];
    } else if (currentEnd < newStart) {
      result.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(currentStart, newStart),
        Math.max(currentEnd, newEnd),
      ];
    }
  }

  result.push(newInterval);

  return result;
};
