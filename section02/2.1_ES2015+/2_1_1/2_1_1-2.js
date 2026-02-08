/**
 * const: 값을 바꿀 수 없다(상수), 선언과 동시에 값을 넣어야 한다.
 * let: 값을 계속 바꾸 수 있다(변수), 선언만 먼저 해도 괜찮다.
 */

// 재할당 불가능 - 상수
const immutableValue = 0;
immutableValue = 1;

// 재할당이 가능
let mutableValue = 0;
mutableValue = 1;

// const uninitializedConst;