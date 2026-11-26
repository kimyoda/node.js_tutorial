import { writeFile, readFile } from "node:fs";

const output = "work/writeme.txt";

// 기존 파일이 있으면 내용을 덮어쓴다. 쓰기가 끝난 다음에 읽어야 한다
writeFile(output, "콜백으로 파일에 기록한다.\n", "utf8", (writeError) => {
  if (writeError) {
    console.error(writeError);
    process.exitCode = 1;
    return;
  }

  readFile(output, "utf8", (readError, text) => {
    if (readError) {
      console.error(readError);
      process.exitCode = 1;
      return;
    }
    console.log(text.trimEnd());
  });
});
