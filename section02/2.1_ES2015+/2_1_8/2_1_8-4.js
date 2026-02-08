/**
 * for await ... of 비동기 반복문
 * 일반 for문과 달리, 배열 안에 있는 '프로미스'들이 해결(resolve)될 때까지 기다렸다가 다음으로 넘어간다.
 * Node.js 10버전부터 지원하는 ES2018 문법이다.
 * 순서대로 실행되어야 하는 비동기 작업 목록을 처리할 때 유용하다.
 */

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

(async () => {
  // 배열 [promise1, promise2]를 순회한다.
  // await가 없으면 프로미스 객체 자체가 출력, for await를 쓰면 각 프로미스의 결과값('성공1', '성공2')을 받는다.
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();

/**
 * Async 함수 반환값 처리
 * async 함수는 무조건 Promise를 반환한다.
 * 리턴값을 받을 때 .then()을 쓰거나 또 다른 asnyc 함수 내에서 await 써야 한다.
 */

async function findAndSaveUser(Users) {
  // ... (생략된 비동기 로직)
  // return 값이 있다면 그것이 Promise의 resolve 값이 된다.
}

// .then() 사용 
findAndSaveUser().then(() => { 
  /* 성공 후 실행할 로직 */ 
});

// await 사용 
// 또 다른 async 함수 안에서 사용한다
async function other() {
  const result = await findAndSaveUser(); 
}