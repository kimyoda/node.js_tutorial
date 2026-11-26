import { readFile } from "node:fs/promises";

// 콜백 대신 Promise로 작업 결과를 밟는다. UTF-8을 지정하면 string을얻음
readFile("fixtures/readme.txt", "utf8")
  .then((text) => console.log("읽은 내용:", text))
  .catch((error: unknown) => {
    console.error("읽기 실패:", error);
    process.exitCode = 1;
  });
