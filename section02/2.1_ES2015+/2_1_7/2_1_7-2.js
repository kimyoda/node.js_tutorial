/**
 * Promise Chaining 프로미스 체이닝
 * 여러 개의 비동기 작업을 순서대로 처리해야 할 때 사용한다.
 * 콜백 함수를 계속 중첩하지 않고, .then()를 꼬리에 꼬리를 물듯 연결한다.
 */

promise
  .then((message) => {
    // Promise를 리턴, 다음 .then이 Promise가 끝날때 까지 기다린다.
    return new Promise((resolve, reject) => {
      // 서버에서 로그인 접보를 받아오고, 다음 단계
      resolve(message);
    });
  })
  .then((message2) => {
    // 2단계는 message2에 이전 단계에서 resolve로 보낸 값이 들어온다.
    console.log(message2);
    // 비동기 작업을 시작하고 기다리게 할 수 있다.
    return new Promise((resolve, reject) => {
      // 기타 작업
      resolve(message2);
    });
  })
  .then((message3) => {
    // 2단계가 끝나면 실행 한다.
    console.log(message3);
    // 리턴할 Promise가 없으면 체이닝은 끝난다.
  })

  .catch((error) => {
    // 에러 처리, 어디서든 에러가 발생하면 여기로 도착한다.
    console.error(error);
  });
