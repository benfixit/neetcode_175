// Q: 273 - https://leetcode.com/problems/integer-to-english-words/

/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
    let output = "";

    const units = new Map([
        [0, "Zero"],
        [1, "One"],
        [2, "Two"],
        [3, "Three"],
        [4, "Four"],
        [5, "Five"],
        [6, "Six"],
        [7, "Seven"],
        [8, "Eight"],
        [9, "Nine"]
    ]);

    const tens = new Map([
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
        [90, "Ninety"]
    ])
    
    const hundredths = new Map([
        [100, "Hundred"],
        [1000, "Thousand"],
        [1000000, "Million"],
        [1000000000, "Billion"]
    ]);

    const combined = Array.from([...units.entries(), ...tens.entries(), ...hundredths.entries()]).reverse();

    if (num === 0){
        return units.get(0)
    }
    
    for (let [numKey, numText] of combined) {
        let dividend = Math.floor(num / numKey);
        
        if (dividend > 0) {
          let strs = "";

          if (dividend < 10){
            if (num > 99){
                strs = `${units.get(dividend)} ${numText} `
            } else {
                strs = numText + " ";
            }
          } else {

            for (let [innerNumKey, innerNumText] of combined){
                const newDividend = Math.floor(dividend / innerNumKey);

                if (newDividend > 0){
                    if (dividend > 99){
                        strs += `${units.get(newDividend)} ${innerNumText} `
                    } else {
                        strs += innerNumText + " ";
                    }
                }

                dividend = dividend % innerNumKey

            }
            strs += `${numText} `;
          }
          
          output += strs
        }
        
        num = num % numKey        
    }
    
    return output.trim();

};

console.log(numberToWords(234))
console.log(numberToWords(123))
console.log(numberToWords(1234))
console.log(numberToWords(12345))
console.log("===================")
console.log(numberToWords(9000))
console.log(numberToWords(94000))
console.log(numberToWords(900000))
console.log(numberToWords(100000))
console.log("====================")
console.log(numberToWords(1234567))
console.log(numberToWords(12345670005))
console.log(numberToWords(0))
// One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven

