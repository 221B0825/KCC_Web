/**
 * 인스턴스 __proto__ 변경
 * 인스턴스 : 객체가 생성된 상태.
 */

function Person(name, year) {
  this.name = name;
  this.year = year;
}

Person.prototype.sayHello = function () {
  return `${this.name} : HELLO`;
};

function YoungPerson(name, year) {
  this.name = name;
  this.year = year;

  this.run = function () {
    return `${name} : RUN`;
  };
}

const child1 = new Person("가나다", 2005);
const child2 = new YoungPerson("마바사", 2004);

console.log(child1.__proto__);
console.log(child1.__proto__ === Person.prototype);

console.log(child1.sayHello());
console.log(child2.run());

// child2의 __proto__ 가 Person.prototype을 가리키도록
// child2.__proto__ = Person.prototype;
Object.setPrototypeOf(child2, Person.prototype);

console.log(child2.sayHello());
console.log(child2.run());

//---------------------------------

/**
 * 함수의 prototype을 변경
 */
YoungPerson.prototype = Person.prototype;

const child3 = new YoungPerson("child3", 2007);

console.log(Object.getPrototypeOf(child3) === YoungPerson.prototype);
console.log(Object.getPrototypeOf(child3) === Person.prototype);
console.log(YoungPerson.prototype === Person.prototype);
console.log(child3.sayHello());
