/**
 * Async/Await 화살표 함수 버전
 * async 키워드를 매개변수 앞에 붙이는 것이 주요하다.
 */

// 화살표 함수에서 매개변수(Users)가 들어가는 소괄호 앞에 'async'를  적는다.
const findAndSaveUser = async (Users) => {
  try {
    // await 조회가 끝날 때까지 대기한다. 내부 동작은 같다.
    let user = await Users.findOne({});
    
    user.name = 'zero'; 
    user = await user.save();
    
    user = await Users.findOne({ gender: 'm' });
    
    // 생략...
    
  } catch (error) {
    // 화살표 함수에서도 try-catch를 통해 안전하게 에러를 잡습니다.
    console.error(error);
  }
};
