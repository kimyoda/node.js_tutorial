const { readFile } = require("node:fs");

// 인코딩을 지정하지 않으므로 두 번째 콜백 인자는 Buffer이다
readFile("fixtures/readme.txt", (error, bytes) => {
  if (error) {
    console.error("읽기 실패:", error.message);
    process.exitCode = 1;
    return;
  }

  console.log("원본 바이트:", bytes);
  console.log("UTF-8 문자열:", bytes.toString("utf8"));
});
