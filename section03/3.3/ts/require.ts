export {}; // 다른 TS 파일과 변수 이름이 충돌하지 않게 모듈로 만듬

console.log("require는 파일 중간에서 호출할 수 있습니다.");
module.exports = "이 모듈이 내보낸 값";

// resolve는 모듈을 실행하지 않고 해석된 경로만 반환
const resolvedPath = require.resolve("./var.js");
console.log("로드 전:", require.cache[resolvedPath] !== undefined);

require("./var.js");
console.log("로드 후:", require.cache[resolvedPath] !== undefined);

console.log("진입점인지?", require.main === module);
// 진입점이 CommonJS 모듈이 아닐 수도 있어 ?.로 접근
console.log("진입 파일:", require.main?.filename);
