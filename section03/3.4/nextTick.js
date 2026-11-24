// setImmediate는 이벤트 루프의 check 단계에 실행
setImmediate(() => {
  console.log("immediate");
});

// CommonJS의 상위 예제에서 Promise 콜백보다 먼저 실행
process.nextTick(() => {
  console.log("nextTick");
});

// 0ms는 즉시 실행을 의미하지 않음. 최상위에 immediate와 순서를 고정할 수 없음.
setTimeout(() => {
  console.log("timeout");
}, 0);

// Promise then 콜백은 마이크로태스크 큐에 등록.
Promise.resolve().then(() => console.log("promise"));
