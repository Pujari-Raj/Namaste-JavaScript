/**
 * CreateOrder
 * ProceedToPayment
 * showOrderSummary
 * updateWallet
 */

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

let walletBalance = 10000;

createOrder(cart)
  .then(function (orderId) {
    console.log('orderid', orderId);
    return orderId;
  })
  .then(function (orderId) {
    return ProceedToPayment(orderId);
  })
  .then(function (paymentDeatils) {
    console.log('paymentDeatils', paymentDeatils);
    const orderId = paymentDeatils.split('-')[1];
    return orderId
  })
  .then(function (orderId, orderStatus=1) {
    return showOrderSummary(orderId ,orderStatus);
  })
  .then(function (orderSummary) {
    console.log('orderSummary', orderSummary);
    return 1;
  })
  .then(function (orderstatus = 1) {
    return updateWallet(orderstatus);
  })
  .then(function (response) {
    console.log(response.message, response.walletBalance);
  })
  .catch(function (error) {
    console.error(error.message);
  });

//
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // createOrder, ValidateCart
    if (!validateCart(cart)) {
      const err = new Error("Cart !!valid");
      reject(err);
    }
    const orderId = "AB-1289";
    if (orderId) {
      resolve(orderId);
    }
  });

  return promise;
}

function validateCart(cart) {
  return true;
}

//
function ProceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve("Payment Success - "+orderId);
    } else {
      reject(reject);
    }
  });
}

// 

function showOrderSummary(orderId, orderStatus) {
    return new Promise((resolve, reject) => {
        if (orderId && orderStatus === 1) {
            resolve('ordered success'+orderId)
        }
        else{
            reject(new Error('Something went wrong'))
        }
    })
}

//
function updateWallet(orderstatus) {
    return new Promise((resolve, reject) => {
        if (orderstatus) {
            let orderAmount = 5500;
            walletBalance = walletBalance - orderAmount;
            resolve({walletBalance, 'message': 'wallet updated'})
        }
        else{
            reject(new Error('Wallet Did not updated'))
        }
    })
}