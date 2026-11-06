import { setTimeout, setInterval } from "timers/promises";

await setTimeout(3000);
console.log("3초뒤 실행");

// 1초마다 출력되나, 표시되는 시각은 매번 같다
for await (const startTime of setInterval(1000, Date.now())) {
  console.log("1초마다 실행", new Date(startTime));
}
