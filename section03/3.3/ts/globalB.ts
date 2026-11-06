import readMessage = require("../globalA");

// globalA의 전역 타입 선언을 사용. 실제 값은 여기서 설정
globalThis.message = "안녕하세요";
console.log(readMessage());
