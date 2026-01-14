function longRunningTask() {
  // 4. 호출 스택이 비어있을 때 이벤트 루프에 의해 실행된다
  console.log("작업 끝");
}

console.log("시작"); // 1. 시작 출력
// 2. 타이머를 백그라운드로 보내고, 다음 코드로 넘어간다(논블로킹)
setTimeout(longRunningTask, 0);
// 3. "작업 끝"을 기다리지 않고 즉시 실행된다.
console.log("다음 작업");

/**
 * 출력 결과
 * 시작
 * 다음 작업
 * 작업 끝
 */
