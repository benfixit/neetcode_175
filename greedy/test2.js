const highestProduct = (nums) => {
  const sorted = nums.sort((a, b) => a - b);

  console.log(sorted);

  const highest =
    sorted[nums.length - 1] * sorted[nums.length - 2] * sorted[nums.length - 3];

  const lowest = sorted[0] * sorted[1] * sorted[nums.length - 1];

  console.log(lowest, highest);

  return Math.max(lowest, highest);
};

console.log(highestProduct([1, 2, 1, -5, -4, -2, 1, 4, 10]));
