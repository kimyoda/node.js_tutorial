import { writeFile, readFile } from "node:fs/promises";

const output = "work/writeme-promise.txt";

// then에서 다음 Promise를 반환하면 두 작업이 순서대로 실행
writeFile(output, "Promise로 파일에 기록한다.\n", "utf8")
  .then(() => readFile(output, "utf8"))
  .then((text) => console.log(text.trimEnd()))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
