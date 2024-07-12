let replyService = (function () {
  function create() {
    console.log("create");
  }

  function update() {
    console.log("update");
  }

  function getList(param, callback) {
    let data = "결과값: " + param;
    callback(data);
  }

  return {
    create: create,
    update: update,
    getList: getList,
  };
})();

function show() {
  replyService.create();
  replyService.getList(10, function (input) {
    console.log("내가 원하는 형태의 출력: " + input);
  });
}

show();

// ------------------------------------------------------------S

function orderService(item, price, quantity, callback) {
  console.log("커피 주문");
  // 주문 관련 서비스 구현
  let result = price * quantity;
  let message = item + " " + quantity + " 잔 ";
  callback(message, result);
}

function order() {
  orderService("아메리카노", 2000, 3, function (message, result) {
    console.log(message + "가격: " + result);
  });
}

order();
