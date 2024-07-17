/**
 * Promise
 */

// // new 연산자로 프로미스 생성
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("완료");
//   }, 1000);
// });

// // resolve 값이 then 함수 파라미터로 넘어가게 됨
// timeoutPromise.then((res) => {
//   console.log("-- then ---");
//   console.log(res);
// });

/** 
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료 : " + seconds);
    }, seconds * 1000);
  });

getPromise(1)
  .then((res) => {
    console.log("--- then ---");
    console.log(res);
    return getPromise(2);
  })
  .then((res) => {
    console.log("--- then ---");
    console.log(res);
    return getPromise(3);
  })
  .then((res) => {
    console.log("--- then ---");
    console.log(res);
  });
  */

//--------------------------------------------------------
/**
 *
 * reject
 */

/** 
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("DATA");
      reject("ERROR");
    }, seconds * 1000);
  });

getPromise(1)
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log("--- catch ---");
    console.log(res);
  })
  .finally(() => {
    console.log("--- finally ---");
  });
*/

/** 
// 과제 > 빌린돈에 대한 원금 + 이자(10%)에 대한 상환금액을 비동기식으로 구현하시오.
const getCalcul = (defaultPrice) =>
  new Promise((resolve, reject) => {
    if (defaultPrice === 0) {
      reject("ERROR : INPUT IS ZERO");
    } else {
      const price = (defaultPrice * 11) / 10;
      resolve(price);
    }
  });

getCalcul(1000)
  .then((res) => {
    console.log("--- result ---");
    console.log(res);
  })
  .catch((res) => {
    console.log("--- catch ---");
    console.log(res);
  });
// 원래라면 calcul이 다 끝나고 이 "다른 작업"이 찍혀야 하지만, calcul이 비동기식이기 때문에 먼저 찍힘.
console.log("다른 작업");
*/

//-------------------------------------------------------
/**
 *
 * 동시에 여러 promise 작업
 */

/**
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료 : " + seconds);
    }, seconds * 1000);
  });

// 동시에 실행 시키기
Promise.all([getPromise(1), getPromise(4), getPromise(1)]).then((res) => {
  console.log(res);
});
 */

/**
 * Async / Await
 *
 */

/** 
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료 : " + seconds);
    }, seconds * 1000);
  });

async function runner() {
  const result = await getPromise(1);
  console.log(result);
}

runner();
console.log("다른 작업");
*/

//--------------------------------------

/** 
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료 : " + seconds);
    }, seconds * 1000);
  });

async function runner2() {
  const result2 = await getPromise(1);
  console.log(result2);
  const result3 = await getPromise(3);
  console.log(result3);
  const result4 = await getPromise(1);
  console.log(result4);
}
runner2();
console.log("다른 작업");
*/

//----------------------------------------------

function moneyLend(borrow) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject("채무자 파산");
      }
      resolve(borrow * 1.1);
    }, 500);
  });
}

async function lend() {
  try {
    const lend1 = await moneyLend(10);
    const lend2 = await moneyLend(lend1);
    const lend3 = await moneyLend(lend2);
    const lend4 = await moneyLend(lend3);
    const lend5 = await moneyLend(lend4);

    console.log("대출금: " + lend5);
  } catch (msg) {
    console.log(msg);
  } finally {
    console.log("대금 종료");
  }
}
console.log("다른 작업");

lend();
