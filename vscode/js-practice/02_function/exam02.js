// 함수를 호출할 때 함수의 파라미터 개수가 일치하지 않아도 오류 X
function add(a, b, c) {
  console.log(a, b, c);
}

add(10);
add(10, 20, 30, 40);

//------------------------------
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 함수 파라미터에 기본값 설정
function calculate(total, tax = 0.1, tip = 0.2) {
  return total + total * tax + total * tip;
}

console.log(calculate(100, 0.5, 0.1));
console.log(calculate(100));

// 화살표 함수
var greeting = function (name) {
  return "Hello " + name;
};

var greeting2 = (name) => {
  return `Hello ${name}`;
};

var greeting3 = (name) => `Hello ${name}`;

console.log(greeting("홍길동"));
console.log(greeting2("김길동"));
console.log(greeting3("박길동"));

function multiply(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}

console.log(multiply(3)(4)(5));

const multiply2 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;

console.log(multiply(6)(7)(8));
