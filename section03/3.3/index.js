const { odd, even } = require("./var.js");
const checkNumber = require("./func.js");

function checkStringOddOrEven(text) {
  // 숫자 자체가 아닌 문자열 길이를 검사
  if (text.length % 2 !== 0) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10)); // CJS: 짝수
console.log(checkStringOddOrEven("hello")); // CJS: 홀수
