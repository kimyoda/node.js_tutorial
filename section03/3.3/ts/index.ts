import messages = require("./var.js");
import checkNumber = require("./func.js");

const { odd, even } = messages;

function checkStringOddOrEven(text: string): typeof odd | typeof even {
  // 숫자 자체가 아닌 문자열 길이를 검사
  if (text.length % 2 !== 0) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10)); // CJS: 짝수
console.log(checkStringOddOrEven("hello")); // CJS: 홀수
