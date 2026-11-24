// dep1 -> dep2 -> dep1 순으로 이어짐
const showDep2 = require("./dep1.js");
const showDep1 = require("./dep2.js");

// 두 로드가 끝난 뒤, 각 모듈이 보관한 참조를 확인
showDep2();
showDep1();
