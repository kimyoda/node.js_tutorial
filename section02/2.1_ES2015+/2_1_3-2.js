/**
 * [Enhanced Object Literals (객체 리터럴 확장 기능)]
 * ES6부터 객체를 정의할 때 코드를 더 간결하고 동적으로 작성할 수 있는 문법이 추가되었다.
 */

// 객체 생성
const newObject = {
  // 1. 메서드 축약 표현
  // 기존 sayJS: function() { ... }, function 키워드와 콜론을 생략, 더 간결하게 메서드를 정의할 수 있다.
  sayJS() {
    console.log('JS');
  },
  // 2. 속성명 축약 표현
  // sayNode: sayNode, 객체의 키(key)와 할당하려는 변수명(value)이 동일, 한 번만 적을 수 있다.
  sayNode,
  // 3. 속성명
  // 객체를 만든 후 외부에서 newOjbect[es + 6] = 'Fantastic' 형태로 주입, 객체 선언 내부에서 대괄호 []를 사용해 식의 결과(문자열)을 즉시 속성명(key)로 쓸 수 있다.
  [es + 6]: 'Fantastic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic

