const ksack = () => {
  let load = 0;
  let i = 0;
  let w = 0;

  while (load < capacity && i < 4){
    if (weights[i] <= (capacity - load)) {
      w += values[i];
      load += weights[i];
    } else {
      console.log("i === ", i)
      let r = (capacity - load) / weights[i];
      console.log("r == ", r, capacity, load)
      w += r * values[i];
      load += weights[i]
    }


    ++i;
  }

  console.log(load)

  return w;
}

const items = ["A", "B", "C", "D"]
const values = [50, 140, 60, 60]
const weights = [5, 20, 10, 12]
const capacity = 30;

// 50 + 140 = 190

console.log(ksack(values, weights, capacity))