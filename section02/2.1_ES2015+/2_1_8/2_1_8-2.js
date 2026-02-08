/**
 * Async/Await 에러 처리 패턴
 * await를 사용하는 경우,  프로미스가 거절(reject)되면 에러를 throw한다.
 * 안전한 실행을 위해 try-catch 문을 감싸야 한다.
 */

// async function  추가, 기존 함수 선ㄷ언에 'async'를 붙여, 함수가 비동기 작업을 처리하는 것을 명시한다.
async function findAndSaveUser(Users) {
  // try 블록 시작 안에서 발생하는 모든 비동기 에러를 감시.
  try {
    // 성공 시: user 변수에 값을 담고 다음 줄로 넘어갑니다.
    // 실패 시: 즉시 catch 블록으로 점프합니다.
    let user = await Users.findOne({});
    // 위 조회가 성공해야 실행
    user.name = 'zero';
    // 수정된 정보를 저장하고 완료될 때까지 또 기다립니다.
    user = await user.save();
    //  다른 유저 조회 저장이 끝난 후, 남성 유저를 찾습니다.
    user = await Users.findOne({ gender: 'm' });
    
    // 생략된 로직...
  } catch (error) {
    // 에러처리, 어디서든 에러가 발생하면 여기서 처리한다.
    console.error(error);
  }
}
