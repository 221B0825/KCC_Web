/**
 * 타입 변환(형변환)
 * 1) 명시적
 * 2) 암묵적
 */

// 명시적
let age = 20;
let stringAge = age.toString();
console.log("age.toString() => "+typeof stringAge);

// 암시적
let test = age + '';
console.log("age + '' => "+typeof test);

// type -> string 유지(+ 연산)
console.log('100'+'2'); // -> 문자열 1002 출력
console.log(typeof('100'+'2')); // -> 문자열 1002 출력

// type -> number로 변환됨
console.log('100'*'2'); // -> 200 출력
console.log(typeof('100'*'2')); // -> 200 출력

// 문자열 => number : eval(), Number(), parseInt(), parseFloat()
let num = '100';
num = eval(num);
let result = num+100;
console.log(result);

let num2 = '100';
num2 = Number(num2);
let result2 = num2+100;
console.log(result2);

let num3 = '100';
num3 = parseInt(num3);
let result3 = num3+100;
console.log(result3);

// parseInt만 가능함 / 변환 가능한 부분까지만 변환 후 계산
let num4 = '100안녕';
num4 = parseInt(num4);
let result4 = num4+100;
console.log(result4);

/**
 * Hoisting(호이스팅)
 * - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 
 */

console.log('=======================')
// 정의하지 않고 출력 / 후 출력 하면 undefined / 가나다 출력됨
// var nameValue;
// console.log(nameValue);
// nameValue = '가나다';
// console.log(nameValue);

// var kim; -> 이게 있는 것처럼 출력됨. 
console.log(kim);
var kim = '김씨'; // undefined 출력

console.log(hong);
let hong = '홍씨'; // 호이스팅이 발생하지만 그렇게 사용하지 않도록 오류 출력
