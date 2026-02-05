/**
 * Promise Chaining 예제
 * 유저를 찾고(findOne)
 * 그 유저의 이름을 바꿔서 저장(save)
 * 저장이 끝나면 다른 조건으로 남성 유저를 찾는다(findOne)
 */

function findAndSaveUser(Users) {
  // 첫 번째 비동기 작업: 유저 조회
  Users.findOne({})
    // 찾은 유저(user)가 여기로 넘어오고 데이터 수정
    .then((user) => {
      user.name = "zero";
      // user.save()도 Promise를 반환하고 return을 해줘야 .then() 저장이 끝날 때까지 기다린다.
      return user.save();
    })
    .then((user) => {
      // 저장이 성공적으로 완료된 후 실행된다.
      // Promise를 리턴하여 체인을 이어간다.
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      // 남성 유저 조회가 완료되면 실행된다.
      // 생략
    })
    .catch((err) => {
      // 에러가 나면 즉시 이곳으로 온다.
      console.error(err);
    });
}
