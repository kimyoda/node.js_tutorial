/**
 * Promise.all
 *
 * 서로 의존하지 않는 여러 비동기 작업을
 * 동시에 시작하고 싶을 때 사용한다.
 *
 * 모든 Promise가 성공해야
 * Promise.all도 성공한다.
 */

const promise1: Promise<string> = Promise.resolve("성공1");

const promise2: Promise<string> = Promise.resolve("성공2");

Promise.all([promise1, promise2])

  .then((result: string[]): void => {
    console.log(result);

    // [
    //   "성공1",
    //   "성공2"
    // ]
  })

  .catch((error: unknown): void => {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  });
