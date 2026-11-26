// 내보낸 객체에 필요한 속성만 꺼냄
const { odd, even } = require("./var.js");

function checkOddOrEven(number) {
  // 정수를 2로 나눈 나머지가 0이 아니면 홀수
  if (number % 2 !== 0) {
    return odd;
  }
  return even;
}

// 객체로 감싸지 않았기에 require()의 반환값은 함수 자체
module.exports = checkOddOrEven;
