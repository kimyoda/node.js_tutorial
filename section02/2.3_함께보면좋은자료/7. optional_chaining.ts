export {};

/**
 * Optional Chaining
 * 옵셔널 체이닝
 *
 * ?.
 *
 * 객체나 배열 등이 null 또는 undefined일 수도 있을 때
 * 안전하게 속성이나 메서드에 접근하기 위해 사용한다.
 *
 * 값이 존재하지 않으면 에러를 발생시키지 않고
 * undefined를 반환한다.
 */

/**
 * 주소 타입
 */
interface OptionalAddress {
  city: string;
}

/**
 * 사용자 타입
 */
interface OptionalUser {
  name: string;

  /**
   * address가 없을 수도 있으므로
   * Optional Property인 ?를 사용한다.
   */
  address?: OptionalAddress;

  /**
   * 함수 역시 없을 수도 있다.
   */
  sayHello?: () => string;
}

/**
 * ---------------------------------------------------------
 * 주소와 메서드를 모두 가지고 있는 사용자
 * ---------------------------------------------------------
 */
const userWithFullInfo: OptionalUser = {
  name: "Yohan",

  address: {
    city: "Seoul",
  },

  sayHello: (): string => {
    return "Hello!";
  },
};

/**
 * address가 존재하므로
 * Seoul을 반환한다.
 */
console.log(userWithFullInfo.address?.city);

// Seoul

/**
 * ---------------------------------------------------------
 * address가 없는 사용자
 * ---------------------------------------------------------
 */
const userWithoutAddress: OptionalUser = {
  name: "Zero",
};

/**
 * address가 undefined이지만
 * Optional Chaining을 사용했기 때문에
 * 에러가 발생하지 않는다.
 */
console.log(userWithoutAddress.address?.city);

// undefined

/**
 * ---------------------------------------------------------
 * 메서드 Optional Chaining
 * ---------------------------------------------------------
 */

/**
 * sayHello가 존재하므로 실행한다.
 */
console.log(userWithFullInfo.sayHello?.());

// Hello!

/**
 * sayHello가 존재하지 않으므로
 * 실행하지 않고 undefined를 반환한다.
 */
console.log(userWithoutAddress.sayHello?.());

// undefined

/**
 * ---------------------------------------------------------
 * null일 수도 있는 객체
 * ---------------------------------------------------------
 */
function getNullableUser(): OptionalUser | null {
  return null;
}

const nullableUserResult: OptionalUser | null = getNullableUser();

/**
 * nullableUserResult가 null이므로
 * name에 접근하지 않고 undefined를 반환한다.
 */
console.log(nullableUserResult?.name);

// undefined

/**
 * ---------------------------------------------------------
 * 배열 Optional Chaining
 * ---------------------------------------------------------
 */

const optionalUserList: OptionalUser[] | undefined = undefined;

/**
 * 배열 자체가 undefined일 수도 있으므로
 * ?.[0] 형태로 접근한다.
 */
console.log(optionalUserList?.[0]);

// undefined

/**
 * ---------------------------------------------------------
 * Optional Chaining + Nullish Coalescing
 * ---------------------------------------------------------
 *
 * 실제 코드에서 같이 사용하는 경우가 많다.
 */

const resolvedCityName: string =
  userWithoutAddress.address?.city ?? "주소 없음";

console.log(resolvedCityName);

// 주소 없음
