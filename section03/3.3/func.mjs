import { odd, even } from "./var.mjs";

// 기본 내보내기는 가져오는 쪽에서 원하는 이름을 붙일 수 있음
export default function checkOddOrEven(number) {
  if (number % 2 !== 0) {
    return odd;
  }
  return even;
}
