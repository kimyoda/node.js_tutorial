// 순환 로드 도중 값의 형태를 함수라고 단정하지 않고 관찰한다
const dep1: unknown = require("./dep1.js");
// dep2 코드가 끝난 뒤 이 줄로 들어온다
console.log("[dep2 로드] dep1:", typeof dep1);

function showDep1(): void {
  console.log("[dep2 호출] dep1:", typeof dep1);
}

export = showDep1;
