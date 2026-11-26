"use strict";
export {};

// 엄격 모드여도 CommonJS 모듈 최상위의 this와 함수 안의 this는 구분
console.log("최상위 this === module.exports:", this === module.exports);
console.log("최상위 this === exports:", this === exports);

function showThis(this: unknown): void {
  // this: unknow은 TS 타입 선언. 실제 함수 인자로 전달되지 않음
  // 엄격 모드에 객체 없이 일반 함수로 호출하면 this는 undefined이다
  console.log("함수 this === globalThis:", this === globalThis);
}

showThis();
