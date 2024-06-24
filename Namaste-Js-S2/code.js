//Episode-3

const cart = ["shoes", "pants", "kurta"];

// here we're creating function createOrder() for creating the order
const promise = createOrder(cart);
console.log(promise);

/* It prints Promise {<pending>}
 Because above createOrder is going to take some time to get resolved, so pending state. But once the promise is resolved, promise attached `.then` calls the Callback to get executed.
*/
// .then() method will execute when promise is resolved and catch() method will execute when promise is rejected

// promise.then(function (orderId) {
//   console.log("ORDER-ID", orderId);
//   proceedTopayment(orderId);
// })
// .catch(function (error) {
//     console.log(error.message);
// });

// another way of writing promise
// in below code snippet we have to return the thing which we need to pass to next    .then() method  so that we don't fall into promise hell 😫
createOrder(cart)
  .then(function (orderId) {
    console.log("ORDER-ID", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedTopayment(orderId);
  })
  .then(function (paymentDeatils) {
    console.log("paymentDeatils->", paymentDeatils);
  })
  .catch(function (err) {
    /* This catch block is only responsible for handling error from above promise or promises along the
    chain. In our case we have one promise and we encountered error and our catch block here is
    handling that error .*/
    console.log(err.message);
  })

  /* Handling promise error. Below code will be executed in case either one of the above promises is
rejected. But in our case intentionally we are resolving all the promises. Thus, below code will not be
executed. */

  // .catch(function (error) {
  //   console.log(error.message);
  // })
  // //this then function will work no matter whether promise is resolved / rejected
  .then(function (orderId) {
    console.log("no matter what i'll do my work");
  });

// Producer-End
// Here we're Creating a promise (Producer-end), resolve, reject is functions given by js to build promise
function createOrder(cart) {
  const prom = new Promise((resolve, reject) => {
    //createOrder()
    // validateCart ()
    // orderId
    //rejecting promise if cart is !validated , and passing error
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //resolving promise if cart is validated , and passing orderId
    const orderId = "AB2345";
    if (orderId) {
      //   resolve(orderId);
      // making a mock-up of API call and delaying the resolve for 5 secs
      console.log("Order is getting created!!");
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return prom;
}

//
function validateCart(cart) {
  return true;
}

//
function proceedTopayment(orderId) {
  //
  return new Promise((resolve, reject) => {
    resolve("Payment successfull-",orderId);
  });
}
