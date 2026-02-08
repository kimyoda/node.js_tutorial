/**
 * ES5 (Prototype)
 * 생성자 함수와 prototpye 객체를 직접 조작하여 상속을 구현한다
 * 코드가 길고, 상속 관계를 설정하기 복잡하다
 */

var Human = function (type) {
  this.type = type || "human";
};

// 정적 메소드: 생성자 함수에 직접 붙인다
Human.isHuman = function (human) {
  return human instanceof Human;
};

// 인스턴스 메서드: 프로토타입에 정의한다
Human.prototype.breathe = function () {
  alert("h-a-a-m");
};

var Zero = function (type, firstName, lastName) {
  // 1. 부모 생성자 호출 (super(type)과 동일)
  // apply를 사용, this를 바인딩하고 인자를 전달한다
  Human.apply(this.arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

// 2. 상속 연결(extends Huamn과 동일)
// Human 프로토타입을 기반으로 새로운 객체를 만들어 Zero 프로토타입으로 설정
Zero.prototype = Object.create(Human.prototype);
// 3. 생성자 재설정
// 프로토타입을 덮어씌우면 constructor가 Human을 가리키므 다시 Zero로 수정
Zero.prototype.constructor = Zero; // 상속하는 부분
// 자식 메서드를 추가
Zero.prototype.sayName = function () {
  alert(this.firstName + " " + this.lastName);
};
var oldZero = new Zero("human", "Zero", "Cho");
Human.isHuman(oldZero); // true
