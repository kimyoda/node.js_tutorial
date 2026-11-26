// .mjs는 빌드 결과의 확장자. 타입 검사에서 var.mts에 연결
import { odd, even, type PairtyMessage } from "./var.mjs";

export default function checkOddOrEven(number: number): PairtyMessage {
  if (number % 2 !== 0) {
    return odd;
  }
  return even;
}
