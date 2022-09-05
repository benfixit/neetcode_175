// Q:347 - https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {},
    output = [];

  for (let num of nums) {
    if (!map.hasOwnProperty(num)) {
      map[num] = 0;
    }

    map[num] += 1;
  }

  const bucket = [];

  for (let key in map) {
    const count = map[key];
    const index = count - 1;

    if (!bucket[index]) {
      bucket[index] = [];
    }

    bucket[index].push(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    const currentBucketItem = bucket[i];

    if (currentBucketItem && currentBucketItem.length) {
      for (let l = 0; l < currentBucketItem.length; l++) {
        output.push(currentBucketItem[l]);

        if (output.length === k) {
          return output;
        }
      }
    }
  }

  return output;
};
