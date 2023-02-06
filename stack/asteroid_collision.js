//Q:735 - https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++){
        stack.push(asteroids[i]);

        while (stack.length > 1){
            const currentAsteroid = stack.pop();
            const prevAsteroid = stack.pop();

            if (prevAsteroid > 0 && currentAsteroid < 0){
                const absCurrentAsteroid = Math.abs(currentAsteroid);
                const absPrevAsteroid = Math.abs(prevAsteroid);

                if (absCurrentAsteroid > absPrevAsteroid){
                    stack.push(currentAsteroid);
                } else if (absCurrentAsteroid < absPrevAsteroid) {
                    stack.push(prevAsteroid);
                    break;
                } else {
                    break;
                }
            } else {
                stack.push(prevAsteroid);
                stack.push(currentAsteroid);
                break;
            }
        }
                
    }

    return stack;
};

console.log(asteroidCollision([5,10,-5]));

console.log(asteroidCollision([8,-8]));

console.log(asteroidCollision([10,2,-5]));

console.log(asteroidCollision([-2, -1, 1, 2]));

console.log(asteroidCollision([-2, -2, 1, -2]));

console.log(asteroidCollision([1, -2, -2, -2]));