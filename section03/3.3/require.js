console.log("require는 파일 중간에서 호출할 수 있습니다.");

module.exports = "이 모듈이 내보낸 값";

// resolve는 모듈을 실행하지 않고 해석된 경로만 반환
const resolvedPath = require.resolve("./var.js");
console.log("로드 전:", require.cache[resolvedPath] !== undefined);

require("./var.js");
console.log("로드 후:", require.cache[resolvedPath] !== undefined);

// 이 파일을 node로 직접 실행했을 때만 true
console.log("진입점인지?", require.main === module);
console.log("진입 파일:", require.main?.filename);
