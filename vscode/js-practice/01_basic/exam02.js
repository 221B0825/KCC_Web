//주석

/**
 * 
 * 여러 줄 주석
 * 
 */

// 변수 선언, 사용
// var num = 100;
// num = '안녕';
// console.log(num);

// 컴파일 언어 : 데이터형, 문법 => 엄격히 요구
// 인터프리터 언어 : 문법적으로 느슨한 것 요구

// var : 여러 큰 스코프에서 공유하기 위한 최상위 변수 사용
// let : 작은 스코프에서 로컬 변수 사용
// const : 상수값으로 사용

// let a = 10;
// a = "안녕";
// console.log(a);

// 데이터 타입(자료형)
let intNum = 10;
let floatNum = 3.14;

// 정수나 실수 구분하지 않음
// 숫자형(number)
console.log(typeof intNum, typeof floatNum);

// -----------------------------

//따옴표 구분하지 않음
// 문자형(string)
let singleS = 'single';
let doubleS = "double";

console.log(typeof singleS, typeof doubleS);

//------------------------------

/**
 * Template Literal
 *  1. newline -> \n
 *  2. tab -> \t
 *  3. 백슬래쉬 문자열로 표현 -> \\
 */

// const kcc = '가나다\n';
// console.log(kcc);

// const kcc = '가나다\t마바사';
// console.log(kcc);

// const kcc = '가나다\\마바사';
// console.log(kcc);

//-------------------------------
// 강제 문자열 출력 : 백틱 ` 사용
// const kcc = `가나다 \ ^^b "a"`;
// console.log(kcc);

// const groupName = 'kcc';
// console.log(groupName+" 가나다");
// console.log(`${groupName} 마바사`);

//-------------------------------
// 논리형(boolean)
// let boolVar = true;
// console.log(typeof boolVar);

console.log(false); // -> false 출력
console.log(!false); // -> true 출력
console.log(!!false); // -> false 출력
console.log(!!''); // -> false 출력
/**
 * 공백문자도 데이터 타입.
 * 얘를 논리연산자로 변경할 수 있음.
 * 논리연산자로 변환하면 false가 됨.
 * 아무 값도 가지지 않으면 false임.
 */
console.log(!!0); // -> false 출력
console.log(!!undefined); // -> false 출력
console.log(!!null);  // -> false 출력

/**
 * false
 * => string: 빈 문자열
 * => 값이 없는 경우
 * => 0
 */

console.log(!!'0'); // -> 빈 문자열이 아니므로 true 출력
console.log(!!{}); // -> 빈 객체가 아니어서 true 출력
console.log(!![]); // -> 빈 배열이 아니어서 true 출력
//-------------------------------

// undefined
let emptyVar;
console.log(typeof emptyVar);

// null
let nullVar = null;
console.log(typeof nullVar);
// 얘는 object로 타입이 정의되지만, null 타입이 존재함. 얘는 좀 잘못됐음...

// 함수(function)
let fun = function(){};
console.log(typeof fun);

// 객체(object)
let person = {
  name : '가나다',
  age : 20
}

console.log(typeof person);
// 객체 출력법
console.log(person.name);
// 대괄호 사용 방법도 존재
console.log(person['age']);

// 배열(Array)
const kccMember =[
"가나다",
"마바사",
"아자차"
]

console.log(typeof kccMember);
console.log(kccMember);

/**
 * Symbol 타입
 * - 유일무이한 값을 생성할 때
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2); // -> true 출력

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // -> false 출력
