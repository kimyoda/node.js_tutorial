const { Worker, isMainThread, parentPort } = require("node:worker_threads");

if (isMainThread) {
  // 같은 파일을 워커에 한 번 더 실행한다. TS를 빌드해서 실행하면 __filename은 dist의 JS
  const worker = new Worker(__filename);
  worker.on("message", (message) => console.log("부모가 받음:", message));
  worker.on("error", (error) => {
    console.error(error);
    process.exitCode = 1;
  });
  worker.on("exit", (code) => {
    console.log("워커 종료:", code);
    if (code !== 0) {
      process.exitCode = 1;
    }
  });
  worker.postMessage("ping");
} else {
  // parentPort는 메인 스레드에서 null. 콜백에서 검사한 지역 변수를 사용
  const port = parentPort;
  if (port === null) {
    throw new Error("부모 메시지 포트 없음");
  }

  port.once("message", (message) => {
    console.log("워커가 받음:", message);
    port.postMessage("pong");
    port.close();
  });
}
