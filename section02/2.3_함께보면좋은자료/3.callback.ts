/**
 * Callback 방식
 *
 * Promise / async-await 이전에
 * Node.js에서 많이 사용하던 비동기 처리 방식이다.
 *
 * 비동기 작업이 중첩되면
 * Callback Hell이 발생할 수 있다.
 */

/**
 * 사용자 타입
 */
interface CallbackUser {
  name: string;
  gender: string;

  save(Callback: (error: Error | null) => void): void;
}

/**
 * 사용자 모델 타입
 */
interface CallbackUsersModel {
  findOne(
    query: Record<string, unknown>,
    callback: (error: Error | null, user: CallbackUser | null) => void,
  ): void;
}

/**
 * 테스트용 사용자 클래스
 */
class MockCallbackUser implements CallbackUser {
  constructor(
    public name: string,
    public gender: string,
  ) {}

  /**
   * save()
   *
   * DB에 저장하는 상황을
   * setTimeout으로 흉내낸다.
   */
  save(callback: (error: Error | null) => void): void {
    setTimeout((): void => {
      console.log(`${this.name} 사용자 저장 완료`);

      callback(null);
    }, 500);
  }
}

/**
 * 테스트용 사용자 모델
 */
class MockCallbackUsersModel implements CallbackUsersModel {
  private users: CallbackUser[] = [
    new MockCallbackUser("kim", "m"),

    new MockCallbackUser("lee", "f"),

    new MockCallbackUser("park", "m"),
  ];

  /**
   * findOne()
   */
  findOne(
    query: Record<string, unknown>,

    callback: (error: Error | null, user: CallbackUser | null) => void,
  ): void {
    setTimeout((): void => {
      /**
       * 조건이 없으면
       * 첫 번째 사용자를 반환한다.
       */
      if (Object.keys(query).length === 0) {
        const user: CallbackUser | undefined = this.users[0];

        if (!user) {
          callback(new Error("사용자가 존재하지 않습니다."), null);

          return;
        }

        callback(null, user);

        return;
      }

      /**
       * gender 검색
       */
      if (typeof query.gender === "string") {
        const foundUser: CallbackUser | undefined = this.users.find(
          (user: CallbackUser): boolean => {
            return user.gender === query.gender;
          },
        );

        if (!foundUser) {
          callback(new Error("조건에 맞는 사용자가 없습니다."), null);

          return;
        }

        callback(null, foundUser);

        return;
      }

      /**
       * 잘못된 검색 조건
       */
      callback(new Error("지원하지 않는 검색 조건입니다."), null);
    }, 500);
  }
}

/**
 * Callback을 이용한 비동기 처리
 */
function findAndSaveUserCallback(Users: CallbackUsersModel): void {
  /**
   * 1단계
   *
   * 사용자 조회
   */
  Users.findOne(
    {},

    (error: Error | null, user: CallbackUser | null): void => {
      if (error) {
        console.error("첫 번째 사용자 조회 실패:", error.message);

        return;
      }

      if (!user) {
        console.error("사용자가 없습니다.");

        return;
      }

      console.log("첫 번째 사용자 조회:", user);

      /**
       * 사용자 이름 변경
       */
      user.name = "zero";

      /**
       * 2단계
       *
       * 사용자 저장
       */
      user.save((saveError: Error | null): void => {
        if (saveError) {
          console.error("사용자 저장 실패:", saveError.message);

          return;
        }

        console.log("사용자 저장 성공");

        /**
         * 3단계
         *
         * gender가 m인 사용자 조회
         */
        Users.findOne(
          {
            gender: "m",
          },

          (
            findError: Error | null,

            foundUser: CallbackUser | null,
          ): void => {
            if (findError) {
              console.error("남성 사용자 조회 실패:", findError.message);

              return;
            }

            if (!foundUser) {
              console.error("남성 사용자가 없습니다.");

              return;
            }

            console.log("남성 사용자 조회:", foundUser);

            console.log("모든 Callback 작업 완료");
          },
        );
      });
    },
  );
}

/**
 * 실행
 */
const users: CallbackUsersModel = new MockCallbackUsersModel();

findAndSaveUserCallback(users);
