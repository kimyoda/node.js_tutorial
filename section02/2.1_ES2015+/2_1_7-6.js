/**
 * Promise.allSettled: 모든 결과 조회
 * ES2020(ES11)에 도입된 문법이다.
 * 여러 비동기 작업 중 일부가 실패하더라도, 전체를 에러 처리하지 않고
 * 성공/실패 여부를 각각 확인하고 싶을 때 사용한다.
 */

// 즉시 성공하는 프로미스 2개 준비
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const proimse3 = Promise.resolve('성공3');

Promise.allSettled([promise1, promise2, proimse3])
  .then((result) => {
    // 하나가 실패해도 .catch로 가지 않고 무조건 .then이 실행된다.
    // 결과값은 성공/실패 여부를 담은 '객체의 배열'로 들어온다.
    
    console.log(result);
    /*
     [
       // 1. 성공 시: status는 'fulfilled', 결과값은 'value'에 담김
       { status: 'fulfilled', value: '성공1' },
       
       // 2. 실패 시: status는 'rejected', 에러 사유는 'reason'에 담김
       { status: 'rejected', reason: '실패2' },
       
       { status: 'fulfilled', value: '성공3' }
     ]
     */

     // status가 'rejected'인것만 골라내어 로그를 남기거나 재시도할 수 있다.
  })
  .catch((error) => {
    // allSettled 자체 문법 오류 등이 아니면, 내부 프로미스 에러 때문에 오지는 않는다.
    console.log(error);
  })

  // Promise.all
  // 하나라도 실패하면 즉시 전체 에러(catch로 이동)
  // 성공한 값들의 배열 (값만 있음)
  // 필수 데이터(하나라도 없으면 페이지 x)

  // Promise.allSettled
  // 실패해도 무시하고 끝까지 실행(then으로 이동)
  // 상태(status)와 값/이유(value/reason)가 담긴 객체 배열
  // 부분 데이터