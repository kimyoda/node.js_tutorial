// dep1의 평가가 끝나지 않았다면 초기 module.exports 객체를 받는다
const dep1 = require("./dep1.js");
console.log("[dep2 로드] dep1:", typeof dep1);

module.exports = function showDep1() {
  // dep1이 나중에 module.exports를 함수로 교체해도 이 참조는 바뀌지 않음
  console.log("[dep2 호출] dep1:", typeof dep1);
};
