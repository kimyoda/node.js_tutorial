import { deprecate, promisify } from "node:util";
import { randomBytes } from "node:crypto";

// 사용 중단 경고를 내는 래퍼를 만듬. 호출 자체는 기존 함수에 전달
const oldAdd = deprecate(
  (left: number, right: number) => left + right,
  "oldAdd는 사용 중단 예정이다.",
);
console.log("합:", oldAdd(1, 2));

// 마지막 인자가 (error, value)인 콜백 형식의 API를 Promise를 형식으로 바꿈
const randomeBytesAsync = promisify(randomBytes);
randomeBytesAsync(64)
  .then((bytes) => console.log("난수(Base64:", bytes.toString("base64")))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
