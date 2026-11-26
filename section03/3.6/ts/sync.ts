import { readFileSync } from "node:fs";

const input = "fixture/readme2.txt";

console.log("시작");
for (let index = 1; index <= 3; index += 1) {
  // 읽기가 끝날 때까지 현재 JS 실행 흐름이 멈춘다
  const text: string = readFileSync(input, "utf8");
  console.log(index + "번", text.trimEnd());
}
console.log("끝");
