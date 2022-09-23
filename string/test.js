/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
    let output = "";
    
    const map = new Map([
        [1, "One"],
        [2, "Two"],
        [3, "Three"],
        [4, "Four"],
        [5, "Five"],
        [6, "Six"],
        [7, "Seven"],
        [8, "Eight"],
        [9, "Nine"],
        [10, "Ten"],
        [11, "Eleven"],
        [12, "Twelve"],
        [13, "Thirteen"],
        [14, "Fourteen"],
        [15, "Fifteen"],
        [16, "Sixteen"],
        [17, "Seventeen"],
        [18, "Eighteen"],
        [19, "Nineteen"],
        [20, "Twenty"],
        [30, "Thirty"],
        [40, "Forty"],
        [50, "Fifty"],
        [60, "Sixty"],
        [70, "Seventy"],
        [80, "Eighty"],
        [90, "Ninety"],
        [100, "Hundred"],
        [1000, "Thousand"],
        [1000000, "Million"],
    ]);
    
    for (let [numKey, numText] of Array.from(map.entries()).reverse()) {
        const dividend = Math.floor(num / numKey);
        
        if (dividend > 0) {
            const strs = `${map.get(numKey)} ${numText} `;
            output += strs
        }
        
        num = num % numKey
        
    }
    
    return output;

};


console.log(numberToWords(123))