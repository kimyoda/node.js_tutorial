// 순환 로드 도중 값의 형태를 함수라고 단정하지 않고 관찰한다
const dep2: unknown = require("./dep2.js");

// dep2 코드가 끝난 뒤 이 줄로 들어온다
console.log("[dep1 로드] dep2:", typeof dep2);

function showDep2(): void {
  console.log("[dep1 호출] dep2:", typeof dep2);
}

export = showDep2;
