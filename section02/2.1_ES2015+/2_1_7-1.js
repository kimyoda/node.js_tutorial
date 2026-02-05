/**
 * Promise 프로미스 기본 패턴
 * 비동기 작업의 최종 완료(성공) 또는 실패를 나타내는 객체이다.
 * 콜백 지옥(Callback hell)을 해결하기 위해 적용했다.
 */

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  // 이 함수는 프로미스가 생성되자마자 즉시 실행한다. 서버 요청, 타이머 등 시간이 걸리는 작업.
  if (condition) {
    // 작업 성공 시 resolve 호출 -> .then 연결
    resolve("성공"); // '성공' 값 전달
  } else {
    // 작업 실패 시 reject 호출 -> .catch()로 연결
    reject("실패"); // '실패'라는 에러 사유 전달
  }
});
// 다른 코드가 들어갈 수 있음

// 2. 프로미스 소비
promise
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행, 출력 성공
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행, 출력 실패
  })
  .finally(() => {
    // 끝나고 무조건 실행
    console.log("무조건");
  });

// 1. Pending(대기): 아직 결과가 안나온 상태(new Promise)
// 2. Fulfilled(이행): resolve()가 호출되어 성공한 상태 -> .then() 실행
// 3. Rejected(거부): reject()가 호출되어 실패한 상태 -> .catch() 실행
