const { readFile } = require("node:fs");

function readNext(index) {
  if (index > 3) {
    console.log("끝");
    return;
  }

  readFile("fixtures/readme2.txt", "utf8", (error, text) => {
    if (error) {
      console.error(error);
      process.exitCode = 1;
      return;
    }

    console.log(index + "번", text.trimEnd());
    // 성공 콜백 안에 다음 읽기를 요청하므로 출력 순서가 고정
    readNext(index + 1);
  });
}

console.log("시작");
readNext(1);
