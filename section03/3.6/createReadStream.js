const { createReadStream } = require("node:fs");
const { Buffer } = require("node:buffer");

const source = createReadStream("fixtures/readme3.txt", { highWaterMark: 16 });
const chunks = [];

// 16바이트로 단위로 읽도록 설정. 마지막 조각은 더 작을 수 있음
source.on("data", (chunk) => {
  const bytes = typeof chunk === "string" ? Buffer.from(chunk, "utf8") : chunk;
  chunks[chunks.length] = bytes;
  console.log("읽은 바이트:", bytes.length, bytes);
});

source.on("end", () => {
  // 한글 UTF-8 바이트가 조각 사이에 나뉠 수 있으므로 합친 다음 디코딩
  // 예제는 관찰을 위해 모든 청크를 저장. 대용량 박사라면 pip를 쓴다
  console.log("전체 문자열:", Buffer.concat(chunks).toString("utf8").trimEnd());
});

source.on("error", (error) => {
  console.error("스트림 읽기 실패:", error.message);
  process.exitCode = 1;
});
