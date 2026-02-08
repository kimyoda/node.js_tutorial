/**
 * Async/Await 패턴
 * Promise .then() 지옥을 탈출하기 위해 ES2017에 도입되었다.
 * 코드가 위에서 아래로 순차적으로 실행되는 것을보인다.
 * @param {user} Users  
 */

// async function  추가, 기존 함수 선ㄷ언에 'async'를 붙여, 함수가 비동기 작업을 처리하는 것을 명시한다.
async function findAndSaveUser(Users) {

  // await 키워드 사용(.then 대체)
  // 프로미스(Users.findOne)가 해결(resolve)될 때까지 기다린다.
  // 결과값이 나오면 바로 user 변수에 대입한다.
  let user = await Users.findOne({});
  // 콜백 함수가 필요 없이, 바로 변수를 수정하면 된다.
  user.name = 'zero';
  // 저장이 끝날때까지 기다렸다가, user 변수를 갱신한다.
  user = await user.save();
  // 위 작업이 모두 끝나고 성별이 'm'인 유저를 조회한다.
  user = await Users.findOne({ gender: 'm' });
  // 생략
}