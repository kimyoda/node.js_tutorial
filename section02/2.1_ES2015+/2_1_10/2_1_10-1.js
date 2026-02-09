/**
 * Nulish Coalescing Operator (널 병합 연산자)
 * ??, null이나 undefined인 경우에 기본값을 할당하고 싶을 때 사용한다.
 * 0, false, ''(빈 문자열) 등 유효한 데이터가 사라지는 것을 방지한다.
 */

// 기존 방식 or 연산자(||) 의 한계
const a = 0;
const b = a || 3; // || 연산자는 falsy 값이면 뒤로 넘어감
console.log(b); // 3

const c = 0;
// 널 병합 연산자 ??
const d = c ?? 3; // ?? 연산자는 null과 undefined일 때만 뒤로 넘어감
console.log(d); // 0;

const e = null;
// e가 비어있으므로 기본값 3을 사용
const f = e ?? 3;
console.log(f); // 3;

const g = undefined;
// g가 정의되지 않았으므로 기본값 3을 사용
const h = g ?? 3;
console.log(h); // 3;
