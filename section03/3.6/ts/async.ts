import { readFile } from "node:fs";

console.log("시작");
for (let index = 1; index <= 3; index += 1) {
  // 앞 요청이 끝나기를 기다리지 않고 다들 읽기를 시작한다
  readFile("fixtures/readme2.txt", "utf8", (error, text) => {
    if (error) {
      console.error(error);
      process.exitCode = 1;
      return;
    }
    console.log(index + "번", text.trimEnd());
  });
}

// 로그는 완료 콜백보다 먼저 나온다. 1~3번 완료 순서는 고정되지 않음
console.log("끝");
