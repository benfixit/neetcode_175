const findAllSubStrings = (str) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      //   if (i !== j) {
      const newStr = str.slice(i, j + 1);
      console.log("we got here == ", i, j);
      result.push(newStr);
      //   }
    }
  }

  return result;
};

const findAllSubStringsRecursive = (str) => {
    const result = [];

    const dfs = (startIndex, endIndex) => {
        if (startIndex === str.length){
            return;
        }

        for(let i = 0)

        const newStr = str.slice(startIndex, endIndex)

        result.push()
        
    }
}

console.log(findAllSubStrings("babad"));
