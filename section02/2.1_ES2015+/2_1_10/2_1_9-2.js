/**
 * Set: 중복이 없는 자료 구조
 * 배열과 비슷하나, 중복된 값을 허용하지 않는다
 * 배열의 중복 요소를 제거할 때 매우 유용하게 쓰인다.
 */

const arr = [1, 3, 2, 7, 2, 6, 3, 5];

// Set 생성 (중복 제거), 배열(arr)을 Set으로 변환하면 중복된 값(2, 3)이 자동으로 사라진다.
const s = new Set(arr);

// 다시 배열로 변환
// Set은 인덱스(s[0])로 접근할 수 없어, 다시 배열로 바꿔줘야 한다.
// Array.from 또는 전개 연산자 [... s]를 사용한다.
const result = Array.from(s);
console.log(result); // 1, 3, 2, 7, , 5

/* [추가 기능 설명] */
const set = new Set();
set.add(1).add(1).add('A'); // 메서드 체이닝 가능, 중복된 1은 하나만 들어감
console.log(set.size); // 2

console.log(set.has(1)); // true (값이 있는지 확인)
set.delete(1); // 값 삭제
set.clear();   // 전체 삭제