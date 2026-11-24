// CommonJS 최상위 this는 처음에 module.exports와 같은 객체를 가리킴
console.log("최상위 this === module.exports:", this === module.exports);
console.log("최상위 this === exports:", this === exports);

function showThis() {
  // 이 JS 파일은 비엄격모드. 일반 함수로 호출하면 this가 전역 객체
  console.log("함수 this === globalThis:", this === globalThis);
}

showThis();
