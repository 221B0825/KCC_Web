/**
 * Prototype
 *
 */

// __proto__ 모든 객체에 존재하는 프로퍼티

// const testObj = {};
// // console.log(testObj.__proto__);

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.dir(IdolModel.prototype, {
  showHidden: true,
});

console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

//console.log(testObj.__proto__ === Object.prototype);
// 이게 호출이 됨. 이건 해당하는 toString 메소드가... Object.prototype.toString() 여기 있기 때문임
console.log(yuJin.toString());
// // 왜냐하면 아이돌 모델의 프로토는 func의 프로토타입을 가리키는데
console.log(IdolModel.__proto__ === Function.prototype);
console.log("--------------------");
// // 그 func의 vmfhxhsms object의 proto를 가지기 때문임
// console.log(Function.prototype.__proto__ === Object.prototype);

// console.log(IdolModel.prototype.__proto__ === Object.prototype);

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name} : HELLO`;
  };
}

const person1 = new Person("가나다", 2003);
const person2 = new Person("마바사", 2002);

console.log(person1.sayHello());
// 각각 만들어진 함수라 다른 것임
console.log(person1.sayHello() === person2.sayHello());
// hasOwnProperty는 이 객체에만 존재하는 속성인지 판별해줌
console.log(person1.hasOwnProperty("sayHello"));

function Person3(name, year) {
  this.name = name;
  this.year = year;
}

Person3.prototype.sayHello = function () {
  return `${this.name} : HELLO`;
};
const person4 = new Person3("person4", 2003);
const person5 = new Person3("person5", 2002);

console.log(person4.sayHello());
console.log(person5.sayHello());

console.log(person4.sayHello === person5.sayHello);

function Student(name, kor, eng, math) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.math = math;
}

// Student.prototype.getSum = function () {
//   return this.kor + this.eng + this.math;
// };

// Student.prototype.getAverage = function () {
//   return this.getSum() / 3;
// };

// Student.prototype.toString = function () {
//   return this.name + " " + this.getSum() + " " + this.getAverage();
// };

Student.prototype = {
  getSum: function () {
    return this.kor + this.eng + this.math;
  },
  getAverage: function () {
    return this.getSum() / 3;
  },
  toString: function () {
    return this.name + " " + this.getSum() + " " + this.getAverage();
  },
};

const sutdent1 = new Student("student1", 80, 80, 90);
const sutdent2 = new Student("student2", 70, 80, 70);

console.log(sutdent1.toString());
console.log(sutdent2.toString());

console.log(sutdent1.toString === sutdent2.toString);
