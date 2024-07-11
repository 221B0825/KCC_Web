const solution1 = function (input) {
  input += "";
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += parseInt(input.charAt(i));
  }

  return sum;
};

console.log(solution1(123));

const solution2 = function (my_string) {
  let list = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string.charAt(i))) {
      list.push(parseInt(my_string.charAt(i)));
    }
  }

  return list
    .sort(function (a, b) {
      return b - a;
    })
    .toString();
};

console.log(solution2("a4b3c2"));

const solution3 = function (year, month, day) {
  if (day != undefined) {
    return `${year}/${month}/${day}`;
  } else if (month != undefined) {
    return `${year}년 ${month}월`;
  } else {
    return `${year}년`;
  }
};

console.log(solution3(2024, 7, 11));
console.log(solution3(2024, 7));
console.log(solution3(2024));
