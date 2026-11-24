import { setTimeout, setInterval } from "node:timers/promises";

// CommonJS 출력에 최상위 await 대신 async 함수로 감싼다
async function main(): Promise<void> {
  await setTimeout(3000);
  console.log("3초뒤 실행");

  // 매 반복에 전달할 값의 타입은 number. 시작 시간은 바뀌지 않음
  const startedAt = Date.now();
  for await (const startTime of setInterval(1000, Date.now())) {
    console.log("1초마다 실행", new Date(startTime));
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
