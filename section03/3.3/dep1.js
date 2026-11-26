const dep2 = require("./dep2.js");

// dep2 코드가 끝난 뒤 이 줄로 들어온다
console.log("[dep1 로드] dep2:", typeof dep2);

module.exports = function showDep2() {
  console.log("[dep1 호출] dep2:", typeof dep2);
};
