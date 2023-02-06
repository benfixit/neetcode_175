//Q:682 - https://leetcode.com/problems/baseball-game/
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];

    for (let i = 0; i < operations.length; i++){
        const operation = operations[i];

        if (operation === "+") {
            const firstOperand = stack[stack.length - 1];
            const secondOperand = stack[stack.length - 2];

            stack.push(firstOperand + secondOperand);
        } else if (operation === "D") {
            const operand = stack[stack.length - 1];
            stack.push(operand * 2);
        } else if (operation === "C") {
            stack.pop();
        } else {
            stack.push(parseInt(operation));
        }
    }


    return stack.reduce((acc, item) => {
        acc += item;
        return acc;
    }, 0);
};

console.log(calPoints(["5","2","C","D","+"])) //30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])) //27