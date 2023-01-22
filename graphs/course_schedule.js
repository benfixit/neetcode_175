/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const courseMap = new Map();
    const visited = new Set();

    for (let item of prerequisites){
        const [course, prerequisite] = item;

        if (!courseMap.has(course)){
            courseMap.set(course, []);
        }
        const existingVal = courseMap.get(course);
        existingVal.push(prerequisite);

        courseMap.set(course, existingVal);
    }

    const dfs = (course) => {
        if (visited.has(course)){
            return false;
        }

        const pre = courseMap.get(course);

        if (!pre){
            return true;
        }

        visited.add(course);

        for (let item of pre){
            if (!dfs(item)){
                return false;
            }
        }

        visited.delete(course);
        courseMap.set(course, undefined);

        return true;
    }

    for (let i = 0; i < numCourses; i++){
        if (courseMap.has(i)){
            if (!dfs(i)){
                return false;
            }
        }
    }

    return true;
 };

const numCourses = 2;
const prerequisites = [[1,0]]

const numCourses2 = 2;
const prerequisites2 = [[1,0], [0, 1]]

const numCourses3 = 2;
const prerequisites3 = [[0, 1], [0, 2], [1,3], [1, 4], [3, 4]]

console.log(canFinish(numCourses, prerequisites))

console.log(canFinish(numCourses2, prerequisites2))

console.log(canFinish(numCourses3, prerequisites3))


