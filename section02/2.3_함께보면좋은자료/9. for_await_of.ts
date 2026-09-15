export {};

/**
 * for await ... of
 *
 * Promise 또는 비동기 Iterable을 순회하면서
 * 각 값이 resolve될 때까지 기다린 뒤 결과를 가져온다.
 *
 * Promise 배열을 순회하면 Promise 객체 자체가 아니라
 * resolve된 결과값을 순서대로 받을 수 있다.
 */

// 첫 번째 비동기 작업
const firstAsyncTask: Promise<string> = Promise.resolve("성공1");

// 두 번째 비동기 작업
const secondAsyncTask: Promise<string> = Promise.resolve("성공2");

/**
 * Promise 배열을 순회하는 함수
 *
 * async 함수이므로 반환 타입은 Promise<void>
 */
async function runResolvedPromisesSequentially(): Promise<void> {
  /**
   * Promise 배열을 순회한다.
   *
   * for await ... of는 각 Promise가 resolve될 때까지 기다린다.
   */
  for await (const resolvedMessage of [firstAsyncTask, secondAsyncTask]) {
    /**
     * resolvedMessage는 Promise 객체가 아니라
     * Promise가 resolve한 string 값이다.
     */

    console.log(resolvedMessage);
  }
}

/**
 * 실행
 */
runResolvedPromisesSequentially().catch((error: unknown): void => {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }
});
