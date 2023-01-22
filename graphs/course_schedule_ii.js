/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const courseMap = new Map();
    const visited = new Set();
    const cycle = new Set();
    const output = [];

    for (let i = 0; i < numCourses; i++){
        courseMap.set(i, [])
    }

    for (let item of prerequisites){
        const [course, prerequisite] = item;

        const existingVal = courseMap.get(course);
        existingVal.push(prerequisite);

        courseMap.set(course, existingVal)
    }

    const dfs = (course) => {
        if (cycle.has(course)){
            return false;
        }

        if (visited.has(course)){
            return true;
        }

        cycle.add(course);

        const pre = courseMap.get(course);

        if (pre){
            for(let item of pre) {
                if (!dfs(item)){
                    return false;
                }
            }
        }

        cycle.delete(course);
        visited.add(course);
        output.push(course);

        return true;
    }


    for (let i = 0; i < numCourses; i++){
        if (courseMap.has(i)){
            if (!dfs(i)){
                return [];
            }
        }
    }

    return output;
};

const numCourses = 2, prerequisites = [[1,0]];
const numCourses2 = 4, prerequisites2 = [[1,0],[2,0],[3,1],[3,2]]
const numCourses3 = 1, prerequisites3 = []

console.log(findOrder(numCourses, prerequisites))
console.log(findOrder(numCourses2, prerequisites2))
console.log(findOrder(numCourses3, prerequisites3))