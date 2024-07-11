//선언적 함수
function add(a, b) {
  let sum = a + b;
  return sum;
}

// 익명 함수
// 변수에 함수 할당 가능하며, 함수처럼 호출해서 사용 가능함
let add2 = function (a, b) {
  let sum = a + b;
  return sum;
};

console.log(add2(100, 200));
console.log(add(10, 20));

// add2   VS    add2()
let plus = add2; // 함수 : 주소값 할당 => plus도 함수
let plus2 = add2(20, 30); // 함수를 호출 => 리턴값을 전달

console.log(plus(50, 100));
console.log(plus2);

// 함수의 파라미터에 함수를 전달할 수 있다.(콜백함수)
let foo = function (func) {
  //func -> 콜백함수
  if (typeof func == "function") {
    func();
  }
};

// 파라미터로 익명 함수 전달 -> 실행 완료
foo(function () {
  console.log("function parameter");
});

// 함수가 함수를 리턴할 수 있다.
// 함수를 리턴하는 예제와 함께 리턴된 함수를 호출해 보자.

let returnFunction = function (func) {
  if (typeof func == "function") {
    return func;
  }
};

let testReturn = returnFunction(function () {
  console.log("return function");
});
testReturn();

//-------------------------------
let foo2 = function () {
  return function () {
    console.log("return function");
  };
};

let box = foo2();
box();

// 함수의 파라미터에 (plus or minus) 호출
// plus => plus 기능을 하는 함수를 리턴
// minus => minus 기능을 하는 함수를 리턴
// 리턴 받은 해당 함수를 호출해서 사용해 보자.

let calcul = function (input) {
  if (input == "plus") {
    return function (a, b) {
      return a + b;
    };
  } else if (input == "minus") {
    return function (a, b) {
      return a - b;
    };
  }
};

let callCalcul = calcul("plus");
console.log(callCalcul(2, 3));
//--------------------------
function call(mode) {
  let obj = {
    plus: function (left, right) {
      return left + right;
    },
    minus: function (left, right) {
      return left - right;
    },
  };

  return obj[mode];
}

let func2 = call("minus");
console.log(func2(50, 30));

//콜백함수(함수의 파라미터에 전달되는 함수)
function sortDescending(a, b) {
  return b - a;
  // if (a > b) {
  //   return -1;
  // } else if (a < b) {
  //   return 1;
  // } else {
  //   return 0;
  // }
}

let arr = [1, 3, 4, 5, 6, 2];
console.log(arr.sort(sortDescending));

// 즉시 실행 함수 : 함수 정의와 동시에 호출
(function (a, b) {
  console.log(a + b);
})(10, 5);
