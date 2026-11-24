export {};

// Node.js 타이머 핸들은 브라우저 숫자 ID와 다른 객체
const timeout: NodeJS.Timeout = setTimeout((): void => {
  console.log("1.5초 후 발생");
}, 1500);

// 취소할 때까지 주기적으로 실행
const interval: NodeJS.Timeout = setInterval((): void => {
  console.log("1초마다 실행");
}, 1000);

const timeout2: NodeJS.Timeout = setTimeout((): void => {
  console.log("실행되지 않습니다");
}, 3000);

// 2.5초 뒤에 미실행 타이머와 반복 타이머를 각각 취소.
setTimeout((): void => {
  clearTimeout(timeout2);
  clearTimeout(interval);
}, 2500);

// setImmediate 핸들은 NodeJS.Immediate 타입
const immediate: NodeJS.Immediate = setImmediate((): void => {
  console.log("즉시 실행");
});

const immediate2: NodeJS.Immediate = setImmediate((): void => {
  console.log("실행되지 않습니다");
});

// 예약된 롤백이 시작되기 전 취소
clearImmediate(immediate2);
