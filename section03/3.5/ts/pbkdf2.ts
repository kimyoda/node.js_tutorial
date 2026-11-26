import { pbkdf2, randomBytes } from "node:crypto";

const password = "학습용 문자열";
const salt = randomBytes(16);
const iterations = 100_000;
const length = 64;

// salt, 반복 횟수, 출력길이, 해시 알고리즘을 사용해 파생 키를 만든다
// 예제 수치는 API를 연습하는 값, 서비스용 보안 설정 권장값이 아님
pbkdf2(password, salt, iterations, length, "sha512", (error, key) => {
  if (error) {
    console.error("키 파생 실패:", error.message);
    process.exitCode = 1;
    return;
  }

  // 출력된 값은 원래의 비밀번호가 아니라 파생 키. 실제 비밀값은 로그에 남기지 않음
  console.log("salt:", salt.toString("base64"));
  console.log("파생 키:", key.toString("base64"));
});
