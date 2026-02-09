/**
 * Map(맵) 자료구조
 * ES6부터 추가된 '키-값(Key-Value)' 쌍을 저장하는 자료구조이다
 * 일반 객체(Object)와 달리, 객체나 함수 등 모든 타입을 키(Key)로 쓸 수 있다.
 * 데이터의 삽입 순서가 보장, 번번한 추가/삭제 시 성능이 더 우수하다.
 */

// 1. Map 생성
const m = new Map();

// 2. set(키, 값): 데이터 저장
m.set('a', 'b'); // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c'); // 문자열이 아닌 값을 키로 사용 가능합니다

// 빈 객체 생성
const d = {};
m.set(d, 'e'); // 객체 자체를 키로 사용할  수 있다.

// get(키): 데이터 조회
m.get(d); // get(키)로 속성값 조회
console.log(m.get(d)); // e

// 4. size 요소의 개수 확인
m.size; // size로 속성 개수 조회, Map은 size 속성으로 바로 확인 가능하다.
console.log(m.size) // 3

// 반복문 (for ... of)
// Map은 이터러블(iterable)하므로 for  ...  of 문을 바로 ㅆ ㅡㄹ 수 있다. 데이터를 넣은 순서가 정확히 보장된다.
for (const [k, v] of m) { // 반복문에 바로 넣어 사용 가능합니다
  console.log(k, v); // 'a', 'b', 3, 'c', {}, 'e'
} // 속성 간의 순서도 보장됩니다

// forEach 메서드
// 배열처럼 forEach를 지원한다. (값, 키, 맵 순서로 인자를 받는다)
m.forEach((v, k) => { // forEach도 사용 가능합니다
  console.log(k, v); // 결과는 위와 동일
});

// has(키): 존재 여부 확인, 배열의 includes나 indexOf보다 성능이 빠르다.
m.has(d); // has(키)로 속성 존재 여부를 확인합니다
console.log(m.has(d)); // true

// 삭제 및 초기화
m.delete(d); // delete(키)로 속성을 삭제합니다
m.clear(); // clear()로 전부 제거합니다
console.log(m.size); // 0

