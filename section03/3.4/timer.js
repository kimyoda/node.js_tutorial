// 지정한 지연 시간이 지난 뒤 한번 실행
const timeout = setTimeout(() => {
  console.log("1.5초 후 발생");
}, 1500);

// 취소할 때까지 주기적으로 실행
const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

// 2.5초 뒤에 미실행 타이머와 반복 타이머를 각각 취소.
setTimeout(() => {
  clearTimeout(timeout2);
  clearTimeout(interval);
}, 2500);

// 이벤트 루프의 check 단계에 콜백을 실행하도록 예약
const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다");
});

// 예약된 롤백이 시작되기 전 취소
clearImmediate(immediate2);
