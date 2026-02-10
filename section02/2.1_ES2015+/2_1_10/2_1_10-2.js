/**
 * Optional Chaining (옵셔널 체이닝)
 * ?.
 * 객체 내부의 속성에 접근할 때, 참조 대상이 null이나 undefined여도 에러를 발생시키징 ㅏㄶ고 안전하게 'undefined'를 반환한다.
 */

// 일반 객체 경우
const a = {}
a.b; // a가 객체이므로 문제없음

// 값이 null 또는 undefined 인경우
const c = null;
// 기존 방식 - 에러 발생
try {
  c.d;
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading 'd')
}
// 옵셔널 체이닝 - 속성 접근 , c가 있으면 .d 없으면 null or undefined 반환
c?.d; // 문제없음

// 메서드 호출 시
try {
  c.f();
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading 'f')
}
// c가 존재할 때만 ./f()를 실행. c가 없으면 함수 실행 시도 조차 안한다.
c?.f(); // 문제없음

// 배열(인덱스)접근 시
try {
  c[0];
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading '0')
}
// 대괄호 []앞에도 .을찍어 c?.[0]형태로 사용한다.
c?.[0]; // 문제없음