import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// import.met.url은 운영체제 경로 문자열이 아닌 file: URL이다
const filename = fileURLToPath(import.meta.url);

console.log("모듈 URL:", import.meta.url);
console.log("파일:", filename);
console.log("폴더:", dirname(filename));

// 원본처럼 아래 줄을 실행하면 ESM에 ReferenceError가 발생
// console.log(__filename);
