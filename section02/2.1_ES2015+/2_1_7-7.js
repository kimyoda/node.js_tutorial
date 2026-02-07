/**
 * Promise 에러 처리 중요성
 * Promise는 비동기로 동작, 일반적인 동기 코드 try-catch로 에러를 잡을 수 없다.
 * .catch()메서드를 사용, async/await 구문 안에서 try-catch를 써야한다.
 */

try {
  // Promise.reject는 비동기 작업, try 블록이 다 끝난 뒤 실행
  Promise.reject('에러');
} catch (e) {
  console.error(e); // UnhandledPromiseRejection: This error originated either by throwing inside...
}

Promise.reject('에러').catch(() => {
  // catch 메서드를 붙이면 에러 발생하지 않음
  // Promise 객체 뒤에 .catch를 붙여야 비동기 에러를 안전하게 처리할 수 있다.
  console.log('에러가 처리되었다');
})