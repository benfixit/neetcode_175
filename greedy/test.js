const costOfReverse = (bulbs) => {
  let cost = 0;

  for (b of bulbs) {
    if (cost % 2 === 0) {
      b = b;
    } else {
      b = !b;
    }

    if (b % 2 === 1) {
      continue;
    } else {
      cost += 1;
    }
  }

  return cost;
};

console.log(costOfReverse([0, 1, 1]));
