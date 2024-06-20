/** 📒 async function always returns a promise, even if we return a simple string like below function, even if we don't attach promise async keyword will wrap it under Promise and then return it. 
 */

async function getData() {
  return "Namaste JavaScript";
}

// const dataPromise = getData();
// console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}

// to extract the data from promise we have to use promise (1 way of extracting)
// dataPromise.then((resp) => console.log(resp)); // Namaste JavaScript

//  example where async function is returning a Promise

const p = new Promise((resolve, reject) => {
    resolve('Promise resolved value!!');
})

async function getData() {
    return p;
}

const dataPromise = getData();
console.log(dataPromise); 

dataPromise.then((resp) => console.log(resp)); 

// using async-await with promises

// async function handlePromise() {
//     const data = await p;
//     console.log(data);
// }

// handlePromise();