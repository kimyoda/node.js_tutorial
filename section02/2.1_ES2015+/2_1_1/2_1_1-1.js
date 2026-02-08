/**
 * var: 함수 레벨 스코프 (Function Level Scope) - 블록({})을 무시하고 함수 전체에 적용된다.
 * const, let: 블록 레벨 스코프 (Block Level Scope) - 블록({}) 안에서만 적용된다.
 */

if (true) {
  // var if문, for문 등의 블록 범위를 무시한다.
  var x = 3;
};
// 블록 밖에서도 접근이 가능하다.(전역 변수처럼 동작, 함수를 내리면 함수 전체로 호이스팅한다)
console.log(x);

if (true) {
  // const, let은 중괄호로 감싸진 블록 내부에서만 적용된다.
  const y = 3;
};
console.log(y); // ReferenceError: y is not defined
