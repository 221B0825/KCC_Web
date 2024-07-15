const books = [
  {
    name: "이것이 자바다",
    price: 30000,
    publisher: "한빛미디어",
  },

  {
    name: "스프링 정석",
    price: 35000,
    publisher: "길벗",
  },

  {
    name: "도커의 완성",
    price: 20000,
    publisher: "이지스퍼블릭",
  },
];

// 이름을 기준으로 오름차순하고 전체 출력
books.sort((a, b) => (a.name > b.name ? 1 : -1));

// forEach
books.forEach((book) => {
  console.log(
    `이름: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`
  );
});

console.log("--------------------------------------\n");

// for ~ in
for (let i in books) {
  let book = books[i];
  console.log(
    `이름: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`
  );
}

console.log("--------------------------------------\n");

// for ~ of
for (const book of books) {
  console.log(
    `이름: ${book.name}, 가격: ${book.price}, 출판사: ${book.publisher}`
  );
}
console.log("--------------------------------------\n");

// filter
numbers = [1, 8, 7, 4, 9];
// 짝수 값만 추출
console.log(numbers.filter((x) => x % 2 === 0));

// find() 처음 짝수 값 추출
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() 처음 짝수 값의 index 추출
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() p: 이전 값, n: 이후 값 => 이전값과 이후 값 계산 , default 값
// p + n, 0 => 전체 합
// 0은 초기 값을 0으로 지정해준 것
console.log(numbers.reduce((p, n) => p + n, 0));

// 퀴즈 > iveMemebers 변수에 있는 모든 스트링 값을 더해 보자.
const iveMembers = [
  {
    name: "안유진",
    year: 2003,
  },
  {
    name: "가을",
    year: 2002,
  },
  {
    name: "레이",
    year: 2004,
  },
  {
    name: "장원영",
    year: 2004,
  },
  {
    name: "리즈",
    year: 2004,
  },
  {
    name: "이서",
    year: 2007,
  },
];

console.log(iveMembers.reduce((p, n) => p + n.name, ""));

console.log(iveMembers.reduce((p, n) => p + n.name.length, 0));
