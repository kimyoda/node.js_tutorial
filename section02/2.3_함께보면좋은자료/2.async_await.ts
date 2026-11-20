/**
 * =========================================================
 * 2. Async / Await + 화살표 함수
 * =========================================================
 *
 * JavaScript와 문법 자체는 거의 동일하다.
 *
 * TypeScript에서는 함수의 매개변수와
 * 반환값에 타입을 지정하는 것이 가장 큰 차이점이다.
 */

// 사용자 데이터 타입
interface User {
  name: string;
  gender: string;

  /**
   * save()가 비동기로 동작하고
   * 저장된 User를 반환한다고 가정한다.
   */
  save(): Promise<User>;
}

/**
 * Users 모델의 타입
 *
 * 실제 MongoDB + Mongoose를 사용한다면
 * Mongoose에서 제공하는 Model 타입을 사용할 수 있다.
 *
 * 여기서는 학습을 위해 간단하게 직접 정의한다.
 */
interface UsersModel {
  findOne(query: Record<string, unknown>): Promise<User>;
}

/**
 * async 함수는 항상 Promise를 반환한다.
 *
 * 여기서는 별도의 값을 return하지 않기 때문에
 * 반환 타입은 Promise<void>가 된다.
 */
const findAndSaveUser = async (Users: UsersModel): Promise<void> => {
  try {
    /**
     * findOne()의 반환값이 Promise<User>이므로
     *
     * await를 사용하면
     * user의 타입은 User가 된다.
     */
    let user: User = await Users.findOne({});

    // User 인터페이스의 name은 string 타입
    user.name = "zero";

    /**
     * save() 역시 Promise<User>를 반환한다고 정의했으므로
     * 저장이 끝날 때까지 기다린다.
     */
    user = await user.save();

    /**
     * gender가 "m"인 사용자 조회
     */
    user = await Users.findOne({
      gender: "m",
    });

    console.log(user);
  } catch (error: unknown) {
    /**
     * TypeScript에서는 catch의 error를
     * unknown으로 처리하는 것이 안전하다.
     *
     * 바로 error.message를 사용할 수 없기 때문에
     * instanceof Error 등으로 타입을 확인한다.
     */
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
};
