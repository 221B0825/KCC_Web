/**
 * 자바스크립트 객체
 * 1) 사용자 정의 객체
 *    1. Object
 *    2. 객체 리터럴
 *    3. 생성자 함수(프로토타입)
 * 2)내장 객체(빌트인 객체)
 *    1. 코아 객체 : string, number, math, array
 *    2. 브라우저 객체 : window, document, history, navigator
 *    3. DOM 객체 : 문서 내 모든 요소 : div, form, p ...
 *
 */

// 1) 사용자 정의 객체
// 1. Object 객체 이용
// - 자바스크립트 객체는 동적으로 프로퍼티를 추가/삭제할 수 있다.

let obj = new Object();
console.log(obj);
obj.name = "홍길동";
obj.age = 20;

console.log(`이름: ${obj.name} 나이: ${obj.age}`);

// 함수도 1급 객체이다.
function add(a, b) {
  let sum = a + b;
  return sum;
}

console.log(typeof add);
console.log(add instanceof Object);

add.result = add(10, 20);
console.log(`결과 : ${add.result}`);

//2. 리터럴 형식으로 객체 사용 => 1개의 객체를 생성해서 사용하는 경우
let obj2 = {
  userName: "김길동",
  age: 30,
  display: function () {
    console.log(this.userName); // -> obj2를 가리킴
  },
};

console.log(`이름: ${obj2.name}`);
obj2.display();

// 퀴즈> 리터럴 형식으로 빈 객체를 생성 후
//   동적 프로퍼티와 함수를 추가 후 호출하는 예제

let americano = {};

americano.name = "아메리카노";
americano.price = 2000;
americano.isHot = false;
americano.order = function () {
  let option = "";
  if (this.isHot) {
    option = "따뜻한";
  } else {
    option = "차가운";
  }
  console.log(`${option} ${this.name}는(은) ${this.price}원 입니다.`);
};

americano.order();

//객체 디스트럭처링 : 객체의 프로퍼티를 풀어서 별개의 변수에 저장하는 방식
let person = {
  first: "홍",
  last: "길동",
};

let { first, last } = person;
console.log(first);
console.log(last);
// const 객체 생성
// 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
// 2) 객체 안의 프로퍼티나 메서드는 변경이 가능하다.

const obj4 = {
  userName: "김길동",
  age: 30,
  display: function () {
    console.log(this.userName);
  },
};

obj4.userName = "조길동";

console.log(obj4.userName);
