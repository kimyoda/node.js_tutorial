/**
 * Promise.all 비동기 병렬 처리
 * 여러 개의 비동기 작업을 순서 상관없이 '동시에' 시작하고 싶을 때 사용한다.
 * 하나씩 기다리는 것보다 전체 실행 시간이 훨씬 단축된다.
 */

// 즉시 성공하는 프로미스 2개 준비
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

// 문법: Promise.all([프로미스 배열])
Promise.all([promise1, promise2])
  .then((result) => {
    // 성공조건 배열안의 모든 프로미스가 resolve(성공) 되어야 실행된다.

    // 각각의 결과가 배열에 담겨서 들어온다.
    // ['성공1', '성공2']
    // 결과 배열의 순서는 입력한 배열 순서와 동일하게 보장된다.
    console.log(result);
  })
  .catch((error) => {
    // 배열 중 하나라도 reject(실패)되면 즉시 여기로 넘어온다.
    console.log(error);
  })
