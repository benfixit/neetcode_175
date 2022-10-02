const findBaseEqui = (num, base) => {

    let result = 0;

    while (num > 0) {
        const mod = num % base;

        result = (result * 10) + (mod)

        num = Math.floor(num / base)
    }

    return result;
}

console.log(findBaseEqui(9, 3))