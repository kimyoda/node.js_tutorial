export {};

/**
 * Nullish Coalescing Operator
 * 널 병합 연산자
 *
 * ??
 *
 * 왼쪽 값이
 *
 * null
 * undefined
 *
 * 인 경우에만 오른쪽 기본값을 사용한다.
 *
 * 0
 * false
 * ""
 *
 * 같은 값은 정상적인 값으로 인정한다.
 */

/**
 * ---------------------------------------------------------
 * || 연산자의 경우
 * ---------------------------------------------------------
 *
 * ||는 null / undefined만 검사하는 것이 아니라
 * falsy 값 전체를 검사한다.
 *
 * 대표적인 falsy 값:
 *
 * false
 * 0
 * ""
 * null
 * undefined
 * NaN
 */

const currentItemCount: number = 0;

/**
 * 0은 falsy이므로
 * 기본값 3이 사용된다.
 */
const itemCountUsingOr: number = currentItemCount || 3;

console.log(itemCountUsingOr);

// 3

/**
 * ---------------------------------------------------------
 * ?? 연산자
 * ---------------------------------------------------------
 */

const currentScore: number = 0;

/**
 * 0은 null이나 undefined가 아니므로
 * 그대로 0을 사용한다.
 */
const scoreUsingNullish: number = currentScore ?? 3;

console.log(scoreUsingNullish);

// 0

/**
 * ---------------------------------------------------------
 * null인 경우
 * ---------------------------------------------------------
 */

const nullableLevel: number | null = null;

/**
 * 왼쪽 값이 null이므로
 * 기본값 3을 사용한다.
 */
const levelWithDefault: number = nullableLevel ?? 3;

console.log(levelWithDefault);

// 3

/**
 * ---------------------------------------------------------
 * undefined인 경우
 * ---------------------------------------------------------
 */

const undefinedRetryCount: number | undefined = undefined;

/**
 * 왼쪽 값이 undefined이므로
 * 기본값 3을 사용한다.
 */
const retryCountWithDefault: number = undefinedRetryCount ?? 3;

console.log(retryCountWithDefault);

// 3

/**
 * ---------------------------------------------------------
 * false
 * ---------------------------------------------------------
 *
 * false도 null이나 undefined가 아니므로
 * 정상적인 값으로 유지된다.
 */

const isServiceActive: boolean = false;

const serviceActiveResult: boolean = isServiceActive ?? true;

console.log(serviceActiveResult);

// false

/**
 * ---------------------------------------------------------
 * 빈 문자열
 * ---------------------------------------------------------
 *
 * "" 역시 null이나 undefined가 아니므로
 * 그대로 유지된다.
 */

const userNickname: string = "";

const displayedNickname: string = userNickname ?? "Guest";

console.log(displayedNickname);

// ""
