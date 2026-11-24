// import = require를 쓰면 cache.ts Cachedata 타입 연결
import cache = require("../cache");

// 같은 모듈을 다시 불러와서 속성을 볼 수 있음
cache.message = "캐싱된다";
