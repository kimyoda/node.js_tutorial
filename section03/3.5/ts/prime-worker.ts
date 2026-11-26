import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
import { availableParallelism } from "node:os";

function countPrimes(from: number, to: number): number {
  let count = 0;
  for (let value = Math.max(2, from); value <= to; value += 1) {
    let prime = true;
    // 제곱근에 해당하는 악수도 검사해야 완전제곱수를 제외할 수 있음
    for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
      if (value % divisor === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count += 1;
    }
  }
  return count;
}

function readMax(): number {
  const max = Number(process.argv[2] ?? "1000000");
  if (!Number.isSafeInteger(max) || max < 2 || max > 10_000_000) {
    throw new RangeError("최댓값은 2~10000000 사이 정수여야 한다.");
  }
  return max;
}

function countInWorker(from: number, to: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    const worker = new Worker(__filename, { workerData: { from, to } });
    let result: number | undefined;
    // 전체 배열 대신 구간별 개수 하나만 전달하여 메시지 크기를 줄인다
    worker.on("message", (message) => {
      if (
        typeof message === "number" &&
        Number.isSafeInteger(message) &&
        message >= 0
      ) {
        result = message;
      }
    });
    worker.once("error", reject);
    worker.once("exit", (code) => {
      if (code !== 0 || result === undefined) {
        reject(new Error("워커가 결과 없이 종료됐습니다. 종료 코드: " + code));
        return;
      }
      resolve(result);
    });
  });
}

async function main(): Promise<void> {
  const max = readMax();
  const workers = Math.min(8, availableParallelism(), max - 1);
  const chunkSize = Math.ceil((max - 1) / workers);
  const pending: Promise<number>[] = [];

  console.time("워커 스레드");
  // [from, to] 양쪽을 포함. 다음 구간은 한 칸 뒤에 시작
  for (let from = 2; from <= max; from += chunkSize) {
    const to = Math.min(from + chunkSize - 1, max);
    pending[pending.length] = countInWorker(from, to);
  }
  const counts = await Promise.all(pending);
  console.timeEnd("워커 스레드");
  console.log(
    "소수 개수:",
    counts.reduce((sum, count) => sum + count, 0),
  );
}

if (isMainThread) {
  main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
} else {
  const port = parentPort;
  if (port === null) {
    throw new Error("부모 메시지 포트 없음");
  }
  const range: unknown = workerData;
  if (
    typeof range !== "object" ||
    range === null ||
    !("from" in range) ||
    !("to" in range) ||
    typeof range.from !== "number" ||
    typeof range.to !== "number"
  ) {
    throw new TypeError("워커에 전달된 범위를 확인");
  }
  port.postMessage(countPrimes(range.from, range.to));
}
