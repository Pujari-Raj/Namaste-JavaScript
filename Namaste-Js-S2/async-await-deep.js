const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise--1 resolved value!!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise--2 resolved value!!");
  }, 10000);
});

async function handlePromise() {
  console.log("Hello world");
  //   debugger;
  const data1 = await p1;
  console.log("Namaste JavaScript-1");
  //   debugger;
  console.log(data1);

  const data2 = await p2;
  console.log("Namaste JavaScript-2");
  //   debugger;
  console.log(data2);
}

handlePromise();

console.log("outside async-await");

/* When this function is executed, it will go line by line as JS is synchronous single threaded language. Lets observe what is happening under call-stack. Above you can see we have set the break-points.
*/

/* call stack flow -> handlePromise() is pushed -> It will log `"Hello world` to console ->
and then it prints "outside async-await" because we have await who waits for p1 to complete its promise, Next it sees we have await where promise is suppose to be resolved -> So will it wait for promise to resolve and block call stack? No -> thus handlePromise() execution get suspended and moved out of call stack -> So when JS sees await keyword it suspend the execution offunction till promise is resolved -> So `p` will get resolved after 5 secs so
handlePromise() will be pushed to call-stack again after 5 secs. -> But this time it will
start executing from where it had left. -> Now it will log 'Hello There!' and 'Promise
resolved value!!' -> then it will check whether `p2` is resolved or not -> It will find
since `p2` will take 10 secs to resolve so the same above process will repeat -> execution
will be suspended until promise is resolved.
*/

// 📌 Thus JS is not waiting, call stack is not getting blocked.
/* Moreover in above scenario what if p1 would be taking 10 secs and p2 5 secs -> even
though p2 got resolved earlier but JS is synchronous single threaded language so it will first wait for p1 to be resolved and then will immediately execute all.*/

// Real word Example of using async/await
const url = "https://api.github.com/users/akshaymarch7";

async function handlePromise() {
  // fetch() => Response Object which as body as Readable stream => Response.json() is also a promise which when resolved => value

  try {
      const data = await fetch(url);
    //   console.log(data);
      const res = await data.json();
      console.log(res);
    
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
