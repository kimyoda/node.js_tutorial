if (!process.argv.includes("--skip")) {
  // import()는 Promise를 반환. await한 뒤 모듈의 내보낸 값에 접근
  const functions = await import("./func.mjs");
  console.log(functions.default(7));

  const messages = await import("./var.mjs");
  console.log(messages.odd, messages.even);
}

console.log("실행 완료");
