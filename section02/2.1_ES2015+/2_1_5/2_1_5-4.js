/**
 * 배열 구조 분해 할당(Array Destructuring)
 * 배열의 요소를 순서대로 꺼내서 변수에 담는 ES6 문법이다.
 * 객체와 달리 키 이름이 없어, 변수 이름을 내 마음대로 지울 수 있다.
 */

// const [변수명, 변수명, ...] = 배열;
// 첫번째 요소 array[0], 두번째 요소 array[1], 쉼표를 연달아 쓰면 해당 순서를 건너뛴다.
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;