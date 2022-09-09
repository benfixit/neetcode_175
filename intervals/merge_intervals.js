// Q:56 https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // sort the intervals by their start time
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [],
    tempInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    const [tempStart, tempEnd] = tempInterval;

    if (tempEnd < currentStart) {
      result.push(tempInterval);
      tempInterval = intervals[i];
    } else {
      tempInterval = [
        Math.min(tempStart, currentStart),
        Math.max(tempEnd, currentEnd),
      ];
    }
  }

  result.push(tempInterval);

  return result;
};
