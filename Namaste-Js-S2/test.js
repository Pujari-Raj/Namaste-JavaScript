// S2-Ep-1

// call-back fucntion
console.log("Start");

setTimeout(() => {
  console.log("Namaste!!");
}, 1000);

console.log("End!!");

// o/p
// Start
// End!!
// Namaste!!

//cart

// const cart = ["oneplus-7T", "backcase"];

/* Steps to place an order
    1. Create Order
    2.  Proceed to Payment
*/

// it would call API's something like this
// api.CreateOrder();
// api.proceedToPayment();

// api.CreateOrder(cart, function () {
//   api.proceedToPayment();
// });

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary();
//   });
// });

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

// Episode-2 Promises

// we have e-commerce app and we have a cart functionality inside it
const cartItems = ["shoes", "pants", "kurta"];

// createOrder function
// const orderId = createOrder(cartItems);
// proceedToPayment(orderId);

// // callback createOrder function has proceedToPayment function as a callback
// createOrder(cart, function () {
//   proceedToPayment(orderId);
// });

const cart = ["shoes", "pants", "kurta"];
// const promiseRef = createOrder(cart); // {data: undefined}

/* promiseRef is a promise which has access to `then () method of promise`
 Initially promise data will be undefined, so function inside then() won't trigger.
 After a while, when it finish its execution  and when promiseRef gets the data then automatically the function inside then() gets triggered.
*/

// consuming the promise
// promiseRef.then(function () {
//   proceedToPayment(orderId);
// });

// let's take example of calling an API and getting data from it
const URL = "https://api.github.com/users/Pujari-Raj";
const user = fetch(URL);
// after getting response , you cannot edit user details, bcz promise is "immutable"

console.log(user);
// consume the promise and get the data
user.then(function (data) {
  console.log(data);
});

// user.then(resp => {
//   if (resp.ok) {
//     return resp.json()
//   }else{
//     throw new Error('Network response was not ok ' + resp.status)
//   }
// })
// .then(function(userdata){
//   console.log(userdata);
// })
// .catch( function(error) {
//   console.error(error);
// })

// And this is how Promise is used. It guarantees that it could be resolved only once, either it could be `success` or `failure`

/*
Promise State:- 
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: it means that the operation was completed successfully.
rejected:it means  that the operation failed.
*/

/**
 * 💡 Promise Objects are immutable.
 *
 */

/* NOTE:
 1. As we have discussed before `promise` object has 3 properties.
 `prototype`, `promiseState` & `promiseResult`
 2. `promiseResult` is the same data which we talked earlier as the returned data from APIS & initially `promiseResult` is `undefined`
 3. `promiseResult` will store data returned from API call
 4. `promiseState` will tell us in which state the promise is currently in, initially it will be in `pending` state and later it will become `fulfilled` or rejected depending on the availability of data.
*/

/**
 * Working of above code
 * 1. In above code snippet, `fetch` makes API call and return a `promise` instantly which is in `Pending` state and JavaScript doesn't wait to get it `fulfilled`
 And in next line it consoles out the `pending promise`.
 2. NOTE: chrome browser has some in-consistency, the moment console happens it shows in pending state but if you will expand that it will show fulfilled because chrome updated the log when promise get fulfilled.
 3. Once fulfilled, data is available in promiseResult and this data is not directly accessible to the external world. This data is in readable stream format and there is a way to extract it.
 */

// Callback Hell Example
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInf) {
//     showOrderSummary(paymentInf, function (balance) {
//       updateWalletBalance(balance);
//     });
//   });
// });

// And now above code is expanding horizontally and this is called pyramid of doom. Callback hell is hard to maintain.We can use Promise to fix this issue too using `Promise Chaining`.

// Example of a Promise Chaining
// createOrder(cart)
// .then(function (orderId) {
// return proceedToPayment(orderId);
// })
// .then(function (paymentInf) {
// return showOrderSummary(paymentInf);
// })
// .then(function (balance) {
// return updateWalletBalance(balance);
// });

// ⚠️Common Mistake - We forget to return promise in Promise Chaining.
// The idea is promise data returned can be used in the next promise object in the promise chain and so on. We are passing the promise data down to the promise chain and we need return keyword for that to happen.

// createOrder(cart)
// .then(function (orderId) {
// return proceedToPayment(orderId);
// })
// .then(function (paymentInf) {
// return showOrderSummary(paymentInf);
// })
// .then(function (balance) {
// return updateWalletBalance(balance);
// });