// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.getArea = () => this.width * this.height;
// }
/**
 * 1. Rectangle 생성자 함수를 class 기반으로 수정
 * 2. 상속을 이용해서 Square 구현(정사각형)
 *
 */

class Rectangle {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }

  getLength() {
    return this.width * 4;
  }
}

const rect1 = new Rectangle(2, 3);
console.log(rect1);

const square1 = new Square(5);
console.log(square1);
console.log(square1.getLength());

let iveMembers = ["유진", "가을", "이서", "원영", "레이"];
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "유진") {
      return `아이브 ${x}`;
    } else {
      return x;
    }
  })
);
