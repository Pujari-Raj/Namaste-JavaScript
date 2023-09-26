console.log("start");

setTimeout(function cback() {
  console.log("callback");
}, 0);

console.log("end");

let startdate = new Date().getTime();
let enddate = startdate;

// while (enddate < startdate + 10000) {
//     enddate = new Date().getTime();
// }

console.log("while died!!");

//ep-18

const radiusArr = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

// const calculate = function (radiusArr, operation) {
//     const output = []

//     for (let i = 0; i < radiusArr.length; i++) {
//         output.push(operation(radiusArr[i]))
//     }
//     return output;
// }

Array.prototype.calculate = function (operation) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(operation(this[i]));
  }
  return output;
};

// console.log(calculate(radiusArr, area));
// console.log(calculate(radiusArr, circumference));
console.log(radiusArr.map(area));
console.log(radiusArr.calculate(area));

const users = [
  { firstName: "Raj", lastName: "Pujari", age: 23 },
  { firstName: "Abhi", lastName: "Kumar", age: 27 },
  { firstName: "Ankit", lastName: "Pandey", age: 25 },
  { firstName: "Ravi", lastName: "Ashwin", age: 50 },
];

// function chaining
const output = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);
console.log(output); // ["Raj", "Abhi", "Ankit"]
// Homework challenge: Implement the same logic using reduce
const outputs = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(outputs); // ["Raj", "Abhi", "Ankit"]
