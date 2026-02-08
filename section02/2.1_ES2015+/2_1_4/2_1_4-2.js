/**
 * this 바인딩 차이
 * 함수 선언문(function)과 화살표 함수(=>)는 'this'를 다루는 방식이 다르다.
 */

// ES5 방식, 함수 선언문 사용
var relationship1 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends: function () {
    // this는 relationship1를 가리킨다.
    var that = this; // relationship1을 가리키는 this를 that에 저장, 내부 함수에서 this가 바뀌는 것을 막기 위해 변수(that)에 저장한다.
    this.friends.forEach(function (friend) {
      // 일반 function은 자신만의 고유한 this를 가진다. 
      // this는 전역 객체(window)나 undefined가 되어버려 relationship1을 찾을 수 없습니다.
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

// 2. ES6 방식, 화살표 함수
const relationship2 = {
  name: 'zero',
  friends: ['nero', 'hero', 'xero'],
  logFriends() {
    // 여기서 this는 relationship2의 객체이다.
    this.friends.forEach(friend => {
      // 화살표 함수는 자신만의 this를 생성하지 않는다.
      // 대신 바로 바깥쪽 스코프의 this를 그대로 물려받는다.(Lexical this)
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();