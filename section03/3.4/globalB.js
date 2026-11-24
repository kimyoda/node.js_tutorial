const A = require("./globalA");

// 같은 Node.js 프로세스 모듈에 공유되는 전역 객체에 값을 설정.
global.message = "안녕하세요";
console.log(A());

// 전역값은 다른 코드와 이름이 충돌할 수 있어 실무에서 명시적으로 전달
