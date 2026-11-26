const { readFileSync, writeFileSync } = require("node:fs");

// 먼저 createBigFile 예제를 실행해 work/big.txt를 준비
console.log("시작 RSS(바이트):", process.memoryUsage().rss);

const contents = readFileSync("work/big.txt");
writeFileSync("work/big2.txt", contents);

// RSS는 프로세스가 물리 메모리에 올려 둔 영역을 보여줌
// Buffer 만의 크기나 실행 중 최고 메모리 사용량을 뜻하지 않음
console.log("복사 후 RSS(바이트):", process.memoryUsage().rss);
