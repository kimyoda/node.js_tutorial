import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const source = createReadStream("fixtures/readme4.txt");
const compressor = createGzip();
const target = createWriteStream("work/readme4.txt.gz");

function reportError(error: Error) {
  console.error("압축 실패:", error.message);
  source.destroy();
  compressor.destroy();
  target.destroy();
  process.exitCode = 1;
}

source.on("error", reportError);
compressor.on("error", reportError);
target.on("error", reportError);

// 압축 스트림은 읽은 바이트를 gzip 바이트로 바꾸는 중간 단계
source.pipe(compressor).pipe(target);
target.on("finish", () => console.log("압축 완료: work/readme4.txt.gz"));
