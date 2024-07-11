console.log(5==5);
console.log(5 == '5');
console.log(5 === '5');

console.log(0 == ''); // -> true 출력
console.log(true == 1); // -> true 출력

// for ~ in VS for ~ of

const gilDong = {
  name : '홍길동',
  year: 200,
  company : 'KCC'
}

// for ~ in => key
for(let key in gilDong){
  console.log("key : "+key);
  console.log("value : "+gilDong[key]);
}

const kccMember = ['가나다', '마바사', '아자차', '카타파'];
console.log("============");

for(let key in kccMember){
  console.log(`${key} : ${kccMember[key]}`);
}

console.log("============");
for (let value of kccMember){
  console.log(value);
}

console.log('Cat' || 'Dog'); // -> Cat 값이 존재하기 때문에 Cat 출력

let someEvent = '';
someEvent = someEvent || 'NOT FOUND';
console.log(someEvent); // -> Not Found 출력

if(someEvent){
  console.log(someEvent);
}else{
  console.log("NOT FOUND");
}