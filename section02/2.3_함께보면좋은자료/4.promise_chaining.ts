/**
 * Promise Chaining
 *
 * 여러 개의 비동기 작업을
 * 순서대로 실행할 때 사용한다.
 *
 * .then()에서 Promise를 반환하면
 * 다음 .then()은 해당 Promise가
 * 처리될 때까지 기다린다.
 */

const promise: Promise<string> = Promise.resolve("첫 번째 작업 성공");
// 첫번째 then
promise
  .then((message: string): Promise<string> => {
    console.log(message);

    return new Promise<string>((resolve, reject): void => {
      setTimeout((): void => {
        resolve(`${message} -> 로그인 성공`);
      }, 500);
    });
    // 두번째 then
  })
  .then((message2: string): Promise<string> => {
    console.log(message2);

    return new Promise<string>((resolve, reject): void => {
      // 사용자 조회라고 가정

      setTimeout((): void => {
        resolve(`${message2} → 사용자 조회 성공`);
      }, 500);
    });
  })

  /**
   * 세 번째 then
   */
  .then((message3: string): void => {
    console.log(message3);

    console.log("모든 Promise 작업 완료");
  })

  /**
   * 중간에 하나라도 에러가 발생하면
   * catch로 이동한다.
   */
  .catch((error: unknown): void => {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  });
