async function resolveAfter(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Resolved")
        }, 2000)
    })
}

// const result = resolveAfter().then(res => console.log(res)).catch(err => console.log("Error == ", err));

// console.log("Pissed")

// async function test() {
//     try {
//         const result = await resolveAfter().catch(e => console.log("eee=== ", e))
//         console.log("Pissed here")
//     } catch (e) {
//         console.log(e)
//     }
// }

// test()

// console.log("RESULT == ", result)

const test = async () => {
    console.log("Start");
    const result = await resolveAfter();
    console.log("Pissed")

    console.log("RESULT == ", result)
}

test();