const { exec } = require("node:child_process");

// exec는 명령 문자열을 셀로 실행. 운영체제별로 고정된 명령만 사용
// 외부 입력을 셀 명령 문자열에 이어 붙이지 않음
const command = process.platform === "win32" ? "dir" : "ls";

exec(command, { encoding: "utf8" }, (error, stdout, stderr) => {
  // exec는 출력을 모아서 작업이 끝났을 때 콜백으로 넘김
  if (stdout) {
    process.stdout.write(stdout);
  }
  if (stderr) {
    process.stderr.write(stderr);
  }

  if (error) {
    console.error("실행 실패:", error.message);
    process.exitCode = 1;
  }
});
