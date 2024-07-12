/**
 * 함수 클로저
 * => 함수 호출 이후에도 함수의 실행 컨택스트 영역을 유지
 */

function outerFunc() {
  let x = 10;
  var innerFunc = function () {
    console.log(x);
  };

  return innerFunc;
}

const inner = outerFunc();
inner();

//-------------------------------------
// 데이터 캐싱
function cashFunction(newNumb) {
  // 아주 오래 소요되는 작업
  var number = 10 * 10;

  return number * newNumb;
}

console.log(cashFunction(10));
console.log(cashFunction(20));

console.log("======================");

function cashFunction2() {
  // 아주 오래 소요되는 작업
  var number = 10 * 10;

  function innerCashFunction(newNumb) {
    return number * newNumb;
  }

  return innerCashFunction;
}

const runner = cashFunction2();
// 이미 만들어져 있는 number에 * newNumb인 마지막 계산만 해주면 됨.
// 오래 걸리는 작업을 한번 미리 만들어두고, 계산 함수를 리턴받으면 됨
console.log(runner(10));

//-----------------------------------------------------------------
function outer(arg1, arg2) {
  const defaultValue = arg1 + arg2;

  function innerCalcul(arg2) {
    return defaultValue + arg2;
  }

  return innerCalcul;
}

const runner2 = outer(16, 14);

console.log(runner2(3));

// 다른 예
function outer2(arg1, arg2) {
  function inner(innerArg) {
    console.log((arg1 + arg2) / innerArg);
  }

  return inner;
}
// let inner2 = outer(16,14);
// innner2(10);

outer2(16, 14)(10);
