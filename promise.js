

// async;
// function handler(value) {
//     console.log("Handler received:", value);
// }
// function f1(){
//     console.log("invoke first method");
// }
// function f2(){
//     console.log("invoke second method");
// }
// setTimeout(handler, 2000, "timeout completed");
// setTimeout(() => {
//     console.log("timeout arrow function executed after 1 second");
// }, 1000);
// f1();
// f2();
// // interval
// setInterval(() => {
//     console.log("Interval executed every 3 seconds");
// }, 3000);

// promise
// let promise = new Promise((resolve, reject) => {
//     let success = true; // change to false to test rejection
//     if (success) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });
// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// }).finally(() => {
//     console.log("Promise processing completed.");
// });
// chaining promises
function asyncTas(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
// asyncTas("Task 1 completed", 1000)
//     .then((result) => {
//         console.log(result);
//         return asyncTas("Task 2 completed", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return asyncTas("Task 3 completed", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//     });

    // async/await
    async function executeTasks() {
        try {
            let result1 = await asyncTas("Async Task 1 completed", 1000);
            console.log(result1);
            let result2 = await asyncTas("Async Task 2 completed", 1000);
            console.log(result2);
            let result3 = await asyncTas("Async Task 3 completed", 1000);
            console.log(result3);
        } catch (error) {
            console.error("Error:", error);
        }finally {
            console.log("All async/await tasks completed.");
        }
    }
//    executeTasks();
