/**
 * class 기반의 객체지향 프로그래밍
 */

class Person {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

console.log(new Person("행인", 2003));

class Person2 {
  #name;
  #year; // -> private 로 선언한 것

  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set year(year) {
    this.#year = year;
  }

  get year() {
    return this.#year;
  }

  static returnGroupName() {
    return "사람";
  }
}

let child1 = new Person2("아이", 2005);
console.log(child1.name);
// set 메소드 호출되어서 사용됨
child1.name = "홍길동";
console.log(child1.name);
child1.year = 2006;
// 자동으로 get 메소드 호출해서 사용됨
console.log(child1.year);

// static은 클래스 이름으로 접근해서 호출함
console.log(Person2.returnGroupName());

//-----------------------------------------
/**
 * factory contructor
 */

class Person3 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new Person3(object.name, object.year);
  }

  static fromList(list) {
    return new Person3(list[0], list[1]);
  }
}

const child2 = Person3.fromObject({
  name: "child3",
  year: 2005,
});

console.log(child2);

// 리스트로도 전달 가능함
const child4 = Person3.fromList(["child4", 2004]);
console.log(child4);
