/**
 * Array(배열)
 */

let members = ["가", "나", "다", "라", "마", "바"];

console.log(members);

// push() : 데이터 값이 제일 마지막에서 삽입됨
console.log("push(사): " + members.push("사"));
console.log(members);

console.log("----------------------------");
// pop() : 가장 마지막 데이터를 반환, 배열에서 삭제됨
console.log("pop: " + members.pop());
console.log(members);
console.log("----------------------------");
// shift()
console.log("shift: " + members.shift());
console.log(members);

console.log("----------------------------");
// unshift() : 가장 앞에 데이터를 삽입
console.log("unshift: " + members.unshift("아"));
console.log(members);

console.log("----------------------------");
// splice() : startIndex, count
console.log("splice(0,3): " + members.splice(0, 3));
console.log("result members: " + members);

// -----------------------------------------
// 불변성 함수
members = ["가", "나", "다", "라", "마", "바"];
console.log("----------------------------\n");

// concat()
console.log("concat(사): " + members.concat("사"));
console.log(members); // 불변

// slice() : start index, end index
console.log("----------------------------\n");
console.log("slice(0, 4) : 0,1,2,3 => " + members.slice(0, 4));
console.log(members);

console.log("----------------------------\n");
// spread operator
let members2 = [...members];
console.log(members2);

console.log("----------------------------\n");
let members3 = members;
console.log(members3);

// 주소값을 복사해서 준 것: 메모리 주소가 같기 때문임
// 메모리 주소가 같으면, memebers를 수정하면 memebers3도 수정이 반영됨
console.log(members === members3);
// spread 연산자로 값만 같게, 메모리 주소가 다름 : false => 주소값이 다르다는 의미
// 저장공간이 다르다는 건, 별개의 객체
console.log(members === members2);

// spread 활용 1)
let members4 = ["A", "B", ...members, "C", "D"];
console.log(members4);

// spread 활용 2)
let arr = [100, 200, 300];
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...arr));

// join()
console.log(members.join());
console.log(members.join("/"));
console.log(members.join(", "));

console.log("----------------------------\n");

// sort()
console.log(members4.sort());
console.log(members4.reverse());

let numbers = [1, 55, 6, 7, 8, 43, 2];
console.log(numbers);

console.log(
  numbers.sort((a, b) => {
    return b - a;
  })
);
