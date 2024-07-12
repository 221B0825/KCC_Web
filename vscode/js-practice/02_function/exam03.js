//함수의 실행 컨택스트
// Lexical Scope : 선언된 위치가 상위 스코프를 결정한다. => JavaScript
// Dynamic Scope : 실행한 위치가 상위 스코프를 결정한다.

let var1 = 10;

function func() {
  let var2 = 20;
  console.log(var1);
}

// func();

// let value = "value1";

// function printFunction() {
//   let value = "value2";

//   function printValue() {
//     return value;
//   }

//   console.log(printValue());
// }

// printFunction();

//-------------------------------
let value = "value1";

function printValue() {
  return value;
}

function printFunction(func) {
  let value = "value2";

  console.log(func());
}

printFunction(printValue);
//-------------------------------
var numberThree = 3;

function functionOne() {
  var numberThree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne();
//-------------------------------
// var는 같은 이름으로 사용한다면 재할당이 됨
// var i = 999;

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// let은 for문 안의 let i 와 밖의 i를 구분함 스코프가 그렇게 되어있음.
let i = 999;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
//------------------------------
// 함수는 또 다름. 실행 컨택스트의 내용이 var이라도 외부의 var3에 영향을 미치지 않음.
// 함수 안의 컨택스트는 var이라도 let과 같음. 외부에 영향을 미치지 않음.
var var3 = 100;

function func3() {
  var var3 = 200;
  console.log(var3);
}

func3();
console.log(var3);
//------------------------------
