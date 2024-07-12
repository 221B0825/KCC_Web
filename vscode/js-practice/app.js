// var num1 = 1;
// var num2 = 2;

// var num1 = 101;
// var num2;

// console.log("\n");
// console.log(num1, num2);

// var num1 = 1;

// if (true) {
//   var num1 = 101;
// }

// console.log(num1);

console.log("\n");

// console.log(num);

// var num = 123;

// console.log(num);

// const num = 1;

var x = "global";

function foo() {
  var x = "local";
  console.log(x);
}

foo();

console.log(x);
