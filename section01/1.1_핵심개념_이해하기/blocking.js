function longRunningTask() {
  // 함수가 실행되는 동안 호출 스택을 점유한다.
  // 오래 걸리는 작업(파일 읽기, 네트워크 요청 등)
  console.log("작업 끝");
}

console.log("시작"); // 1. 시작 출력
longRunningTask(); // 2. 이 작업이 끝날 때까지 아래 '다음 작업'은 실행되지 못한다.
console.log("다음 작업"); // 3. longRunningTask가 종료된 후 실행된다.

/**
 * 출력 결과
 * 시작
 * 작업 끝
 * 다음 작업
 */
