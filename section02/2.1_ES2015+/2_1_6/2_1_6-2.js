/**
 * ES6 (Class)
 * Java, C# 등과 유사한 문법으로 직관적이다.
 * 내부적으로 여전히 프로토타입 기반 동작, `extends`, `super` 등으로 상속 구현이 매우 간편하다.
 */

class Human {
  // 생성지: function 키워드 생략, 기본값 매개변수 사용 가능
  constructor(type = "human") {
    this.type = type;
  }

  // 정적 메서드: static 키워드 사용
  static isHuman(human) {
    return human instanceof Human;
  }

  // 인스턴스 메서드: prototoype에 자동으로 등록
  breathe() {
    alert("h-a-a-a-m");
  }
}

/**
 * extends:
 * 복잡한 프로토타입 연결을 자동으로 처리한다.
 */
class Zero extends Human {
  constructor(type, firstName, lastName) {
    // super(): 부모 생성자 호출 대체
    // this를 사용하기 전에 반드시 super()를 먼저 호출
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    // super.메서드() 부모 프로토타입 메서드 호출이 가능
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero("human", "Zero", "Cho");
Human.isHuman(newZero); // true
