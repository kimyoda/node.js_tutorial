const { createWriteStream } = require("node:fs");
const { Readable } = require("node:stream");
const { pipeline } = require("node:stream/promises");

async function main() {
  // 인수가 없으면 20만 줄, 있으면 입력한 줄 수로 작은 파일로 만들 수 있음
  const lineCount = Number(process.argv[2] ?? "200000");

  if (!Number.isInteger(lineCount) || lineCount < 1 || lineCount > 1000000) {
    throw new RangeError("줄 수는 1~1000000의 정수로 입력해야한다.");
  }

  function* lines() {
    for (let index = 0; index < lineCount; index += 1) {
      yield "Node.js 파일 시스템 실습용 데이터이다.\n";
    }
  }

  // 모든 줄을 한 번에 메모리에 쌓지 않는다. 스트림으로 생산과 쓰기를 연결
  await pipeline(
    Readable.from(lines(), { objectMode: false }),
    createWriteStream("work/big.txt"),
  );
  console.log("실습 파일 생성:", lineCount, "줄");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
