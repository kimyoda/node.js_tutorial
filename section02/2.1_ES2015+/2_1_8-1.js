/**
 * Async/Await 패턴
 * Promise .then() 지옥을 탈출하기 위해 ES2017에 도입되었다.
 * 코드가 위에서 아래로 순차적으로 실행되는 것을보인다.
 * @param {user} Users  
 */

// async function 교체-> 함수 선언부 앞에 async를 붙여 비동기 함수 임을 명시한다. 함수는 항상 Promise를 반환한다.
// 내부에서 await를 사용할 수 있는 권한이 생긴다.
async function findAndSaveUser(Users) {
  // User.findOne({})이라는 Promise가 성공할때까지 함수 실행을 잠시 멈춘다.
  let user = await Users.findOne({});
  user.name = 'zero';
  // 저장된 최신 데이터를 다시 받아올 때 user 변수에 덮어버린다.
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
  // 생략
}