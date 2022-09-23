const currentList = [1, 2, 3, 4, 5]
console.log(currentList)

for (let i = 0; i < currentList.length/2; i++){
  const temp = currentList[i];
  
  console.log(currentList[currentList.length - 1 - i], temp)
  
  currentList[i] = currentList[currentList.length - 1 - i]
  
  currentList[currentList.length - 1 - i] = temp;
}

console.log(currentList)