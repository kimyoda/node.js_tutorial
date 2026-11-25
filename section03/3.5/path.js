const path = require("node:path");

const filename = __filename;

console.log("경로 구분자:", path.sep);
console.log("PATH 항목 구분자:", path.delimiter);
console.log("디렉터리:", path.dirname(filename));
console.log("확장자:", path.extname(filename));
console.log("파일명:", path.basename(filename));
console.log(
  "확장자 없는 파일명:",
  path.basename(filename, path.extname(filename)),
);

const parsed = path.parse(filename);
console.log("분해:", parsed);
console.log("조립:", path.format(parsed));

// Windows 경로의 결과르 macOS나 Linux에 같게 재현(해당 부분은 경로에 맞게 재수정)
const windowsFile = "C:\\study\\node\\sample.js";
console.log(
  "Windows 정규화:",
  path.win32.normalize("C:/study/../study//sample.js"),
);
console.log("Windows 절대 경로?", path.win32.isAbsolute(windowsFile));
console.log("상대 경로?", !path.isAbsolute("./home"));
console.log(
  "Windows 상대 경로:",
  path.win32.relative("C:\\study", windowsFile),
);

// join은 경로 조각을 이어 정리, resolve는 오른쪽의 절대 경로부터 해석
console.log("POSIX join:", path.posix.join("/study", "node", "/examples"));
console.log(
  "POSIX resolve:",
  path.posix.resolve("/study", "node", "/examples"),
);
