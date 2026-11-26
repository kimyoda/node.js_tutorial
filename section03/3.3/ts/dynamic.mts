export {};

if (!process.argv.includes("--skip")) {
  // TypeScript는 import() 경로를 보고 default 내보내기 함수 타입을 추론
  const { default: checkNumber } = await import("./func.mjs");
  console.log(checkNumber(7));

  const { odd, even } = await import("./var.mjs");
  console.log(odd, even);
}

console.log("실행 완료");
