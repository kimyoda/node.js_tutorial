const { spawn } = require("node:child_process");

// 원본 test.py 대신 현재 Node.js 실행 파일로 고정된 테스트 코드를 실행
// shell: false로 실행 파일과 인수를 셀 해석 없이 전달
const child = spawn(process.execPath, ["-e", 'console.log("hello child")'], {
  shell: false,
  stdio: ["ignore", "pipe", "pipe"],
});

// 출력이 생길 때마다 소비, setEncoding은 UTF-8 문자가 청크 사이에 잘리는 문제를 처리
child.stdout
  .setEncoding("utf8")
  .on("data", (text) => process.stdout.write(text));
child.stderr
  .setEncoding("utf8")
  .on("data", (text) => process.stderr.write(text));

child.on("error", (error) => {
  console.error("프로세스 시작 실패:", error.message);
  process.exitCode = 1;
});

// close는 자식 프로세스가 끝나고 연결된 입출력 스트림도 닫힌 뒤 발생
child.on("close", (code, signal) => {
  console.log("종료 코드:", code, "시그널:", signal);
  if (code !== 0) {
    process.exitCode = 1;
  }
});
