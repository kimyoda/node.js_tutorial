// 기본 내보내기는 중괄호 없이, 이름 있는 내보내기는 중괄호로 가져온다
import checkNumber from "./func.mjs";
import { odd, even } from "./var.mjs";

function checkStringOddOrEven(text) {
  if (text.length % 2 !== 0) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10)); // ESM: 짝수
console.log(checkStringOddOrEven("hello")); // ESM: 홀수
