function first() {
  // 2ㅣ second 함수를 스택에 쌓는다
  second();
  console.log("첫 번째"); // 6. '첫 번째' 출력 후 first 함수 스택에서 제거
}

function second() {
  // 3. third 함수를 스택에 쌓는다
  third();
  console.log("두 번째"); // 5. '두 번째' 출력 후 second 함수 스택에서 제거
}

function third() {
  // 4. '세 번째' 출력 후 third 함ㅅ 스택에서 제거
  console.log("세 번째");
}

// 1. anoymous(전역 콘택스트) 위에 first 함수를 스택에 쌓는다.
first();

/**
 * 출력 결과
 * 세 번째
 * 두 번째
 * 첫 번째
 */
