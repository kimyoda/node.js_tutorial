// 모듈에서 공유할 홀수·짝수 안내 문구
const odd = "CJS: 홀수";
const even = "CJS: 짝수";

// require("./var.js")가 들려주는 값은 객체이다
module.exports = { odd, even };
