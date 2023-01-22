// Q:1189 - https://leetcode.com/problems/maximum-number-of-balloons

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const textMap = new Map();
    let minimumChCount = Number.MAX_SAFE_INTEGER;
    const word = "balloon";

    for (let ch of text){
        textMap.set(ch, (textMap.get(ch) || 0) + 1);
    }

    for (let ch of word){
        if (!textMap.has(ch)){
            minimumChCount = 0;
            break;
        }

        let chCount = textMap.get(ch) || 0;

        if (ch === "l" || ch === "o"){
            chCount = Math.floor(chCount / 2);
        }

        if (chCount < minimumChCount){
            minimumChCount = chCount;
        }

    }

    return minimumChCount;
};