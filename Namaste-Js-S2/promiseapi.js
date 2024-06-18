// Promises methods

//1.Promise.all()

// creating dummy promises, in real-word we need to make API Calls

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise1 success");
        reject("Promise1 failed");

  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise2 success");
    reject("Promise2 failed");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise3 success")
    reject("Promise3 failed");

  }, 2000);
});

// .any([]) , will returns any one promise that is settled
Promise.any([p1, p2, p3]).then(function (resp) {
    console.log(resp);
}).catch((err) => {
    console.error(err);
    // to show the error we have to use below line
    // console.log(err.errors);
})

// .race([]) , will returns an array [] of any one promis is settled
// Promise.race([p1, p2, p3]).then(function (resp) {
//     console.log(resp);
// }).catch((err) => {
//     console.error(err);
// })

// .all() , will return a array if all promises settled
// Promise.all([p1, p2, p3]).then(function (resp) {
//     console.log(resp);
// }).catch((err) => {
//     console.error(err);
// })

// .allSettled([]) , will returns an settled promise array of objects [{...}]
// Promise.allSettled([p1, p2, p3]).then(function (resp) {
//     console.log(resp);
// }).catch((err) => {
//     console.error(err);
// })




