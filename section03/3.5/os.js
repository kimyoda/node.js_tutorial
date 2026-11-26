const os = require("node:os");

const mib = 1024 ** 2;

// archsms Node.js 실행 바이너리 CPU 아키텍처, platform은 운영체제 식별자
console.log("아키텍처:", os.arch());
console.log("플랫폼:", os.platform(), os.type(), os.release());
console.log("시스템 가동 시간(초):", Math.floor(os.uptime()));
console.log("호스트 이름:", os.hostname());
console.log("홈 디렉터리:", os.homedir());
console.log("임시 디렉터리:", os.tmpdir());

const cpus = os.cpus();
console.log("논리 CPU 수:", cpus.length);
console.log("첫 CPU 정보:", cpus[0] ?? "조회할 수 없음");

// CPU 병렬 작업 수를 결정할 때는 사용 가능한 병렬 처리 수준을 참고
console.log("사용 가능한 병렬 처리 수준:", os.availableParallelism());
console.log("메모리(MiB):", {
  free: Math.round(os.freemem() / mib),
  total: Math.round(os.totalmem() / mib),
});
