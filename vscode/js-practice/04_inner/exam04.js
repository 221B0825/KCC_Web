/**
 * 정규표현식(ReqExp)
 *
 */

//1. 문자열.match(정규표현식) => 매칭된 결과(문자열) 리턴
const result1 = "sports".match(/sp/);
console.log(result1);

console.log("\n---------------------------------------------------\n");

//2. ReqExp.exec('문자열') => 매칭된 결과(문자열) 리턴
const str2 = "fdsffs adsafsweFSp sdfosdfS";
const re2 = /FS/gi; // i: 소대문자 구분 없이, g: 전역검사
let result2 = re2.exec(str2);

while (result2) {
  console.log(result2);
  result2 = re2.exec(str2);
}

console.log("\n---------------------------------------------------\n");

//퀴즈> => July 16 2024 만 출력되도록
const str3 = "This is a data: July 16 2024";
const re3 = /\w*\s\d+\s\d+/;
const result3 = str3.match(re3);
console.log(result3);

console.log("\n---------------------------------------------------\n");

// 퀴즈> 문자열.replace() 사용하여 "sw" => "소프트웨어" 로 변경
const str4 =
  "오늘 우리는 SW 세상에서 살고 있다. sw가 매우 중요한 시기이다. 그래서 SW 열심히 공부하자.";

const re4 = /sw/gi;
const result4 = str4.replace(/sw/gi, "software");
console.log(result4);

console.log("\n---------------------------------------------------\n");

const str5 = "Java--JavaScript";
const re5 = /(\w+)-*(\w+)/;
//$ 그룹, 현재 $2 는 두번 째 그룹인 JavaScript이다.
const result5 = str5.replace(re5, "$2-$1");
console.log(result5);

// 이메일 체크
// 정규표현식.test(문자열) => 해당 문자열이 정규표현식에 매칭 유무(true/false)
// 정상 : dolsam77@nate.com
// 비정상 : 33dolsam77@gmail.com
// 비정상 : dolsam77gamil.com
// 비정상 : dolsam77@nate.comasdf;
console.log("\n---------------------------------------------------\n");
const re6 = /^[a-zA-Z][a-zA-Z0-9]*\@[a-z]*\.(com|net)$/;
const re61 = /^\D\w+@\w+\.\w{2,3}$/gi;
const list = [
  "dolsam77@nate.com",
  "33dolsam77@gmail.com",
  "dolsam77gamil.com",
  "dolsam77@nate.comasdf",
];

for (let i = 0; i < list.length; i++) {
  if (re61.exec(list[i])) {
    console.log(list[i] + " : 정상");
  } else {
    console.log(list[i] + " : 비정상");
  }
}
