import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

if (isMainThread) {
  // workerData는 워커를 시작할 때 전달하는 초기값
  const starts = [1, 2];
  for (const start of starts) {
    const worker = new Worker(__filename, { workerData: { start } });
    worker.on("message", (message: unknown) =>
      console.log("워커 결과:", message),
    );
    worker.on("error", (error) => {
      console.error(error);
      process.exitCode = 1;
    });
    worker.on("exit", (code) => {
      if (code !== 0) {
        process.exitCode = 1;
      }
    });
  }
  // 두 워커 완료 순서는 고정되지 않음
} else {
  const port = parentPort;
  if (port === null) {
    throw new Error("부모 메시지 포트 없음");
  }
  // TypeScript 타입만으로 워커에 넘어온 실제 데이터를 보장할 수 없음
  const data = workerData;
  if (
    typeof data !== "object" ||
    data === null ||
    !("start" in data) ||
    typeof data.start !== "number" ||
    !Number.isFinite(data.start)
  ) {
    throw new TypeError("workerData.start는 숫자여야 한다");
  }
  port.postMessage(data.start + 100);
}
