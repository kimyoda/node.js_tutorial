const { createReadStream, createWriteStream } = require("node:fs");

const source = createReadStream("fixtures/readme4.txt");
const target = createWriteStream("work/writeme3.txt");

source.on("error", (error) => {
  console.error("읽기 실패:", error.message);
  target.destroy();
  process.exitCode = 1;
});
target.on("error", (error) => {
  console.error("쓰기 실패:", error.message);
  source.destroy();
  process.exitCode = 1;
});

// 읽은 데이터를 쓰기 스트림으로 전달. 소비가 느리면 읽기 속도를 조절
source.pipe(target);
target.on("finish", () => console.log("스트림 복사 완료: work/writeme3.txt"));
