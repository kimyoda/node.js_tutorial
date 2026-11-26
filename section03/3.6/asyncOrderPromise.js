const { readFile } = require("node:fs/promises");

async function main() {
  console.log("시작");
  for (let index = 1; index <= 3; index += 1) {
    // 각 Promise를 await 한 뒤에 다음 읽기를 시작
    const text = await readFile("fixtures/readme2.txt", "utf8");
    console.log(index + "번", text.trimEnd());
  }
  console.log("끝");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
