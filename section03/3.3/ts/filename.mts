import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const moduleUrl: string = import.meta.url;
const filename: string = fileURLToPath(moduleUrl);
const directory: string = dirname(filename);

// URL을 경로로 변환하면 공백이 포함된 경로나 Windows 경로도 올바르게 처리
console.log("모듈 URL:", moduleUrl);
console.log("파일:", filename);
console.log("폴더:", directory);
