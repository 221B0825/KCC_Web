/**
 * 상속
 *
 */

class Person {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `${this.name} : HELLO`;
  }
}

class youngPerson extends Person {
  hairColor;

  constructor(name, year, hairColor) {
    super(name, year);
    this.hairColor = hairColor;
  }

  run() {
    return "RUN";
  }

  sayHello() {
    return `${super.sayHello()} || hairColor : ${this.hairColor}`;
  }
}

const child = new youngPerson("child", 2000, "black");
console.log(child);
console.log(child.run());

console.log(child instanceof Person);
console.log(child instanceof youngPerson);

console.log(child.sayHello());
