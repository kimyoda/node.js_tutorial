import checkNumber from "./func.mjs";
import { odd, even, type PairtyMessage } from "./var.mjs";

function checkStringOddOrEven(text: string): PairtyMessage {
  // 문자열을 숫자로 변환하는 것이 아닌 길이의 홀짝을 판별
  if (text.length % 2 !== 0) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
