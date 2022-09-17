[2,2] , [1,0],  2


// [8, 5, 3] sizes

// [8, 0, 0] target = 2 initial amount

// return if num can be calculated from input
 // return false otherwise


// if sum of the initial amounts < target: return false
// if target > max(container): return false


const canFitTargetAmount = (sizes, initialAmounts, target) => {
  let sumOfInitialAmount = 0;
  for (let i = 0; i < initialAmounts.length; i++){
      sumOfInitialAmount += initialAmounts[i];
  }
  
  if (sumOfInitialAmount){
      return false;
  }

  // if target > max(container): return false
  
  
  
  const dfs = (currentAmounts) => {
    if (currentAmounts.include(target)){
        return true;
    }
        
    for (let i = 0; i < currentAmounts.length; i++){
        for (let j = 0; j < currentAmounts.length; j++){
            const newAmounts = transfer(sizes, currentAmounts, i, j)
            
            if (dfs(newAmounts)){
                return true;
            }
        }
    }
    
    return false;
    
    
  }
}


const transfer = (sizes, currentAmounts, sourceIndex, destinationIndex) => {
   return 
}  // returns a *NEW* version of currentAmounts after transfering water from source to destination


