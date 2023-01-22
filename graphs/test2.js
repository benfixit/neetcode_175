/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    // Solution: rep graph as adj list. Do dfs in a for loop so that I can cover the whole graph. Time O(V + E), Space: O(V + E)

    const adjList = new Map();
    const seenSet = new Set();
    const seenCycle = new Set();
    const resultList = [];

    // Edge case
    // if(numCourses === 1 && prerequisites.length === 0) return [0];

    for (let i = 0; i < numCourses; i++){
        adjList.set(i, []);
    }

    // Populate our adjList to rep Graph
    for( const [crs, pre] of prerequisites){
        let existingVal = adjList.get(crs);
        existingVal = [ ...existingVal, pre];

        adjList.set(crs, existingVal);
    }

    const dfs = (crs) => {
        // Handle base case(s)
        if(seenCycle.has(crs)) return false;
        if (seenSet.has(crs)) return true;

        // Recursion
        seenCycle.add(crs);

        for(let preReq of adjList.get(crs)){
            if(!dfs(preReq)) return false;
        }

        seenCycle.delete(crs);
        seenSet.add(crs);
        resultList.push(crs);
        return true;
    };

    for (let i = 0; i < numCourses; i++){
        if(!dfs(i)) return [];
    }

    return resultList;
};

const numCourses = 2, prerequisites = [[1,0]];
const numCourses2 = 4, prerequisites2 = [[1,0],[2,0],[3,1],[3,2]]
const numCourses3 = 1, prerequisites3 = []

console.log(findOrder(numCourses, prerequisites))
console.log(findOrder(numCourses2, prerequisites2))
console.log(findOrder(numCourses3, prerequisites3))