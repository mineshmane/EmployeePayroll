// async await
const multilyWithAwait = (p1, p2) => {
    console.log(p1, p2);

    setTimeout(() => {

    }, 5000)

}

const addmoneyWithAWait = async (r, s) => {

    const result = await multilyWithAwait(r, s)
    console.log(" result is ", result);

    return result

}



const er=addmoneyWithAWait(1, 5)
console.log(er);



// promises
//pending sttae
// resiolve or reject

// const addmoneyWithPromise = (p, q) => {

//     const c = p + q

//     return new Promise((resolve, reject) => {
//         if (c >= 4) {
//             let res = {
//                 data: c,
//                 msg: 'excuted succesfully'
//             }
//             resolve(res)
//         } else {
//             const message = "addition is not big that 4"
//             reject(message)
//         }

//     })

// }

// const multiplyWithPromise = (a, b) => {

//     addmoneyWithPromise(a, b).then((response) => {
//         console.log(response);
//         const d = a * b * response.data
//         console.log("print d", d);
//         // p
//     }).catch((error) => {
//         console.log(error);
//     }).finally(() => {

//         console.log(" called do this thing");
//     })





// }

// multiplyWithPromise(1, 3)









// callaback

// function addMoney(cb) {
//     console.log("this is add money");
//     const st = "this is add money"

//     cb(st)

// }



// function multiply(param1) {
//     console.log(param1);
//     console.log("this is multiplication");

// }

// addMoney(multiply)
