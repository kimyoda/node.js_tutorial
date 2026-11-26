const { createReadStream, createWriteStream } = require("node:fs");
const { pipeline } = require("node:stream/promises");

async function main() {
  console.log("시작 RSS(바이트):", process.memoryUsage().rss);

  // 이전에 만들어 둔 big.txt를 정크 단위로 복사
  // await는 출력 스트림까지 작업을 끝날 때까지 기다린다
  await pipeline(
    createReadStream("work/big.txt"),
    createWriteStream("work/big3.txt"),
  );
  console.log("복사 후 RSS(바이트):", process.memoryUsage().rss);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
