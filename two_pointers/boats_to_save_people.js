//Q:881 - https://leetcode.com/problems/boats-to-save-people/
/**
* @param {number[]} people
* @param {number} limit
* @return {number}
*/
var numRescueBoats = function(people, limit) {
    const sortedPeople = people.sort((a, b) => a - b);
    let boat = 0;
 
 
    let i = 0, j = sortedPeople.length - 1;
 
 
    while (i <= j) {
        const lowWeight = sortedPeople[i];
        const highWeight = sortedPeople[j];
 
 
        if (lowWeight + highWeight <= limit){
            i += 1;
            j -= 1;
        } else {
            j -= 1;
        }
        boat += 1;
    }
 
    return boat;
 };
 