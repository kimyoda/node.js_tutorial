// cacheRequire1.js와 같은 cache.js를 불러온다
const passport = require("passport");

passport.hello = "whatever";
// 앞에서 추가한 message가 보임. 새 객체가 아니라 같은 참조이기 때문
console.log(cache);
