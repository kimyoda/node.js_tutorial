/**
 * =========================================================
 * 1. Set
 * =========================================================
 *
 * Set: 중복이 없는 자료 구조
 * 배열과 비슷하지만 중복된 값을 허용하지 않는다.
 *
 * TypeScript에서는 Set<number>, Set<string>처럼
 * Set 내부에 어떤 타입의 값이 들어가는지 지정할 수 있다.
 */

// number 배열
const arr: number[] = [1, 3, 2, 7, 2, 6, 3, 5];

// Set<number> 생성
// 배열을 Set으로 변환하면 중복된 값 2, 3이 자동으로 제거
const s: Set<number> = new Set<number>(arr);

// Set을 다시 number[] 배열로 변환
// Set을 배열처럼 s[0] 방식으로 접근할 수 없다
const result: number[] = Array.from(s);

console.log(result); // [1, 3, 2, 7, 6, 5]

// 전개 연산자를 사용할수도 있다
const result2: number[] = [...s];

console.log(result2);
// [1, 3, 2, 7, 6, 5]

/**
 * Set의 추가 기능
 */

const set: Set<number | string> = new Set<number | string>();

// add()는 자기 자신(Set)을 반환하여 메서드 체이닝이 가능
set.add(1).add(1).add("A");

// 중복된 1은 하나만 저장되어 크기는 2
console.log(set.size); // 2

// 특정 값이 존재하는 지 확인
console.log(set.has(1)); // true

// 특정 값 삭제
set.delete(1);
// 전체 값 삭제
set.clear();
