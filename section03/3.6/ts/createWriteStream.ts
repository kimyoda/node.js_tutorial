import { createWriteStream } from "node:fs";

const output = createWriteStream("work/writeme2.txt");

output.on("error", (error) => {
  console.error("스트림 쓰기 실패:", error.message);
  process.exitCode = 1;
});

// finish는 end를 호출한 뒤 대기 중인 쓰기가 처리되었음을 알림
output.on("finish", () => console.log("쓰기 완료: work/writeme2.txt"));
output.write("첫 번째 줄을 기록한다.\n", "utf8");
output.end("두 번째 줄을 기록한다.\n", "utf8");
