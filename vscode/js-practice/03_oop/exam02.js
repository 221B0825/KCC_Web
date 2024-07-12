/**
 * 생성자 함수를 이용한 객체 생성 => 다수의 객체를 생성하기 위해서
 */

function Student(name, kor, eng, math) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.math = math;

  this.getSum = function () {
    return this.kor + this.eng + this.math;
  };

  this.getAverage = function () {
    return this.getSum() / 3;
  };

  this.toString = function () {
    return this.name + " " + this.getSum() + " " + this.getAverage();
  };
}

// 객체 생성
let students = [];
students.push(new Student("홍길동", 80, 70, 60));
students.push(new Student("김길동", 90, 80, 80));

for (let i in students) {
  console.log(students[i].toString());
}

// 퀴즈> Rectangle 생성자 함수를 만들고 사각형 넓이를 구하여 보자

function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.getArea = function () {
    return this.width * this.height;
  };
}

let rect = new Rectangle(5, 10);
console.log(rect.getArea());
